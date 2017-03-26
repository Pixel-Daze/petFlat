<template>
	<div class="editUser">
		<x-header class="vux-1px-b fix-header" :left-options="{backText: ''}" @on-click-back="back">编辑个人信息</x-header>
		<div class="content">
			<group>
				<x-input title="昵称：" placeholder="请输入昵称" v-model="user.username"></x-input>
	      		<x-input title="手机：" name="mobile" placeholder="请输入手机号码" keyboard="number" v-model="user.phone" is-type="china-mobile"></x-input>
	      		<x-input title="城市：" placeholder="请输入所在城市" v-model="user.area"></x-input>
	    	</group>
	    	<group title="个人简介">
	    		<x-textarea  v-model="user.description"></x-textarea>
	    	</group>	
		</div>
		<footer>
	    	<x-button class="btn-orange" @click.native="updateUser">确定</x-button>
		</footer>
	</div>
</template>
<script>
	import { XHeader,XInput,Group,XTextarea,XButton } from 'vux'
	import * as api from '../../api/baseApi'
	export default{
		data(){
			return {
				user:{}
			}
		},
		components:{
			XHeader,
			XInput,
			Group,
			XTextarea,
			XButton 
		},
		methods:{
			loadInfo(){
				let vm = this
				if(vm.isSignIn()){
					vm.user = JSON.parse(sessionStorage.getItem('user'))
				}
			},
			updateUser(){
				let vm = this
				vm.$router.push({name:'PetMine'})
			}
		},
		mounted(){
			this.loadInfo()
		}
	}
</script>
<style lang='scss'>
	@import '../../../static/lib/base/config.scss';
	.editUser{
		.content{
			padding-top: 1.173333rem;
		}
		footer{
			margin:1.333333rem 0.28rem 0;
		}
	}
</style>