<template>
 	<div class='block_list_group_and_role' ref='blockGroup'>
		<div
			class="items_group_list"
			v-for='it in dispalyGroup'
			:key='it.id'
			@click='fillGroupArr($event, it.id)'
		>	
			{{it.title}}
			<span 
				class='edit'
				@click.stop="callWindowEdit(it.id)"
			>R</span>
		</div>
		<div		
			v-show="flagInputGroup"
		>
			<input type="text" 
				v-model='valueForGroup'
				ref='inputAddGroup'
			>	
			<div class="input_btn_wrap">
				<div @click="addNewGroup">Add</div>
				<div @click="inpCancel">Cancel</div>
			</div> 			
		</div>
		<div
			class='addgroup'
			@click='addGroup'
			>+ Add New Group
		</div>
		<editgroup
			:flagEdit='flagEdit'
			:id='idForEdit'
			@closewindowGroup='closeWindowEdit()'
		>
		</editgroup>

	</div>   
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
import editgroup from '..//components/editgroup.vue';
export default {
	components: {
		editgroup
	},
    data: function() {
        return {
            valueForGroup: "",
            flagInputGroup: false,
			flagEdit: false,
			idForEdit: null

        }
    },
    methods: {
        ...mapActions('group', { newGlobalId: 'newGlobalId'}),
		...mapActions('group', {newGlobalArr: 'newGlobalArr'}),
		...mapActions('group', {pageNumbers: 'pageNumbers'}),
		...mapActions('group', {setPages: 'setPages'}),
		pagesCalc() {
			let pageNumbers = Math.ceil(this.groupGlobalArr.length / this.itemsPerPage);
			let arr =[]
			for( let ind = 1; ind <= pageNumbers; ind ++) {
				arr.push(ind)
			}
			this.setPages(arr)
		},
		paginate(arr) {
			let page = this.page;
			let itemsPerPage = this.itemsPerPage;
			let from = (page * itemsPerPage) - itemsPerPage;
			let to = (page * itemsPerPage);
			return arr.slice(from, to);
		},
        fillGroupArr(event, ind) {
			this.activeGroup(event);
			this.newGlobalId(ind)
		},
        activeGroup(event) {
			let arr = [...this.$refs.blockGroup.children]
			arr.forEach((el) => {
				if(el.classList.contains('items_group_list')) {
					el.classList.remove('active')
				}
			})
			event.target.classList.add('active')
		},
        addGroup() {
			this.flagInputGroup = true
			this.$nextTick(()=> {
			this.$refs.inputAddGroup.focus()
			})		
		}, 
        addNewGroup() {
			if( this.valueForGroup != ''){
				let obj = {};
				if( this.groupGlobalArr.length > 0){
					let arr = this.groupGlobalArr
					obj.id = arr[arr.length - 1].id + 1;
				}
				else {
					obj.id = 1
				}
				obj.title = this.valueForGroup
				obj.roles = []
				obj.accessright = []	
				this.allGroup.push(obj)
				this.flagInputGroup = false
				this.valueForGroup = ''
				this.newGlobalArr(this.allGroup)
			}

		},
        inpCancel() {
			this.valueForGroup = ''
			this.flagInputGroup = false
		},
		callWindowEdit(ind) {
			this.idForEdit = ind
			this.flagEdit = true;
		},
		closeWindowEdit() {
			this.flagEdit = false
		}
		

    },
    computed: {
        ...mapGetters('group', { globalId: 'globalId'}),
        ...mapGetters( 'group', { allGroup: 'allGroup'}),
		...mapGetters('group', {groupGlobalArr: 'groupGlobalArr'}),
		...mapGetters('group', {itemsPerPage: 'itemsPerPage'}),
		...mapGetters('group', {pages: 'pages'}),
		...mapGetters('group', {page: 'page'}),
		dispalyGroup() {
			return this.paginate(this.groupGlobalArr)
		}
    },

	mounted(){
		this.newGlobalArr(this.allGroup)
		this.pagesCalc()
	}
	
}
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
	input[type=text] {
		width: 100%;
		box-sizing: border-box;

	}
	.addgroup {
		cursor: pointer;
		margin: 5px 0px;
		transition: .5s;
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
	.items_group_list.active{
		color: #000;
		background-color: white;
	}


</style>