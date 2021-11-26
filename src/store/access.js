
export default {
    namespaced: true,
    state: {
        items: fullAccess()
    },
    getters: {
        allAccess: state => state.items
    },
    mutations: {

    },
    actions: {

    }
}

function fullAccess() {
    return [
       'Billing', 'Admin', 'User', "Developer"
    ]
}