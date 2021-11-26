
export default {
    namespaced: true,
    state: {
        items: fullRoles()
    },
    getters: {
        allRoles: state => state.items
    },
    mutations: {

    },
    actions: {

    }
}

function fullRoles() {
    return [
       'Goods delivery', 'Billing', 'Calls to clients', 'Application processing', 'Working with documentaries', 'Administration', 'User'
    ]
}