<template>
	<div>
		<router-view></router-view>
		<tabber>
    		<tabber-item>
    			<span slot = 'label'>主页</span>
    		</tabber-item>
    		<tabber-item>
    			<span slot = 'label'>我的</span>
    		</tabber-item>
    	</tabber>
	</div>
</template>
<script>
	import { Tabbar, TabbarItem } from 'vux'
	export default {
		components:{
			Tabbar,
    		TabbarItem
  		}
	}
</script>
<style lang='scss'>
	
</style>