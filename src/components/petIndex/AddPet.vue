<template>
	<div class="addPet">
		<x-header class="vux-1px-b fix-header" :left-options="{backText: ''}" @on-click-back="back">发布宠物信息</x-header>
	</div>
</template>
<script>
	import { XHeader } from 'vux'
	import * as api from '../../api/baseApi'
	export default{
		components:{
			XHeader
		}
	}
</script>
<style lang="scss">
	
</style>