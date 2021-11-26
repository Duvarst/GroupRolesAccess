import {createRouter, createWebHistory } from 'vue-router'


import Product from '@/views/Product';
import ProductList from '@/views/ProductList';
import Cart from '@/views/Cart';
import Checkout from '@/views/Checkout';
import E404 from '@/views/E404';

const routes = [
    {
        name: 'prodlist',
        path: '/',
        component: ProductList
    },
    {
        name: 'cart',
        path: '/cart',
        component: Cart
    },
    {
        name: 'checkout',
        path: '/checkout',
        component: Checkout
    },
    {
        name: 'product',
        path: '/product/:id',
        component: Product
    },
    {
        path: '/:any(.*)',
        component: E404
    }
];

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router;