<template>
  <div id="app">
    <router-view></router-view>
    <!-- <tabber>
    	<tabber-item>
    		<span slot = 'label'>主页</span>
    	</tabber-item>
    	<tabber-item>
    		<span slot = 'label'>我的</span>
    	</tabber-item>
    </tabber> -->
  </div>
</template>

<script>
// import { Tabber,TabberItem } from 'vux'
export default {
  name: 'app',
  components:{
  	// Tabber,
  	// TabberItem
  }
}
</script>

<style lang='scss'>

body {
  background-color: #fbf9fe;
}
</style>
