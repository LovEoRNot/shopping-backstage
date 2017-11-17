  // 商品信息页
export const product = [
  {
    path: '/product',
    redirect: '/product/manage/onsale',
  },
  {
    path: '/product/manage',
    component: resolve => require(['@/components/product-info-component/ProductInfoManage.vue'],resolve),
    children: [
      {
        path: '',
        component: resolve => require(['@/components/product-info-component/ProductInfoManageOnSale.vue'],resolve),
      },
      {
        path: 'onsale',
        component: resolve => require(['@/components/product-info-component/ProductInfoManageOnSale.vue'],resolve),
      },
      {
        path: 'saleout',
        component: resolve => require(['@/components/product-info-component/ProductInfoManageSaleOut.vue'],resolve),
      }
    ]
  },
  {
    path: '/product/issue',
    component: resolve => require(['@/components/product-info-component/ProductInfoIssue.vue'],resolve)
  }
]