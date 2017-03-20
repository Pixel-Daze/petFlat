<template>
	<div>
		<router-view></router-view>
		<tabbar>
    		<tabbar-item>
    			<span slot = 'label'>主页</span>
    		</tabbar-item>
    		<tabbar-item>
    			<span slot = 'label'>我的</span>
    		</tabbar-item>
    	</tabbar>
	</div>
</template>
<script>
	import { Tabbar, TabbarItem } from 'vux'
	export default {
  		components: {
    		Tabbar,
    		TabbarItem
  		}
	}
</script>
<style lang='scss'>
	
</style>