<template>
    <div class='container_pagination'>
        <ul class="pagination"
            ref="blockPage">
            <li class="pg_items"  
                v-for='numPage, i in pages'
                :key='i'
                @click='pagesClick($event, numPage)'
            >{{numPage}}</li>
        </ul>
    </div>
</template>
<script>
import {mapActions, mapGetters} from 'vuex';
export default {
    methods: {
        ...mapActions('group', {pageNumbers: 'pageNumbers'}),
		...mapActions('group', {setPages: 'setPages'}),
        ...mapActions('group', { newGlobalId: 'newGlobalId'}),
        pagesClick(event,val) {
            this.pageNumbers(val) 
            this.activePage(event);        
            this.newGlobalId(null)
        },
        activePage(event) {
			let arr = [...this.$refs.blockPage.children]
			arr.forEach((el) => {
				if(el.classList.contains('pg_items')) {
					el.classList.remove('active')
				}
			})
			arr[this.page - 1].classList.add('active')
		},
    },
    computed: {
        ...mapGetters('group', {itemsPerPage: 'itemsPerPage'}),
		...mapGetters('group', {pages: 'pages'}),
		...mapGetters('group', {page: 'page'})

    },
    watch: {
        page() {
            this.activePage()
        }
    },
    mounted() {
        this.activePage()
    }

}
</script>
<style scoped>
    .pg_items{
        display: inline-block;
        border: 1px solid #000;
        padding: 2px 5px;
        margin: 0px 1px;
        cursor: pointer;       
    }
    .pg_items.active {
        background: #000;
        color: #fff;    
    } 
</style>