<template>
  <div class="block_list_group_and_role" ref="blockGroup">
    <div
      class="items_group_list"
      v-for="it in displayGroup"
      :key="it.id"
      @click="activeGroup($event, it.id)"
    >
      {{ it.title }}
      <span class="edit" @click.stop="callWindowEdit(it.id)">R</span>
    </div>
    <div v-show="flagInputGroup">
      <input type="text" v-model="valueForGroup" ref="inputAddGroup" />
      <div class="input_btn_wrap">
        <div @click="addNewGroup">Add</div>
        <div @click="cancelInp">Cancel</div>
      </div>
    </div>
    <div class="addgroup" @click="addGroup">+ Add New Group</div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data: function () {
    return {
      valueForGroup: "",
      flagInputGroup: false,
      searchArr: [],
    };
  },
  methods: {
    paginate(arr) {
      let page = this.page;
      let itemsPerPage = this.itemsPerPage;
      let from = page * itemsPerPage - itemsPerPage;
      let to = page * itemsPerPage;
      return arr.slice(from, to);
    },
    activeGroup(event, ind) {
      this.selectActiveGroup(event);
      this.$emit("activegroup", ind);
    },
    selectActiveGroup(event) {
      let arr = [...this.$refs.blockGroup.children];
      arr.forEach((el) => {
        if (el.classList.contains("items_group_list")) {
          el.classList.remove("active");
        }
      });
      event.target.classList.add("active");
    },
    addGroup() {
      this.flagInputGroup = true;
      this.$nextTick(() => {
        this.$refs.inputAddGroup.focus();
      });
    },
    createObj() {
      if (this.valueForGroup != "") {
        let obj = {};
        if (this.allData.length > 0) {
          let data = this.allData;
          obj.id = data[data.length - 1].id + 1;
        } else {
          obj.id = 1;
        }
        obj.title = this.valueForGroup;
        obj.roles = [];
        obj.accessright = [];
        return obj;
      }
    },
    addNewGroup() {
      this.$emit("addgroup", this.createObj());
      this.flagInputGroup = false;
      this.valueForGroup = "";
    },
    cancelInp() {
      this.valueForGroup = "";
      this.flagInputGroup = false;
    },
    callWindowEdit(id) {
      this.$emit("calleditwindow", id);
    },
  },
  computed: {
    ...mapGetters("group", { allData: "allData" }),
    ...mapGetters("group", { searchResultData: "searchResultData" }),
    ...mapGetters("group", { itemsPerPage: "itemsPerPage" }),
    ...mapGetters("group", { pages: "pages" }),
    ...mapGetters("group", { page: "page" }),
    displayGroup() {
      if (this.searchResultData && this.searchResultData.length > 0) {
        return this.paginate(this.searchResultData);
      } else {
        return this.paginate(this.allData);
      }
    },
  },
};
</script>

<style scoped>
.block_editing_group_and_role {
  margin: 5px 0px;
}
.input_btn_wrap {
  display: flex;
  width: 100%;
  cursor: pointer;
  justify-content: space-evenly;
}
input[type="text"] {
  width: 100%;
  box-sizing: border-box;
}
.addgroup {
  cursor: pointer;
  margin: 5px 0px;
  transition: 0.5s;
}
.items_group_list {
  display: flex;
  justify-content: space-between;
  background-color: grey;
  color: #fff;
  border: 2px solid #000;
  margin: 1px 0px;
  padding: 2px 5px;
  border-radius: 3px;
  cursor: pointer;
  word-break: break-all;
  text-transform: capitalize;
}
.items_group_list.active {
  color: #000;
  background-color: white;
}
</style>
