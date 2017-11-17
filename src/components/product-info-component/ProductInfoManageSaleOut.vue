<template>
<div class="product-info-manage-saleout">
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
        <td colspan="10" class="text-center">没有商品</td>
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
</template>

<script>
import Pagination from '../common-componnet/Pagination.vue'
export default {
  components: {
  Pagination
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

</style>
