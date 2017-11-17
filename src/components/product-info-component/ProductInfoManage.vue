<template>
<div class="product-info-manage">
  <div class="info-header">
    <ul>
      <li :class="{active: menuOnShowIndex == 0}" @click="menuOnShowIndex = 0">
        <router-link to="/product/manage/onsale"><span>出售中</span></router-link>
      </li>
      <li :class="{active: menuOnShowIndex == 1}" @click="menuOnShowIndex = 1">
        <router-link to="/product/manage/saleout"><span>已售罄</span></router-link>
      </li>
      <li :class="{active: menuOnShowIndex == 2}" @click="menuOnShowIndex = 2">
        <a href=""><span>仓库中</span></a>
      </li>
    </ul>
  </div>
  <div class="info-content">
    <div class="info-toolbar">
      <router-link to="/product/issue" class="sp-btn sp-btn-success">发布商品</router-link>
      <div class="search-tool">
        <select class="chosen-container">
          <option value="">全部商品</option>
          <option value="">一般商品</option>
          <option value="">电子卡券</option>
          <option value="">会员卡</option>
        </select>
        <div class="search-input-container">
          <select class="chosen-container">
            <option value="">所有分组</option>
            <option value="">其他</option>
          </select>
          <input type="text" class="search-input" placeholder="搜索" @keyup.enter="search()">      
        </div>       
      </div>
    </div>
    <div class="info-box">
      <router-view></router-view>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      menuOnShowIndex: 0
    }
  },
  mounted () {
    this.$router.push({path: '/product/manage/onsale'})
  },
  methods: {
    search () {
      console.log('ss')
    }
  }
}
</script>

<style lang="scss" scoped>
.product-info-manage {
  
  .info-header {

    li {
      float: left;

      &:not(.active):hover {
        a {
          color: #59f;
        }       
      }

      &.active {
        span {
          border-bottom: 2px solid #59f;
        }
      }

      a {
        display: inline-block;
        height: 50px;
        padding: 0 20px;
        min-width: 0;
        border: none;
        font-size: 14px;
        color: #666666;

        span {
          display: inline-block;
          line-height: 48px;
        }
      }
    }
  }  

  .info-toolbar {
    margin-bottom: 15px;
  }

  .search-tool {
    float: right;

    .search-input-container {
      margin-left: 6px;
      float: right;
      position: relative;
      width: 200px;

      .search-input {
        position: absolute;
        right: 0;
        top: 0;
        width: 94px;
        padding: 5px;
        font-size: 12px;
        line-height: 16px;
        border: 1px solid #ddd;
        margin: 0;
        padding-left: 20px;
        border-radius: 2px;
        transition: width linear 0.25s;
        outline: none;
      
        &:focus {
          border-color: #aaa;
          box-shadow: 0 0 3px #59f;
          width: 100%;
        }
      }
    }   
  } 
}

</style>
