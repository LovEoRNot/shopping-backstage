<template>
  <div class="shop-info-index">
    <div class="info-header">
      <div class="info-name">
        店铺概况
      </div>
    </div>
    <div class="info-content">
      <div class="shop-info-header">
        <div class="shop-logo">
          <a href=""><img src="https://img.yzcdn.cn/public_files/2016/05/13/8f9c442de8666f82abaf7dd71574e997.png?imageView2/2/w/145/h/145/q/75/format/webp" alt=""></a>
        </div>
        <div class="shop-name">
          <h2>所以我是什么店</h2>
        </div>
        <div class="shop-btn-group">
          <router-link to="/product/issue" class="sp-btn sp-btn-success">发布商品</router-link>
          <a href="" class="sp-btn">访问店铺</a>
        </div>
      </div>
      <div class="shop-info-overview">
        <ul>
          <li>
            <h5>0</h5>
            <h6>昨日浏览量</h6>
          </li>
          <li>
            <h5>0</h5>
            <h6>昨日访客数</h6>
          </li>
          <li>
            <h5>0</h5>
            <h6>昨日订单量</h6>
          </li>
          <li>
            <h5>0</h5>
            <h6>昨日交易额</h6>
          </li>
          <li>
            <h5><a href="">0</a></h5>
            <h6>商品数量</h6>
          </li>
        </ul>
      </div>
      <!-- echarts 图表相关 -->
      <div class="shop-info-flow">
        <div class="shop-info-block-header">
          <h3 class="block-title">流量趋势</h3>
        </div>
        <div ref="echart" class="echarts"></div>
      </div>     
    </div>
  </div>
</template>

<script>

var option = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'line',
      crossStyle: {
        color: '#999'
      }
    }
  },
  legend: {
    data: ['销售额'],
    x: 'center'
  },
  xAxis: {
    data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
  },
  yAxis: [{
    type: 'value',
    name: '销量'
  }],
  yAxis: {},
  series: [{
    name: '销售额',
    type: 'line',
    data: [5, 20, 36, 10, 10, 20, 38, 45, 90, 13, 11, 23],
    itemStyle: {
      normal: {color: '#38f'}
    }
  }], 
}

export default {
  mounted () {
    var myChart = echarts.init(this.$refs['echart']);
    myChart.setOption(option);
  },
  data () {
    return {
      loading: false
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
$border: 1px solid #e5e5e5;
$fontSize: 14px;

.shop-info-index {
  .shop-info-header {
    position: relative;
    margin-bottom: 15px;
    overflow: hidden;

    .shop-logo {
      width: 70px;
      height: 70px;;
      float: left;
      line-height: 70px;
      text-align: center;

      img {
        height: 100%;
        width: 100%;
        vertical-align: middle;
      }
    }
    .shop-name {
      float: left;
      margin-left: 20px;

      h2 {
        font-size: $fontSize*1.15;
        font-weight: bold;
        line-height: 70px;
      }
    }

    .shop-btn-group {
      position: absolute;
      right: 0;
      bottom: 15px;

      .sp-btn {
        margin-left: 10px;
      }
    }
  }

  .shop-info-overview {
    background-color: #f8f8f8;
    padding: 12px;
    margin-bottom: 15px;

    ul {
      display: flex;

      li {
        display: inline-block;
        height: 61px;
        flex: 1;
        text-align: center;
        border-left: 1px dotted #ccc;

        &:first-of-type {
          border-left: none;
        }

        h5 {
          margin: 11px 0 0 0;
          margin-top: 11px;
          font-size: $fontSize*1.8;
          font-weight: 400;
          line-height: 18px;
        }

        h6 {
          margin: 10px 0 0 0;
          font-size: $fontSize*.8;
          font-weight: 400;
          line-height: 18px;
        }
      }
    }
    
  }

  .shop-info-flow {
    .shop-info-block-header {
      position: relative;
      overflow: visible;
      height: 40px;
      padding: 10px;
      line-height: 20px;
      margin-bottom: 15px;
      background: #f8f8f8;

      .block-title {
        display: inline-block;
        margin: 0 12px 0 0;
        padding: 0 0 0 10px;
        line-height: 20px;
        font-size: 14px;
        border-left: 4px solid #f70;
      }
    }
  }
}
.echarts {
  width: 100%;
  height: 300px;
  border: $border;
}
</style>
