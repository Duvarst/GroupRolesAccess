<template>
    <div>Warriors !!!!!</div>
    <ul>
        <li v-for='it in items'
            :key='it.id'
        >
        {{ it.title }}
        {{ it.price}}
        <router-link :to='{ name: "product", params: {id: it.id} }'>Read more</router-link>
        </li>
    </ul>
</template>
<script>
    import { mapGetters} from 'vuex'
export default {
    computed: {
        ...mapGetters("products", { items: 'itemsAll'})
    }
}
</script>