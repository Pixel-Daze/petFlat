<!-- 设置页面 -->
<template>
	<div class="setting">
		<x-header class="vux-1px-b fix-header" :left-options="{backText: ''}" @on-click-back="back">设置</x-header>
		<div class="content">
			<group>
				<cell title="修改密码" is-link :link="{path:'/modifyPwd'}"></cell>
			</group>
		</div>
		<footer>
	    	<x-button class="btn-orange" @click.native="signOut">退出</x-button>
		</footer>
	</div>
</template>
<script>
	import { XHeader,Group,XButton,Cell } from 'vux'
	export default{
		components:{
			XHeader,
			Group,
			XButton,
			Cell
		},
		methods:{
			signOut(){
				sessionStorage.removeItem("user")
				this.$router.push('SignIn')
			}
		}
	}
</script>
<style lang='scss'>
	@import '../../../static/lib/base/config.scss';
	.setting{
		.content{
			padding-top: 1.173333rem;
			
		}
		footer{
			margin:1.333333rem 0.28rem 0;
		}
	}
</style>