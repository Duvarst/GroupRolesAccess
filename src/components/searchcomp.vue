<template>
  <div class="search-wrap">
    <input
      type="text"
      v-model="inputVal"
      @input="searchEvent"
      ref="inputsearch"
    />
    <select name="" id="" v-model="searchType">
      <option disabled value="">Select the search type</option>
      <option value="group">Search Group</option>
      <option value="roles">Search Roles</option>
      <option value="access">Search access</option>
    </select>
    <button class="btn" @click="cancelInput">Cancel</button>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  emits: ["searchresult"],
  data: function () {
    return {
      inputVal: "",
      searchType: "",
    };
  },
  methods: {
    ...mapActions("group", { newGlobalArr: "newGlobalArr" }),
    ...mapActions("group", { pageNumbers: "pageNumbers" }),
    ...mapActions("group", { setPages: "setPages" }),
    ...mapActions("group", { changingArrForDisplay: "changingArrForDisplay" }),
    ...mapActions("group", { newGlobalId: "newGlobalId" }),
    disabledInput() {
      if (this.searchType !== "") {
        this.$refs.inputsearch.disabled = false;
        this.inputVal = "";
        this.searchEvent();
      }
    },
    cancelInput() {
      this.inputVal = "";
      this.searchEvent();
    },
    searchInGroup() {
      if (this.inputVal !== "") {
        let obj = this.allData;
        let search = this.inputVal.toLowerCase();
        let arr = [];
        if (this.searchType === "group") {
          obj.forEach((element) => {
            if (element.title.toLowerCase().indexOf(search, 0) !== -1) {
              arr.push(element);
            }
          });
        } else if (this.searchType === "roles") {
          obj.forEach((element) => {
            let flag = false;
            element.roles.forEach((el) => {
              if (el.toLowerCase().indexOf(search, 0) !== -1) {
                flag = true;
              }
            });
            if (flag) {
              arr.push(element);
            }
          });
        } else if (this.searchType === "access") {
          obj.forEach((element) => {
            let flag = false;
            element.accessright.forEach((el) => {
              if (el.toLowerCase().indexOf(search, 0) !== -1) {
                flag = true;
              }
            });
            if (flag) {
              arr.push(element);
            }
          });
        }

        return arr;
      } else {
        let arr = [];
        return arr;
      }
    },
    searchEvent() {
      this.$emit("searchresult", this.searchInGroup());
    },
  },
  computed: {
    ...mapGetters("group", { allData: "allData" }),
    ...mapGetters("roles", { allRoles: "allRoles" }),
    ...mapGetters("group", { globalId: "globalId" }),
    ...mapGetters("group", { page: "page" }),
  },
  watch: {
    searchType() {
      this.disabledInput();
    },
  },
  mounted() {
    if (this.searchType == "") {
      this.$refs.inputsearch.disabled = true;
    }
  },
};
</script>
<style scoped>
.search-wrap {
  display: flex;
}
select {
  margin: 0px 10px;
}
.btn {
  padding: 0px 15px;
  background: #000;
  border-radius: 3px;
  color: #fff;
  cursor: pointer;
}
</style>
