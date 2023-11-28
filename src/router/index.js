import {createRouter, createWebHistory} from 'vue-router';
import HomePage from '@/components/HomePage';
import ProductDetail from '@/components/ProductDetail';
import ShoppingCart from '@/components/ShoppingCart';
import CheckoutPage from '@/components/CheckoutPage';
const routes = [
    {
        path: '/',
        name: 'HomePage',
        component: HomePage
    },
    {
        path: '/product-detail/:id',
        name:   'ProductDetail',
        component: ProductDetail,
        props: true
    },
    {
        path: '/cart',
        name: 'ShoppingCart',
        component: ShoppingCart
    },
    {
        path: '/checkout',
        name: 'CheckoutPage',
        component: CheckoutPage
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior() {
        return { top: 0 }
    }
})
export default router;
