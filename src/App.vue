<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang='scss'>
@import '../static/lib/icon-font/iconfont.css';
@import '../static/lib/base/common.css';
*{
	box-sizing: border-box;
}
a:hover{
	text-decoration: none;
}
</style>
<style lang="less">
@import '~vux/src/styles/reset.less';
@import '~vux/src/styles/1px.less';
html,body,#app {
	height:100%;
  	background-color: #fbf9fe;
  	font-size: 0.32rem;
}
</style>

