<template>
<div class="aside">
  <div class="shop-icon">
    <a href=""></a>
  </div>
  <ul>
    <li :class="{active: item.isShow}" v-for="(item, index) in itemList" :key="index">
      <a :href="item.link" @click="showSubmenu(index)">{{item.name}}</a>
      <div class="second-menu" v-show="item.isShow">
        <div class="second-menu-title">
          {{item.subMenu.title}}
        </div>
        <ul>
          <li :class="{active: key == 0}" v-for="(subItem, key) in item.subMenu.menuList" :key="key">
            <a :href="subItem.href">{{subItem.name}}</a>
          </li>
        </ul>
      </div>
    </li>

  </ul>
</div>
</template>

<script>
  //侧边栏显示列表
  var itemList = [
    {
      link: '###',
      name: '店铺',
      subMenu: {
        title: '店铺信息',
        menuList: [{href: '', name: '店铺概况'}, {href: '', name: '客服管理'}]
      },
      isShow: true   //首项默认显示
    },
    {
      link: '###',
      name: '商家',
      subMenu: {
        title: '商家信息',
        menuList: [{href: '', name: '商家管理'}]
      },
      isShow: false
    },
    {
      link: '###',
      name: '商品',
      subMenu: {
        title: '商品信息',
        menuList: [{href: '', name: '商品管理'},{href: '', name: '商品发布'},{href: '', name: '分类管理'},{href: '', name: '品牌管理'}]
      },
      isShow: false
    },
    {
      link: '###',
      name: '订单',
      subMenu: {
        title: '订单信息',
        menuList: [{href: '', name: '订单概况'},{href: '', name: '所有订单'},{href: '', name: '评价管理'}]
      },
      isShow: false
    },
    {
      link: '###',
      name: '优惠',
      subMenu: {
        title: '优惠信息',
        menuList: [{href: '', name: '优惠券管理'},{href: '', name: 'VIP卡管理'}]
      },
      isShow: false
    }
  ]
  export default {
    name: 'aside',
    data () {
      return {
        itemList
      }
    },
    methods: {
      showSubmenu (index) {
        for(var i = 0; i < itemList.length; i++) {
          itemList[i].isShow = false;
        }
        itemList[index].isShow = true;
      }
    }
  }
</script>

<style lang="scss" scoped>
.aside {
  .shop-icon {
    a {
      display: block;
      width: 90px;
      height: 63px;
      overflow: hidden;
    }
  }
  li {
    font-size: 14px;
    height: 36px;
    line-height: 36px;
    margin-bottom: 14px;
    cursor: pointer;

    &.active {
      background: #F8F8F8;
      a {
        color: #333;
      }
    }

    &:not(.active):hover {
      background: #666;
    }

    a {
      color: #CACACA;
      display: block;
      padding-left: 18px;
      &:hover {
        text-decoration: none;
      }
    }
  }
  .second-menu {
    position: fixed;
    left: 90px;
    top: 0;
    height: 100%;
    width: 115px;
    background: #fff;
    border-right: 1px solid #f2f2f2;

    .second-menu-title {
      padding-left: 20px;
      height: 50px;
      line-height: 50px;
      border-bottom: 1px solid #f2f2f2;
      cursor: default;
    }
    ul {
      padding: 13px 10px;
    }
    li {
      height: 36px;
      line-height: 36px;
      margin-bottom: 14px;
      overflow: hidden;
      cursor: pointer;
      border-radius: 2px;

      a {
        color: #666;
        display: block;
        padding: 0 10px;
      }

      &.active {
        background: #f8f8f8;
      }
      
      &:not(.active):hover {
        background: #fff;
        a {
          color: #38f;
          text-decoration: none;
        }
      }
    }
  }  
}
</style>

