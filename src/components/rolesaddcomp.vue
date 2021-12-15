<template>
  <div class="windowRoles" v-show="flagRole">
    <div class="window_roles_bg" @click="windclose"></div>
    <div class="window_Roles_wrap" ref="rolesLIst">
      <div v-for="(it, i) in allRoles" :key="i">
        <input
          type="checkbox"
          id="chbx"
          :value="it"
          v-model="checkedRolesArr"
        />
        <label for="chbx">{{ it }}</label>
      </div>
      <div class="add_roles" @click="addNewRoles()">Add</div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  props: {
    flagRole: Boolean,
  },
  data: function () {
    return {
      checkedRolesArr: [],
    };
  },
  methods: {
    windclose() {
      this.$emit("closewindowrol");
    },
    addNewRoles() {
      this.$emit("rolesadd", this.checkedRolesArr);
      // this.windclose();
      this.checkedRolesArr = [];
    },
    checkedRole() {
      let rolesIngroup = this.allData.find((el) => el.id === this.globalId);
      this.checkedRolesArr = rolesIngroup.roles;
    },
  },
  computed: {
    ...mapGetters("group", { allData: "allData" }),
    ...mapGetters("roles", { allRoles: "allRoles" }),
    ...mapGetters("group", { globalId: "globalId" }),
  },
  watch: {
    flagRole() {
      this.checkedRole();
    },
  },
};
</script>

<style scoped>
.add_roles {
  cursor: pointer;
}
.window_roles_bg {
  width: 100%;
  height: 100%;
  z-index: inherit;
  position: fixed;
  top: 0;
  left: 0;
}
.windowRoles {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  background-color: rgb(0, 0, 0, 0.3);
}
.window_Roles_wrap {
  background: #fff;
  width: 50%;
  padding: 10px;
  margin: 50px auto;
  position: relative;
  z-index: 1020;
}
</style>
