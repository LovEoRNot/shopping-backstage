<template>
<!-- 横向菜单 -->
<div class="type-menu">
  <h2>{{title}}</h2>
  <ul>
    <li :class="{active: type.name == curType.name}" 
      v-for="(type, index) in typeList" 
      :key="index"
      @click="changeType(type)"
      v-show="index < 7">
      {{type.value}}
    </li>
    <li class="other-type" :class="{active: otherShow}" v-show="typeList.length > 7">
      {{ otherShow ? curType.value : '其他分类'}}
      <div class="other-type-list" style="line-hight: 1;">
        <label v-for="(type, index) in typeList" :key="index" 
          v-show="index > 6"
          @click="changeType(type, true)">
          <input type="radio" name="other" :checked="type.name == curType.name"> {{type.value}}
        </label>
      </div>
    </li>
  </ul>
</div>
</template>

<script>
// 组件参数：{ typelist }: 需要列举的菜单选项列表，格式中需要有name,和value两个值；
//          { title }：菜单的标题
// 组件事件：changeType: 类型变化事件，输出当前选中的类型(type)
export default {
  data () {
    return {
      curType: '',
      otherShow: false
    } 
  },
  props: ['typeList', 'title'],
  methods: {
    changeType (type, otherShow) {
      this.curType = type
      this.otherShow = false
      this.$emit('changeType', type)

      if(otherShow) {
        this.otherShow = true;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.type-menu {
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
    padding: 15px 0;
    height: 50px;
    margin-right: 15px;
    margin-bottom: 15px;
    border: 1px solid #e5e5e5;
    color: #333;
    background: #F2F2F2;
    font-size: 14px;
    text-align: center;
    cursor: pointer;
    transition: all .2s;

    @media screen and (max-width: 1450px){
      width: 135px;
    }

    &:hover {
      background: #fff;
    }

    &.active {
      border: 2px solid #f63;
      color: #f63;
      background: #fff;
      .other-type-list {
        color: #333;
      }
    }
  }
  .other-type {
    position: relative;
    cursor: default;
    
    &:hover {
      .other-type-list {
        display: block;
      }
    }
    label {
      width: 60px;
      margin: 2px 5px;
      cursor: pointer;
    }
    .other-type-list {
      display: none;
      text-align: left;
      position: absolute;
      top: 50px;
      right: 0;
      width: 240px;
      background: #fff;
      padding: 10px 15px;
      box-shadow: 0 3px 5px #E1E1E1;
      font-size: 12px;
    }
  }
}
</style>
