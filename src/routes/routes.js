import VueRouter from 'vue-router'
import ShopInfoIndex from '../components/shop-info-componnet/ShopInfoIndex.vue'

const routes = [
  {
    path: '/',
    redirect: '/shop/index'
  },
  {
    path: '/shop/index',
    component: ShopInfoIndex
  },
  {
    path: '/product/manage',
    component: resolve => require(['../components/product-info-component/ProductInfoManage.vue'],resolve) 
  }
]

export const router = new VueRouter({
  mode: 'history',
  routes
})