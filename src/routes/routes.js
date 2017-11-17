import VueRouter from 'vue-router'
import { shop } from './shop-route/shopRoute'
import { product } from './product-route/productRoute'

let routes = [
  {
    path: '/',
    redirect: '/shop/index'
  },  
]

routes = routes.concat(shop, product)

export const router = new VueRouter({
  base: __dirname,
  routes
})