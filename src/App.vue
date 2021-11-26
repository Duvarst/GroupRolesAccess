<template>

<div>
		<header>
			<div class="container">
				<div class="row">
					<div class="title">
						<h1>Permissions</h1>
					</div>
					<div 
						class="search_block"
					>
						<searchcomp></searchcomp>
					</div>
					
				</div>
				<hr>
			</div>
		</header>
		<section class='main_content'>
			<div 
				class="items_main_content"
			>
				<span class='title_block'>Group</span>
				<div class=line></div>	
				<groupcomp>
				</groupcomp>
			</div>

			<div class='items_main_content'>
				<span class='title_block'>Roles</span>
				<div class=line></div>
				<rolescomp
					@callwindrol='callWindowRoles()'>
				</rolescomp>	
			</div>	
			<div class='items_main_content'>
				<span class='title_block'>Access</span>
				<div class=line></div>
				<accesscomp
					@callwindacc="callWindowAccess()"
				>		
				</accesscomp>
			</div>
		</section>
		<div class="block_pagination">
			<paginationcomp></paginationcomp>
		</div>
	
		<rolesaddcomp
		:flagRole='flagRolesWindow'
		@closewindowrol='closeWindowRoles()'
		>
		</rolesaddcomp>
		<accessaddcomp
		:flagAccess='flagAccessWindow'
		@closewindowAcc='closeWindowAccess()'
		>
		</accessaddcomp>

</div>
  
</template>
 <script>
 import { mapGetters, mapActions} from 'vuex';
 import rolesaddcomp from './components/rolesaddcomp.vue';
 import groupcomp from './components/groupcomp.vue';
 import rolescomp from	'./components/rolescopm.vue';
 import accesscomp from './components/accesscomp.vue';
  import accessaddcomp from './components/accessaddcopm.vue';
  import searchcomp from "./components/searchcomp.vue";
  import paginationcomp from './components/paginationcomp.vue';
	export default {
		components: {
			rolesaddcomp,
			groupcomp,
			rolescomp,
			accesscomp,
			accessaddcomp,
			searchcomp,
			paginationcomp
		},
		data: function() {
			return {
				flagRolesWindow: false,
				flagAccessWindow: false	
			}
		},
		methods: {
			...mapActions('group', {newGlobalArr: 'newGlobalArr'}),
			...mapActions('group', {extractData: 'extractData'}),
			...mapActions('group', {newData: 'newData'}),
			closeWindowRoles() {	
				this.flagRolesWindow = false	
			},
			callWindowRoles() {	
				this.flagRolesWindow = true	
			},
			closeWindowAccess() {	
				this.flagAccessWindow = false	
			},
			callWindowAccess() {	
				this.flagAccessWindow = true	
			},
			getsTr() {
				let str = this.allGroup 
				console.log(str)
				
			}
		},
		computed: {
			...mapGetters( 'group', { allGroup: 'allGroup'})
		},
		created(){
			this.extractData()
		}

	}
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