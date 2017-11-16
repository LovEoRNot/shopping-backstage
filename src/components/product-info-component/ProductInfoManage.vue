<template>
<div class="product-info-manage">
  <div class="info-header">
    <ul>
      <li class="active"><a href=""><span>出售中</span></a></li>
      <li><a href=""><span>已售罄</span></a></li>
      <li><a href=""><span>仓库中</span></a></li>
    </ul>
  </div>
  <div class="info-content">
    <div class="info-toolbar">
      <a href="" class="sp-btn sp-btn-success">发布商品</a>
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
          <input type="text" class="search-input" placeholder="搜索">
        </div>       
      </div>
    </div>
    <div class="info-box">
      <table class="table table-hover">
        <thead>
          <tr>
            <th><input type="checkbox" @click="checkAll()"></th>
            <th class="goods">商品名称</th>
            <th>价格</th>
            <th>品牌</th>
            <th class="desc">描述</th>
            <th>一级分类</th>
            <th>二级分类</th>
            <th>三级分类</th>
            <th>状态</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><input type="checkbox" :checked="checked == true"></td>
             <td><p class="parameter">卜珂松露形黑巧克力408克喜糖生日抹茶礼物礼盒装</p></td>
            <td>18.00</td>
            <td>无</td>
            <td>5</td>
            <td>6</td>
            <td>7</td>
            <td>8</td>
            <td>9</td>
            <td><a href="">编辑</a> - <a href="">下架</a></td>
          </tr>
          <tr>
            <td><input type="checkbox" :checked="checked == true"></td>
            <td><p class="parameter">卜珂松露形黑巧克力408克喜糖生日抹茶礼物礼盒装</p></td>
            <td>18.00</td>
            <td>无</td>
            <td>5</td>
            <td>6</td>
            <td>7</td>
            <td>8</td>
            <td>9</td>
            <td><a href="">编辑</a> - <a href="">下架</a></td>
          </tr>
        </tbody>
      </table>

      <div class="info-footer">
        <a href="" class="sp-btn">删除</a>
        <Pagination :total="228" :current-page="1" @pageChange="pageChange"></Pagination>
        <div class="pagination-info">
          共228条，每页20条
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Pagination from '../Pagination.vue'

export default {
  components: {
    Pagination
  },
  data () {
    return {
      checked: true
    }
  },

  methods: {
    checkAll () {
      console.log('a;;')
    },
    //页面跳转事件
    pageChange (page) {
      
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

  .info-box {
    
    .table { 
      min-width: 750px;

      font-size: 12px;
      border-bottom: 2px solid #F2F2F2; 
      
      thead {
        background: #F8F8F8;
      }

      th, td {
        text-align: center;
        transition: all .3s;
        vertical-align: middle;
        white-space: nowrap;
      }

      .parameter {
        width: 350px;
        overflow: hidden; 
        white-space: nowrap;
        text-overflow: ellipsis;
        @media screen and (max-width: 1280px) {
          width: 200px;
        }
      }
      .goods {
        width: 20%;        
      }
      
      .desc {
        width: 15%;        
      }
    }

    .info-footer {
      position: relative;

      .pagination {
        position: absolute;
        left: 50%;
        top: 5px;
        transform: translateX(-50%);
      }

      .pagination-info {
        position: absolute;
        right: 0;
        top: 8px;
        font-size: 12px;
      }
    }
  }
  
}

</style>
