<template>
	<div>
		<tab>
	      <tab-item selected>我收到的</tab-item>
	      <tab-item>我发出的</tab-item>
	    </tab>
	</div>
</template>
<script>
	import { Tab, TabItem } from 'vux'
	export default {
		components:{
			Tab,
			TabItem
		}
	}
</script>
<style lang='scss'>
	
</style>