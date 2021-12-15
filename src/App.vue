<template>
  <div>
    <header>
      <div class="container">
        <div class="row">
          <div class="title">
            <h1>Permissions</h1>
          </div>
          <div class="search_block">
            <searchcomp @searchresult="searchResult($event)"></searchcomp>
          </div>
        </div>
        <hr />
      </div>
    </header>
    <section class="main_content">
      <div class="items_main_content">
        <span class="title_block">Group</span>
        <div class="line"></div>
        <groupcomp
          @addgroup="groupAdd($event)"
          @activegroup="activeGroup($event)"
          @calleditwindow="callEditGroup($event)"
        >
        </groupcomp>
      </div>

      <div class="items_main_content">
        <span class="title_block">Roles</span>
        <div class="line"></div>
        <rolescomp @callwindrol="callWindowRoles()"> </rolescomp>
      </div>
      <div class="items_main_content">
        <span class="title_block">Access</span>
        <div class="line"></div>
        <accesscomp @callwindacc="callWindowAccess()"> </accesscomp>
      </div>
    </section>
    <div class="block_pagination">
      <paginationcomp @pagetransition="pageTransition($event)"></paginationcomp>
    </div>

    <rolesaddcomp
      :flagRole="flagRolesWindow"
      @rolesadd="rolesAdd($event)"
      @closewindowrol="closeWindowRoles()"
    >
    </rolesaddcomp>
    <accessaddcomp
      :flagAccess="flagAccessWindow"
      @addaccess="addAccess($event)"
      @closewindowAcc="closeWindowAccess()"
    >
    </accessaddcomp>
    <editgroup
      :flagEdit="flagEdit"
      @addtitle="titleAdd($event)"
      @delgroup="groupDel()"
      @closeeditwindow="closeEditGroup()"
    >
    </editgroup>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import rolesaddcomp from "./components/rolesaddcomp.vue";
import groupcomp from "./components/groupcomp.vue";
import rolescomp from "./components/rolescopm.vue";
import accesscomp from "./components/accesscomp.vue";
import accessaddcomp from "./components/accessaddcopm.vue";
import searchcomp from "./components/searchcomp.vue";
import paginationcomp from "./components/paginationcomp.vue";
import editgroup from "./components/editgroup.vue";
export default {
  components: {
    rolesaddcomp,
    groupcomp,
    rolescomp,
    accesscomp,
    accessaddcomp,
    searchcomp,
    paginationcomp,
    editgroup,
  },
  data: function () {
    return {
      flagRolesWindow: false,
      flagAccessWindow: false,
      flagEdit: false,
    };
  },
  methods: {
    ...mapActions("group", { newSearchData: "newSearchData" }),
    ...mapActions("group", { extractData: "extractData" }),
    ...mapActions("group", { newGlobalId: "newGlobalId" }),
    ...mapActions("group", { addRolesInGroup: "addRolesInGroup" }),
    ...mapActions("group", { addAccessInGroup: "addAccessInGroup" }),
    ...mapActions("group", { addNewTitle: "addNewTitle" }),
    ...mapActions("group", { deleteGroup: "deleteGroup" }),
    ...mapActions("group", { addNewGroup: "addNewGroup" }),
    ...mapActions("group", { setPages: "setPages" }),
    ...mapActions("group", { pageNumbers: "pageNumbers" }),

    closeWindowRoles() {
      this.flagRolesWindow = false;
    },
    callWindowRoles() {
      this.flagRolesWindow = true;
    },
    closeWindowAccess() {
      this.flagAccessWindow = false;
    },
    callEditGroup(id) {
      this.newGlobalId(id);
      this.flagEdit = true;
    },
    closeEditGroup() {
      this.flagEdit = false;
    },
    callWindowAccess() {
      this.flagAccessWindow = true;
    },
    rolesAdd(arr) {
      this.addRolesInGroup(arr);
      this.closeWindowRoles();
    },
    addAccess(arr) {
      this.addAccessInGroup(arr);
      this.closeWindowAccess();
    },
    titleAdd(val) {
      this.addNewTitle(val);
      this.closeEditGroup();
    },
    groupDel() {
      this.deleteGroup();
      this.closeEditGroup();
    },
    groupAdd(obj) {
      this.addNewGroup(obj);
    },
    activeGroup(id) {
      this.newGlobalId(id);
    },
    pageTransition(val) {
      this.pageNumbers(val);
    },
    searchResult(arr) {
      this.newSearchData(arr);
      this.pageNumbers(1);
      this.newGlobalId(null);
    },
  },
  computed: {
    ...mapGetters("group", { allData: "allData" }),
  },
  created() {
    this.$nextTick(() => {
      this.extractData();
    });
  },
  mounted() {
    this.$nextTick(() => {
      this.newGlobalId(null);
      this.setPages();
      this.newSearchData([]);
    });
  },
};
</script>

<style>
.block_pagination {
  width: 100%;
  display: flex;
  justify-content: end;
  box-sizing: border-box;
  padding: 10px 20px;
}
.search_block {
  padding: 0px 20px;
  margin: auto 0px;
}
.row {
  justify-content: space-between;
  display: flex;
}
.title_block {
  font-size: 20px;
  margin: 10px 0px;
}
.items_main_content {
  padding: 0px 2px;
  width: 30%;
  border-right: 3px solid #000;
}
.main_content {
  display: flex;
  justify-content: space-around;
}
.line {
  height: 2px;
  width: 100%;
  background: #000;
  margin: 5px 0px 15px 0px;
}
</style>
