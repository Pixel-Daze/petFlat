<!-- 登录模块 -->
<template>
	<div class="signin">
		<x-header :left-options="{backText: ''}" @on-click-back="back" @on-click-more="signUp">登录<a slot="right" class="signUp">注册</a></x-header>
	</div>
</template>
<script>
	import { XHeader } from 'vux'
	export default{
		components: {
		    XHeader
		},
		methods:{
			signUp(){
				console.log('sad')
				this.$router.push({name:'SignUp'})
			}
		}
	}
</script>
<style lang='scss'>
	@import '../../../static/lib/base/config.scss';
	.signin{
		.signUp{
			color: $primary-color !important;
		}
	}
</style>