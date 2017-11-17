<template>
<div class="aside">
  <div class="shop-icon">
    <a href="">
      <div class="icon">
        <img src="https://img.yzcdn.cn/public_files/2016/05/13/8f9c442de8666f82abaf7dd71574e997.png?imageView2/2/w/145/h/145/q/75/format/webp" alt="">
      </div>
    </a>
  </div>
  <ul>
    <li :class="{active: item.isShow }" v-for="(item, index) in itemList" :key="index"  @click="showSubmenu(index)">
      <router-link :to="item.link">{{item.name}}</router-link>
      <div class="second-menu" v-show="item.isShow">
        <div class="second-menu-title">
          {{item.subMenu.title}}
        </div>
        <ul>
          <li :class="{active: subItem.isShow}" v-for="(subItem, key) in item.subMenu.menuList" :key="key" @click="showSubList(key, index)">
            <router-link :to="subItem.href">{{subItem.name}}</router-link>
          </li>
        </ul>
      </div>
    </li>
  </ul>
</div>
</template>

<script>
  import { store } from '../store/index'

  export default {
    name: 'aside',
    store,
    data () {
      return {
      }
    },
    mounted () {
     this.watchRouteChange()
    },
    computed: {
      itemList () {
        return this.$store.state.itemList
      } 
    },
    methods: {
      watchRouteChange () {
        var url = /#(\/.*)/gm.exec(location.href)
        var path = url[1].slice(1).split('/')

        var nowPath = '/' + path[0]
        var nowList = path.length > 1 ? `${nowPath}/${path[1]}` : ''

        this.$store.commit('changeShowMenu', {nowPath, nowList})
      },
      showSubmenu (index) {
        this.nowPath = '';
        this.nowList = '';
        this.$store.commit('showSubmenu', {index})
      },
      showSubList (key, index) {
        this.nowPath = '';
        this.nowList = '';
        this.$store.commit('showSubList', {key, index})
      }
    },
    watch: {
      //监听路由变化事件，对侧边栏做出及时反馈
      '$route' (to, from) {
        this.watchRouteChange()
      }
    }
  }
</script>

<style lang="scss" scoped>
$border: 1px solid #f2f2f2;
$totalBgColor: #F8F8F8;

.aside {
  .shop-icon {
    a {
      display: block;
      width: 90px;
      height: 63px;
      overflow: hidden;
    }

    .icon {
      margin: 14px auto 0;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      border: 1px solid #fff;
      background-size: cover;
      background-position: 50% 50%;
      background-color: #fff;
      overflow: hidden;
      
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  li {
    font-size: 14px;
    height: 36px;
    line-height: 36px;
    margin-bottom: 14px;

    &.active {
      background: $totalBgColor;
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
    border-right: $border;

    .second-menu-title {
      padding-left: 20px;
      height: 50px;
      line-height: 50px;
      border-bottom: $border;
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
        background: $totalBgColor;
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

