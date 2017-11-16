import VueRouter from 'vue-router'
import ShopInfoIndex from '../components/shop-info-componnet/ShopInfoIndex.vue'

const routes = [
  {
    path: '/',
    redirect: '/shop/index'
  },
  {
    path: '/shop',
    component: ShopInfoIndex,
    children: [
      {
        path: 'index',
        component: ShopInfoIndex
      }
    ]
  },
  {
    path: '/product',
    component: resolve => require(['../components/product-info-component/ProductInfoManage.vue'],resolve),
    children: [
      {
        path: 'manage',
        component: resolve => require(['../components/product-info-component/ProductInfoManage.vue'],resolve),
      }
    ]
  }
]

export const router = new VueRouter({
  base: __dirname,
  routes
})