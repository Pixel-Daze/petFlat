<!-- 登录模块 -->
<template>
	<div class="AdminSignIn">
		<x-header class="vux-1px-b" :left-options="{backText: ''}" @on-click-back="back">管理员登录</x-header>
		<group>
      		<x-input title="账号"  placeholder="请输入账号" v-model="signInForm.phone" ></x-input>
      		<x-input title="密码" placeholder="请输入密码" type="password" v-model="signInForm.password"></x-input>
    	</group>
    	<footer>
    		<x-button class="btn-orange" @click.native="signin">确定</x-button>
		</footer>
	</div>
</template>
<script>
	import { XHeader, XInput, Group, XButton } from 'vux'
	import * as api from '../../api/baseApi'
	export default{
		data(){
			return{
				signInForm:{
					phone:'',
					password:''
				}
			}
		},
		components: {
		    XHeader,
		    XInput, 
		    Group,
		    XButton
		},
		methods:{
			
			signin(){
				let vm = this
				if(vm.checkInfo()){
					api.signin(vm.signInForm).then(resp=>{
						if(resp.data.result == '0'){
							let info = JSON.stringify(resp.data.data)
							sessionStorage.setItem('user',info)
							vm.$router.push({name:'PetMine'})
						}
						
					})
				}
			},
			checkInfo(){
				let vm = this
				if(vm.signInForm.phone!='admin'){
					this.$vux.toast.show({
						text: '请输入正确的帐号',
						width:'14em',
						type: 'text'
					})
					return false
				}else if(vm.signInForm.password.length == 0){
					this.$vux.toast.show({
					 	text: '请输入密码',
					 	width:'8em',
					 	type: 'text'
					})
					return false
				}else{
					return true
				}
			}
		}
	}
</script>
<style lang='scss'>
	@import '../../../static/lib/base/config.scss';
	.AdminSignIn{
		.signUp{
			color: $primary-color !important;
		}
		footer{
			margin:1.333333rem 0.28rem 0;
		}
	}
</style>