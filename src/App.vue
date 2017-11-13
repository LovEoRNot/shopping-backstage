<template>
  <div id="app">
    <Sidebar></Sidebar> 
  </div>
</template>

<script>
import Sidebar from './components/Sidebar.vue'
export default { 
  name: 'app',
  components: {
    Sidebar
  }
}
</script>

<style lang="scss">
* {box-sizing: border-box;}
html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    font-size: 100%;
    vertical-align: baseline;
}
body {
  position: relative;
  background: #f2f2f2;
  min-width: 1000px;
  font-size: 12px;
  line-height: 1.5em;
  font-family: Helvetica,STHeiti,"Microsoft YaHei",Verdana,Arial,Tahoma,sans-serif;
  background-color: #fff;
  text-rendering: optimizeLegibility;
}

.aside {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 90px;
  background: #444;
}

</style>
