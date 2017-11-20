<template>
<!-- 分页系统 -->
<div class="pagination">
  <ul>
    <li @click="setCurrent(1)" v-show="current > 3">首页</li>
    <li @click="setCurrent(current-1)" v-show="current > 3">&lt;</li>
    <li 
      :class="{active: page.text == current}" 
      v-for="(page, key) in getPageList" 
      :key="key" 
      v-text="page.text"
      @click="setCurrent(page.text)">
    </li>
    <li @click="setCurrent(current+1)" v-show="current < getTotalPage - 2">&gt;</li>
    <li @click="setCurrent(getTotalPage)" v-show="current < getTotalPage - 2">尾页</li>
  </ul>
</div>
</template>

<script>
// 组件参数：{ total }: 总页数; 
//          { display }：每页显示数量; 
//          { currentPage }：当前页码
// 组件事件：pageChange：页码变化事件，输出当前显示的页码(page)

export default {
  data () {
    return {
      current: this.currentPage
    }
  },
  props: {
    total: {    
      type: Number,
      default: 0
    },
    display: {  
      type: Number,
      default: 20
    },
    currentPage: { 
      type: Number,
      default: 0
    }
  },
  computed: {
    getTotalPage () { 
      return Math.ceil(this.total / this.display)
    },
    getPageList () {
      var pageList = [], center = this.current, totalPage = this.getTotalPage

      if(totalPage < 5) {
        for(var i = 0; i < totalPage; i++) {
          pageList.push({text: +i + 1})
        }       
        return pageList
      }
      if(center < 4) {
        for(var i = 0; i < 4; i++) {
          pageList.push({text: +i + 1})
        }       
        pageList.push({text: '...'})
      } else if (center > totalPage - 3) {
        pageList.push({text: '...'})
        for(var i = totalPage - 4; i < totalPage; i++) {
          pageList.push({text: +i + 1})
        }       
      } else {
        pageList.push({text: '...'})
        for(var i = center - 2; i < center + 1; i++) {
          pageList.push({text: +i + 1})
        } 
        pageList.push({text: '...'})
      }
      return pageList
    }
  },

  methods: {
    setCurrent (page) {     
      if(page > 0 && page < this.getTotalPage + 1) {
        this.current = page;
        this.$emit('pageChange', this.current)
      } 
    }
  }
}
</script>

<style lang="scss" scoped>
.pagination {
  ul {
    font-size: 0;
  }
  li {
    display: inline-block;
    padding: 2px;
    min-width: 25px;
    min-height: 26px;
    line-height: 20px;
    font-size: 12px;
    margin: 0 2px;
    border: 1px solid #aaa;
    border-radius: 2px;
    text-align: center;
    cursor: pointer;
    user-select: none;
    transition: all .3s;

    &.active {
      background: #59f;
      color: #fff;
      border-color: #59f;
    }
  }
}
</style>
