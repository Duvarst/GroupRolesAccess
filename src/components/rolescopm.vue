<template>
  <div class="block_editing_group_and_role">
    <ul>
      <li v-for="(items, i) in arrRolesComp" :key="i">{{ items }}</li>
      <div class="call_window_roles" v-show="showAddRoles" @click="callWindow">
        + Add Roles
      </div>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  methods: {
    callWindow() {
      this.$emit("callwindrol");
    },
  },
  computed: {
    ...mapGetters("group", { allData: "allData" }),
    ...mapGetters("group", { globalId: "globalId" }),
    arrRolesComp() {
      if (this.globalId !== null) {
        return this.allData.find((el) => el.id === this.globalId).roles;
      }
    },
    showAddRoles() {
      return this.globalId != null ? true : false;
    },
  },
};
</script>
<style scoped>
.block_editing_group_and_role {
  margin: 5px 0px;
}
.call_window_roles {
  margin: 5px 0px;
  cursor: pointer;
}
</style>
