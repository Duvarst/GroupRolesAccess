<template>
  <div class="windowEdit" v-show="flagEdit">
    <div class="window_edit_bg" @click="windclose"></div>
    <div class="window_edit_wrap">
      <label for="title">Enter a new name</label>
      <input type="text" id="title" v-model="newTitle" ref="inputEdit" />
      <div class="block_btn">
        <div class="add_new_title" @click="addNewTitle">Edit</div>
        <div class="delGr" @click="deleteGroup">Delete Group</div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  props: {
    flagEdit: Boolean,
  },
  data: function () {
    return {
      newTitle: "",
    };
  },
  methods: {
    deleteGroup() {
      this.$emit("delgroup");
      this.newTitle = "";
    },
    windclose() {
      this.$emit("closeeditwindow");
    },
    addNewTitle() {
      this.$emit("addtitle", this.newTitle);
      this.newTitle = "";
    },
    originalTitle() {
      let itemGroup = this.allData.find((el) => el.id === this.globalId);
      this.newTitle = itemGroup.title;
      this.$nextTick(() => {
        this.$refs.inputEdit.focus();
      });
    },
  },

  computed: {
    ...mapGetters("group", { allData: "allData" }),
    ...mapGetters("group", { globalId: "globalId" }),
  },
  watch: {
    flagEdit() {
      if (this.flagEdit) {
        this.originalTitle();
      }
    },
  },
};
</script>
<style scoped>
.block_btn {
  display: flex;
  justify-content: space-between;
  padding: 0px 10px;
}
#title {
  margin: 5px 0px;
}
.delGr {
  cursor: pointer;
}
.add_new_title {
  cursor: pointer;
}
.window_edit_bg {
  width: 100%;
  height: 100%;
  z-index: inherit;
  position: fixed;
  top: 0;
  left: 0;
}
.windowEdit {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  background-color: rgb(0, 0, 0, 0.3);
}
.window_edit_wrap {
  display: flex;
  flex-direction: column;
  background: #fff;
  width: 50%;
  padding: 10px;
  margin: 50px auto;
  position: relative;
  z-index: 1020;
}
</style>
