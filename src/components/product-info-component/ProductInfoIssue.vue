<template>
<div class="product-info-issue">
  <div class="info-header">
    <div class="info-name">
      商品发布
    </div>
  </div>
  <div class="info-content">
    <ul class="product-issue-header">
      <li :class="{active: isFirstStep}" 
        @click="goToAnyStep(true, false)">
        <a href="javascript:;">1、选择商品品类</a>
      </li>
      <li :class="{active: isSecondStep}"
        @click="goToAnyStep(false, true)">
        <a href="javascript:;">2、编辑商品信息</a>
      </li>
    </ul>

    <div class="product-issue-content">
      <!-- 选择商品品类 -->
      <div class="product-type" v-show="isFirstStep">
        <!-- 一级分类 -->
        <Typemenu :type-list="firstType" :title="'一级分类'" @changeType="changeFirstType"></Typemenu>
        <!-- 二级分类 -->
        <Typemenu :type-list="secondType" :title="'二级分类'" @changeType="changeSecondType" v-show="secondType.length > 0"></Typemenu>
        <!-- 三级分类 -->
        <Typemenu :type-list="thirdType" :title="'三级分类'" @changeType="changeThirdType" v-show="thirdType.length > 0"></Typemenu>

        <div class="next">
          <button class="sp-btn sp-btn-primary" 
            @click="next()" 
            :disabled="curFirstType == null || curSecondType == null || curThirdType == null">
            下一步
          </button>
        </div>
      </div>
      <!-- 编辑商品信息 -->
      <div class="product-info" v-show="isSecondStep">
        <div class="product-info-box">
          <div class="product-info-title">
            <h3 class="inner-title">基本信息</h3>
          </div>
          <div class="product-info-content">
            <div class="product-info-content-bar">
              <label class="content-label">商品品类：</label>
              <div class="content-content">
                <div class="static-value">其他-其他</div>
              </div>
            </div>
            <div class="product-info-content-bar">
              <label class="content-label">商品名：</label>
              <div class="content-content">
                <input type="text" class="sp-input">
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  </div>
</div>
</template>

<script>

var firstType = [{name: 'women', value: '女装'}, 
                 {name: 'food', value: '食品'}, 
                 {name: 'book', value: '图书'}, 
                 {name: 'man', value: '男装'}, 
                 {name: 'writing', value: '文具'},
                 {name: 'sad', value: '阿萨德'},
                 {name: 'sad1', value: '阿斯顿'},
                 {name: 'sad2', value: '苟富贵'},
                 {name: 'sad3', value: '小县城'},
                 {name: 'sad4', value: '张信哲'},
                 {name: 'sad5', value: '这些'},
                 {name: 'sad6', value: '家伙'},
                 {name: 'sad7', value: '一句话'}]
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

import Typemenu from '../common-componnet/Typemenu.vue'

export default {
  components: {
    Typemenu
  },
  data () {
    return {
      curFirstType: null,
      curSecondType: null,
      curThirdType: null,
      firstType: firstType,
      secondType: [],
      thirdType: [],
      
      isFirstStep: true,
      isSecondStep: false
    }
  },
  methods: {
    changeFirstType (type) {
      this.reset()
      this.curFirstType = type
      this.thirdType = []
      for(var i = 0; i < secondType.length; i++) {
        if(secondType[i].fType == type.name) {
          this.secondType = secondType[i].subMenu
        }
      }
    },
    changeSecondType (type) {
      this.curSecondType = type
      for(var i = 0; i < thirdType.length; i++) {
        if(thirdType[i].sType == type.name) {
          this.thirdType = thirdType[i].subMenu
        }
      }
    },
    changeThirdType (type) {
      this.curThirdType = type
    },
    // 重置所有内容
    reset () {
      this.curFirstType = null
      this.curSecondType = null
      this.curThirdType = null
      this.firstType = firstType
      this.secondType = []
      this.thirdType = []
    },

    goToAnyStep (isFirstStep, isSecondStep) {
      this.isFirstStep = isFirstStep
      this.isSecondStep= isSecondStep
    },

    next() {
      this.isFirstStep = false
      this.isSecondStep= true
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

      .next {
        padding: 10px;
        background: #ffc;
        text-align: center;
      }     
    }

    .product-info {
      .product-info-box {
        margin-bottom: 5px;
        background-color: #F8F8F8; 
        display: flex;

        .product-info-title {
          border-right: 2px solid #fff;
          flex: 1;

          .inner-title {
            text-align: center;
            padding: 24px 10px 23px;
            font-weight: bold;
          }
        }

        .product-info-content {
          flex: 7;
          padding: 23px 20px 10px;

          .product-info-content-bar {
            margin-bottom: 20px;

            .content-label {
              float: left;
              width: 100px;
              text-align: right;
              font-size: 12px;
              padding-top: 5px;
            }

            .content-content {
              margin-left: 116px;
              font-size: 12px;
              .static-value {
                padding-top: 5px;                
                line-height: 18px;                
                padding-bottom: 3px;
                word-break: break-all;
              }
            }
          }
        }
      }
    }
  }
}
</style>
