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
li {
  list-style: none;
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

  &[disabled] {
    opacity: .5;
    cursor: auto
  }
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

.sp-btn-primary {
  color: #fff;
  background: #38f;
  border-color: #38f;

  &:focus, &:link, &:visited, &:hover {
    color: #fff;
  }  

  &:active {
    color: #fff;
    background: #27f;
    border-color: #27f;
  }
}

.sp-input {
  display: inline-block;
  padding: 4px 6px;
  font-size: 14px;
  line-height: 20px;
  color: #555;
  vertical-align: middle;
  border-radius: 4px;
  background-color: #fff;
  border: 1px solid #ccc; 
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
  transition: border linear .2s,box-shadow linear .2s; 

  &:focus {
    border-color: rgba(82,168,236,.8);
    outline: none;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 8px rgba(82, 168, 236, .6);
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

.chosen-container {
  cursor: pointer;
  position: relative;
  display: inline-block;
  height: 28px;
  width: 100px;
  border: 1px solid rgb(221, 221, 221);
  border-radius: 2px;
  outline: none; 
}
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
.my-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
  background: rgba(0, 0, 0, .3);

  .my-modal-body {
    margin: 10% auto 0;
    width: 30%;
    padding: 10px;
    background: #fff;
    box-shadow: 0 0 8px #666;
    border-radius: 3px;
  }
}
</style>
