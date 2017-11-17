<template>
<div class="product-info-issue">
  <div class="info-header">
    <div class="info-name">
      商品发布
    </div>
  </div>
  <div class="info-content">
    <ul class="product-issue-header">
      <li class="active"><a href="javascript:;">1、选择商品品类</a></li>
      <li><a href="javascript:;">2、编辑商品信息</a></li>
    </ul>

    <div class="product-issue-content">
      <div class="product-type">
        <div class="type-list">
          <h4>一级分类：</h4>
          <ul>
            <li :class="{active: type.name == curFirstType.name}" 
                v-for="(type, index) in firstType" 
                :key="index"
                @click="curFirstType = type">
                {{type.value}}</li>
          </ul>
        </div>    
        <div class="type-list" v-for="(type, index) in secondType" :key="index" v-show="type.firstType == curFirstType.name">
          <h4>二级分类：</h4>
          <ul>
            <li :class="{active: subType.name == curFirstType.name}" 
                v-for="(subType, index) in type.subMenu" 
                :key="index"
                @click="curSecondType = subType">
                {{subType.value}}</li>
          </ul>
        </div>    
        <div class="type-list">
          <h4>三级分类：</h4>
          <ul>
            <li class="active">零食</li>
            <li>图书</li>
            <li>文具</li>
            <li>衣物</li>
            <li>女装</li>
            <li>男装</li>
          </ul>
        </div> 
        <div class="next">
          <button class="sp-btn sp-btn-primary">下一步</button>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>

var firstType = [{name: 'women', value: '女装'}, {name: 'food', value: '食品'}, {name: 'book', value: '图书'}, {name: 'man', value: '男装'}, {name: 'writing', value: '文具'}]
var secondType = [{firstType: 'woman', subMenu: [{name: 'womon1', value: '女装1'}]},
                  {firstType: 'food', subMenu: [{name: 'food1', value: '食品1'}]},
                  {firstType: 'book', subMenu: [{name: 'book1', value: '图书1'}]},
                  {firstType: 'man', subMenu: [{name: 'man1', value: '男装1'}]},
                  {firstType: 'writing', subMenu: [{name: 'writing1', value: '文具1'}]}]
export default {
  data () {
    return {
      curFirstType: firstType[0],
      curSecondType: secondType[0].subMenu[0],
      firstType,
      secondType
    }
  }
}
</script>

<style lang="scss" scoped>
.product-info-issue {

  .product-issue-header {
    width: 100%;
    font-size: 0;
    margin-bottom: 15px;
    border-right: 1px solid #ddd;
    li {
      display: inline-block;
      width: 50%;
      font-size: 14px;
      font-weight: bold;
      text-align: center;
      border: 1px solid #ddd;
      border-right: none;

      &.active {
        border-bottom: none;
        a {
          background: #fff;
          cursor: default;        
        }       
      }

      a {
        display: inline-block;
        width: 100%;
        padding: 9px 15px;
        background: #F8F8F8;
        color: #333;
      }
      
    }
  }

  .product-issue-content {
    .product-type {
      margin-top: 20px;   
           
      .type-list {
        margin-bottom: 10px;
        padding: 20px;
        background: #F8F8F8;
      }

      ul {
        width: 700px;
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
        align-content: flex-start;
        @media screen and (max-width: 1250px) {
          width: 600px;
        }

        li {     
          text-align: center;
          width: 160px;
          line-height: 50px;
          height: 50px;
          margin-right: 15px;
          margin-bottom: 15px;
          border: 1px solid #e5e5e5;
          color: #333;
          background: #F2F2F2;
          font-size: 14px;
          text-align: center;
          cursor: pointer;
          transition: all .3s;

          @media screen and (max-width: 1250px){
            width: 135px;
          }

          &:hover {
            background: #fff;
          }

          &.active {
            border: 2px solid #f63;
            color: #f63;
            background: #fff;
          }
        }
      }
      
      .next {
        padding: 10px;
        background: #ffc;
        text-align: center;
      }

    }
  }
}
</style>
