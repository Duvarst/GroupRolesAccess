
export default {
    namespaced: true,
    state: {
        data: fullGroup(),
        id: null,
        groupGlobalArr: [],
        inputGlobalVal: "",
        searchTypeGlobal: '',
        pages: [],
        page: 1,
        itemsPerPage: 6,
        arrForDisplay: []

    },
    getters: {
        allGroup: state => state.data,
        globalId: state => state.id,
        groupGlobalArr: state => state.groupGlobalArr,
        inputGlobalVal: state => state.inputGlobalVal,
        searchTypeGlobal: state => state.searchTypeGlobal,
        pages: state => state.pages,
        page: state => state.page,
        itemsPerPage: state => state.itemsPerPage,
        arrForDisplay: state => state.arrForDisplay

    },
    mutations: {
        changingArrForDisplay(state,val) {
            state.arrForDisplay = val
        },
        pageNumbers(state, val) {
            state.page = val
        },
        setPages(state, val) {
            state.pages = val
        },
        newGlobalId(state, val) {
            state.id = val
        },
        newGlobalArr(state, val) {
            state.groupGlobalArr = val
        },
        newInputGlobalVal(state, val) {
            state.inputGlobalVal = val
        },
        newSearchTypeGlobal(state, val) {
            state.searchTypeGlobal = val
        },
        extractData(state) {
            if(localStorage.getItem('fulldata')){
                this.replaceState(
                    Object.assign(state, JSON.parse(localStorage.getItem('fulldata')))
                )
            }
            else{  
            }
        }
    },
    actions: {
        changingArrForDisplay({commit}, val) {
            commit('changingArrForDisplay', val)
        },
        pageNumbers({commit}, val) {
            commit('pageNumbers', val)
        },
        setPages({commit}, val) {
            commit('setPages', val)
        },
        newGroupForData({commit}, val){
            commit('newGroupForData', val)
        },
        newGlobalId({commit}, val){
            commit('newGlobalId', val)
        },
        newGlobalArr({commit}, val) {
            commit('newGlobalArr', val)
        },
        newInputGlobalVal({commit}, val) {
            commit('newInputGlobalVal', val)
           
        },
        newSearchTypeGlobal({commit}, val) {
            commit('newSearchTypeGlobal', val)
        },
        extractData({commit}) {
            commit('extractData')
        }
    }
}

function fullGroup() {
    return [
        {"id": 1, "title": "Admins", "roles": ['Goods delivery', 'Calls to clients'], "accessright": ['Billing', 'Admin', 'User'] }, 
        {"id": 2, "title": "General Manager", "roles": ['Billing', 'Application processing'], "accessright": ['Billing', 'Admin', 'User']},
        {"id": 3, "title": "Manager - Tech", "roles": ['Application processing', 'Working with documentaries'], "accessright": ['Billing', 'Admin', 'User']},
        {"id": 4, "title": "Manager - Billing", "roles": ['Administration', 'User'], "accessright": ['Billing', 'Admin', 'User']},
        {"id": 5, "title": "Admins", "roles": ['Goods delivery', 'Calls to clients'], "accessright": ['Billing', 'Admin', 'User'] }, 
        {"id": 6, "title": "General Manager", "roles": ['Billing', 'Application processing'], "accessright": ['Billing', 'Admin', 'User']},
        {"id": 7, "title": "Manager - Tech", "roles": ['Application processing', 'Working with documentaries'], "accessright": ['Billing', 'Admin', 'User']},
        {"id": 8, "title": "Manager - Billing", "roles": ['Administration', 'User'], "accessright": ['Billing', 'Admin', 'User']},
        {"id": 9, "title": "Admins", "roles": ['Goods delivery', 'Calls to clients'], "accessright": ['Billing', 'Admin', 'User'] }, 
        {"id": 10, "title": "General Manager", "roles": ['Billing', 'Application processing'], "accessright": ['Billing', 'Admin', 'User']},
        {"id": 11, "title": "Manager - Tech", "roles": ['Application processing', 'Working with documentaries'], "accessright": ['Billing', 'Admin', 'User']},
        {"id": 12, "title": "Manager - Billing", "roles": ['Administration', 'User'], "accessright": ['Billing', 'Admin', 'User']},
        {"id": 13, "title": "Admins", "roles": ['Goods delivery', 'Calls to clients'], "accessright": ['Billing', 'Admin', 'User'] }, 
        {"id": 14, "title": "General Manager", "roles": ['Billing', 'Application processing'], "accessright": ['Billing', 'Admin', 'User']},
        {"id": 15, "title": "Manager - Tech", "roles": ['Application processing', 'Working with documentaries'], "accessright": ['Billing', 'Admin', 'User']},
        {"id": 16, "title": "Manager - Billing", "roles": ['Administration', 'User'], "accessright": ['Billing', 'Admin', 'User']},
        {"id": 17, "title": "Admins", "roles": ['Goods delivery', 'Calls to clients'], "accessright": ['Billing', 'Admin', 'User'] }, 
        {"id": 18, "title": "General Manager", "roles": ['Billing', 'Application processing'], "accessright": ['Billing', 'Admin', 'User']},
        {"id": 19, "title": "Manager - Tech", "roles": ['Application processing', 'Working with documentaries'], "accessright": ['Billing', 'Admin', 'User']},
        {"id": 20, "title": "Manager - Billing", "roles": ['Administration', 'User'], "accessright": ['Billing', 'Admin', 'User']},
        {"id": 21, "title": "Admins", "roles": ['Goods delivery', 'Calls to clients'], "accessright": ['Billing', 'Admin', 'User'] }, 
        {"id": 22, "title": "General Manager", "roles": ['Billing', 'Application processing'], "accessright": ['Billing', 'Admin', 'User']},
        {"id": 23, "title": "Manager - Tech", "roles": ['Application processing', 'Working with documentaries'], "accessright": ['Billing', 'Admin', 'User']},
        {"id": 24, "title": "Manager - Billing", "roles": ['Administration', 'User'], "accessright": ['Billing', 'Admin', 'User']},
        {"id": 25, "title": "Manager - Tech", "roles": ['Administration', 'User'], "accessright": ['Billing', 'Admin', 'User']}
        
        
   ]
}

