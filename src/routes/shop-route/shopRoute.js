import ShopInfoIndex from '@/components/shop-info-componnet/ShopInfoIndex.vue'

// 店铺信息页
export const shop = [
  {                          
    path: '/shop',
    redirect: '/shop/index',
  },
  {
    path: '/shop/index',
    component: ShopInfoIndex
  },
  {
    path: '/shop/service',
    component: resolve => require(['@/components/shop-info-componnet/ShopInfoService.vue'],resolve)
  }  
]