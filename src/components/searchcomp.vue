
<template>
    <input type="text" 
        v-model='inputVal'
        @input="searchInGroup"
        ref="inputsearch"
    >
    <select name="" id="" 
        v-model="searchType"
        ><option disabled value="">Select the search type</option>
        <option value="group">Search Group</option>
        <option value="roles">Search Roles</option>
        <option value="access">Search access</option>
    </select>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
    data: function() {
        return {
            inputVal: '',
            searchType: ''
        }
    },
    methods: {
        ...mapActions('group', {newGlobalArr: 'newGlobalArr'}),
        ...mapActions('group', {pageNumbers: 'pageNumbers'}),
		...mapActions('group', {setPages: 'setPages'}),
		...mapActions('group', {changingArrForDisplay: 'changingArrForDisplay'}),
        ...mapActions('group', { newGlobalId: 'newGlobalId'}),
        values() {         
            this.newInputGlobalVal(this.inputVal)
            
        },
        disabledInput() {      
           if( this.searchType !== ''){
               this.$refs.inputsearch.disabled = false
           }
        },
        searchInGroup() {
				if( this.inputVal !== '') {		
                    this.pageNumbers(1)
                    this.newGlobalId(null)			
					let obj = this.allGroup;
					let search = this.inputVal.toLowerCase()
					let arr = []
					if (this.searchType === 'group') {
                        obj.forEach(element => {
							if(element.title.toLowerCase().indexOf(search, 0) !== -1) {
								arr.push(element)
							}
					    });
                    }
                    else if(this.searchType === 'roles') {
                        obj.forEach(element => {
                            let flag = false
                            element.roles.forEach((el)=>{
                                if(el.toLowerCase().indexOf(search, 0) !== -1) {
								    flag = true
							    }
                            })
                            if(flag) {
                                arr.push(element)
                            }
					    });
                    }
                    else if (this.searchType ==='access') {
                         obj.forEach(element => {
                            let flag = false
                            element.accessright.forEach((el)=>{
                                if(el.toLowerCase().indexOf(search, 0) !== -1) {
								    flag = true
							    }
                            })
                            if(flag) {
                                arr.push(element)
                            }
					    });
                    }

				
					 this.newGlobalArr(arr)	
				}
				else {
				    this.newGlobalArr(this.allGroup)
				}
			} 
    },
    computed: {
       		...mapGetters( 'group', { allGroup: 'allGroup'}),
			...mapGetters('roles',{ allRoles: 'allRoles'}),
			...mapGetters('group', { globalId: 'globalId'}),
			...mapGetters('group', {groupGlobalArr: 'groupGlobalArr'}),
			...mapGetters('group', {inputGlobalVal: 'inputGlobalVal'}),
			...mapGetters('group', {searchTypeGlobal: 'searchTypeGlobal'}),
            ...mapGetters('group', {arrForDisplay: 'arrForDisplay'}),
            ...mapGetters('group', {page: 'page'})

    },
    watch: {
        searchType() {
            this.disabledInput()
        }
    },
    mounted() {
        if(this.searchType == ''){
            this.$refs.inputsearch.disabled = true
        }
    }
    
}
</script>
<style scoped>

</style>