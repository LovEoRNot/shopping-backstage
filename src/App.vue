<template>
  <div id="app">
    <Sidebar></Sidebar> 
    <div class="content">
      <router-view></router-view>
    </div>    
  </div>
</template>

<script>
import Sidebar from './components/Sidebar.vue'
import { router } from './routes/routes'

export default {
  router, 
  name: 'app',
  components: {
    Sidebar
  }
}
</script>

<style lang="scss">
//全局样式注册
* {box-sizing: border-box;}
html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  font-size: 100%;
  vertical-align: baseline;
}

li {
  list-style: none;
}

html {height: 100%}

body {
  position: relative;
  background: #f2f2f2;
  min-width: 1000px;
  font-size: 14px;
  line-height: 1.5em;
  font-family: Helvetica,STHeiti,"Microsoft YaHei",Verdana,Arial,Tahoma,sans-serif;
  background-color: #fff;
  text-rendering: optimizeLegibility;
  height: 100%;
}

a {
  color: #38f;
  text-decoration: none;

  &:hover {
    color: #59f;
    text-decoration: none;
  }

  &:focus {
    color: #59f;
    text-decoration: none;
  }
}

#app {
  height: 100%;
}
.aside {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 90px;
  background: #444;
  z-index: 99;
}

.content {
  position: relative;
  width: auto;
  margin: 0 0 0 205px;
  background: #F2F2F2;
  padding-bottom: 50px; 
  height: 100%;
}

//全局按钮样式
.sp-btn {
  display: inline-block;
  height: 30px;
  line-height: 30px;
  padding: 0 10px;
  border-radius: 2px;
  font-size: 12px;
  color: #333;
  background: #fff;
  border: 1px solid #bbb;
  text-align: center;
  vertical-align: middle;
  box-sizing: border-box;
  cursor: pointer;
  transition: background-color .3s;

  &:focus, &:link, &:visited {
    color: #333;
  }

  &:hover {
    color: #59f;
    border-color: #59f;
    text-decoration: none;
  }

  &:active {
    color: #333;
    background: #e5e5e5;
    border-color: #bbb;
    text-decoration: none;
  }  
}

.sp-btn-success {
  color: #fff;
  background: #4b0;
  border-color: #4b0;

  &:focus, &:link, &:visited {
    color: #fff;
  }

  &:hover {
    color: #fff;
    background: #6c2;
    border-color: #6c2;
  }

  &:active {
    color: #fff;
    background: #0a0;
    border-color: #0a0;
  }
}

.info-header {
  position: relative;
  height: 50px;
  min-width: 750px;
  background: #fff;
  border-bottom: 1px solid #e5e5e5;
  padding: 0 100px 0 5px;
  transition: padding-right 0.5s;
  .info-name {
    padding: 14px 21px;
  }
}

.info-content {
  margin: 10px;
  padding: 15px;
  min-width: 750px;
  min-height: 500px;
  box-shadow: 0 0 1px 0 rgba(0,0,0,0.2);
  background: #fff;
}
</style>
