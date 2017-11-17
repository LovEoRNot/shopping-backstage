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
            <li :class="{active: type.name == curFirstType}" 
                v-for="(type, index) in firstType" 
                :key="index"
                @click="changeFirstType(type)"
                v-show="index < 7">
                {{type.value}}</li>
            <li class="other-type">其他分类</li>
          </ul>
        </div>    
        <div class="type-list" 
             v-for="(type, index) in secondType" 
             :key="index" 
             v-show="type.fType == curFirstType">
          <h4>二级分类：</h4>
          <ul>
            <li :class="{active: subType.name == curSecondType}" 
                v-for="(subType, index) in type.subMenu" 
                :key="index"
                @click="curSecondType = subType.name">
                {{subType.value}}</li>
          </ul>
        </div>    
        <div class="type-list"
             v-for="(type, index) in thirdType" 
             :key="index" 
             v-show="type.sType == curSecondType">
          <h4>三级分类：</h4>
          <ul>
            <li :class="{active: tType.name == curThirdType}" 
                v-for="(tType, index) in type.subMenu" 
                :key="index"
                @click="curThirdType = tType.name">
                {{tType.value}}</li>
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

var firstType = [{name: 'women', value: '女装'}, {name: 'food', value: '食品'}, {name: 'book', value: '图书'}, {name: 'man', value: '男装'}, {name: 'writing', value: '文具'},{name: 'writing', value: '文具'},{name: 'writ5ing', value: '文具'},{name: 'writin3g', value: '文具'},{name: 'writi4ng', value: '文具'},{name: 'writing', value: '文具'}]
var secondType = [{fType: 'women', subMenu: [{name: 'women1', value: '女装1'}]},
                  {fType: 'food', subMenu: [{name: 'food1', value: '食品1'}]},
                  {fType: 'book', subMenu: [{name: 'book1', value: '图书1'}]},
                  {fType: 'man', subMenu: [{name: 'man1', value: '男装1'}]},
                  {fType: 'writing', subMenu: [{name: 'writing1', value: '文具1'}]}]
                  
var thirdType = [{sType: 'women1', subMenu: [{name: 'women2', value: '女装2'}]},
                  {sType: 'food1', subMenu: [{name: 'food2', value: '食品2'}]},
                  {sType: 'book1', subMenu: [{name: 'book2', value: '图书2'}]},
                  {sType: 'man1', subMenu: [{name: 'man2', value: '男装2'}]},
                  {sType: 'writing1', subMenu: [{name: 'writing2', value: '文具2'}]}]
export default {
  data () {
    return {
      curFirstType: '',//firstType[0].name,
      curSecondType: '',//secondType[0].subMenu[0].name,
      curThirdType: '',//thirdType[0].subMenu[0].name,
      firstType,
      secondType,
      thirdType
    }
  },
  methods: {
    changeFirstType (type) {
      this.curFirstType = type.name
      this.curSecondType = '';
      this.curThirdType = '';
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
        animation: fadeIn .4s;

        @keyframes fadeIn {
          from {opacity: 0}
          to {opacity: 1}
        }
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
        .other-type {
          position: relative;
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
