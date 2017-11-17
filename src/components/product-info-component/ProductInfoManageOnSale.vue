<template>
<div class="product-info-manage-onsale">
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
        <td><input type="checkbox"></td>
          <td><p class="parameter">卜珂松露形黑巧克力408克喜糖生日抹茶礼物礼盒装</p></td>
        <td>18.00</td>
        <td>无</td>
        <td>5</td>
        <td>6</td>
        <td>7</td>
        <td>8</td>
        <td>上架中</td>
        <td><a href="">编辑</a> - <a href="">下架</a></td>
      </tr>
      <tr>
        <td><input type="checkbox"></td>
        <td><p class="parameter">卜珂松露形黑巧克力408克喜糖生日抹茶礼物礼盒装</p></td>
        <td>18.00</td>
        <td>无</td>
        <td>5</td>
        <td>6</td>
        <td>7</td>
        <td>8</td>
        <td>上架中</td>
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
