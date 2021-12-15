<template>
  <ul>
    <li v-for="(it, i) in accessComp" :key="i">{{ it }}</li>
    <div class="call_window_roles" v-show="showAddAccess" @click="callWindow">
      + Add Access
    </div>
  </ul>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  methods: {
    callWindow() {
      this.$emit("callwindacc");
    },
  },
  computed: {
    ...mapGetters("group", { allData: "allData" }),
    ...mapGetters("group", { globalId: "globalId" }),
    accessComp() {
      if (this.globalId !== null) {
        return this.allData.find((el) => el.id === this.globalId).accessright;
      }
    },
    showAddAccess() {
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
