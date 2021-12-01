<template>
  <div class="windowAccess" v-show="flagAccess">
    <div class="window_access_bg" @click="windclose"></div>
    <div class="window_access_wrap">
      <div v-for="(it, i) in allAccess" :key="i">
        <input
          type="checkbox"
          id="chbx"
          :value="it"
          v-model="checkedAccessArr"
        />
        <label for="chbx">{{ it }}</label>
      </div>
      <div class="add_access" @click="addNewAccess(globalId)">Add</div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  props: {
    flagAccess: Boolean,
  },
  data: function () {
    return {
      checkedAccessArr: [],
    };
  },
  methods: {
    ...mapActions("group", { newGlobalArr: "newGlobalArr" }),
    windclose() {
      this.$emit("closewindowAcc");
    },
    addNewAccess(ind) {
      let accessIngroup = this.allGroup.find((el) => el.id === ind);
      accessIngroup.accessright = this.checkedAccessArr;
      this.windclose();
      this.checkedAccessArr = [];
      this.newGlobalArr(this.allGroup);
    },
    checkedAcc() {
      let accessIngroup = this.allGroup.find((el) => el.id === this.globalId);
      this.checkedAccessArr = accessIngroup.accessright;
    },
  },
  computed: {
    ...mapGetters("group", { allGroup: "allGroup" }),
    ...mapGetters("access", { allAccess: "allAccess" }),
    ...mapGetters("group", { globalId: "globalId" }),
  },
  watch: {
    flagAccess() {
      this.checkedAcc();
    },
  },
};
</script>
<style scoped>
.add_access {
  cursor: pointer;
}
.window_access_bg {
  width: 100%;
  height: 100%;
  z-index: inherit;
  position: fixed;
  top: 0;
  left: 0;
}
.windowAccess {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  background-color: rgb(0, 0, 0, 0.3);
}
.window_access_wrap {
  background: #fff;
  width: 50%;
  padding: 10px;
  margin: 50px auto;
  position: relative;
  z-index: 1020;
}
</style>
