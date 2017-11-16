import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)           //装载vuex模块

var itemList = [
  {
    link: '/shop',
    name: '店铺',
    subMenu: {
      title: '店铺信息',
      menuList: [{href: '/shop/index', name: '店铺概况', isShow: true}, {href: '', name: '客服管理', isShow: false}]
    },
    isShow: true   //首项默认显示
  },
  {
    link: '###',
    name: '商家',
    subMenu: {
      title: '商家信息',
      menuList: [{href: '', name: '商家管理', isShow: true},{href: '', name: '广告管理', isShow: false},{href: '', name: '商家注册', isShow: false}]
    },
    isShow: false
  },
  {
    link: '/product',
    name: '商品',
    subMenu: {
      title: '商品信息',
      menuList: [{href: '/product/manage', name: '商品管理', isShow: true},{href: '', name: '商品发布', isShow: false},{href: '', name: '分类管理', isShow: false},{href: '', name: '品牌管理', isShow: false}]
    },
    isShow: false
  },
  {
    link: '###',
    name: '订单',
    subMenu: {
      title: '订单信息',
      menuList: [{href: '', name: '订单概况', isShow: true},{href: '', name: '所有订单', isShow: false},{href: '', name: '评价管理', isShow: false}]
    },
    isShow: false
  },
  {
    link: '###',
    name: '优惠',
    subMenu: {
      title: '优惠信息',
      menuList: [{href: '', name: '优惠券管理', isShow: true},{href: '', name: 'VIP卡管理', isShow: false}]
    },
    isShow: false
  }
]

export const store = new Vuex.Store({
  state: {
    itemList
  },

  mutations: {
    showSubmenu (state, payload) {
      for(var i = 0; i < state.itemList.length; i++) {
        state.itemList[i].isShow = false
      }
      state.itemList[payload.index].isShow = true
    },

    showSubList (state, payload) {
      for(var i = 0; i < state.itemList[payload.index].subMenu.menuList.length; i++) {
        state.itemList[payload.index].subMenu.menuList[i].isShow = false
      }
      state.itemList[payload.index].subMenu.menuList[payload.key].isShow = true
    },

    //根据浏览器地址设置当前显示路由的isShow值为true
    changeShowMenu (state, payload) {
      if(payload.nowPath == '') return false;

      for(var i = 0; i < state.itemList.length; i++) {
        state.itemList[i].isShow = false

        if(state.itemList[i].link == payload.nowPath) {
          state.itemList[i].isShow = true;
          
          if(payload.nowList == '') {
            continue;
          }
          for(var j = 0; j < state.itemList[i].subMenu.menuList.length; j++) {
            state.itemList[i].subMenu.menuList[j].isShow = false

            if(state.itemList[i].subMenu.menuList[j].href == payload.nowList) {
              state.itemList[i].subMenu.menuList[j].isShow = true
            }
          }
        }
      }
    }
  }
})