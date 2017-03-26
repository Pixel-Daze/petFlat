<!-- 登录模块 -->
<template>
	<div class="signin">
		<x-header class="vux-1px-b" :left-options="{backText: ''}" @on-click-back="back">登录<a slot="right" class="signUp" @click="signUp">注册</a></x-header>
		<group>
      		<x-input title="手机" name="mobile" placeholder="请输入手机号码" keyboard="number" v-model="signInForm.phone" is-type="china-mobile"></x-input>
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
					phone:'15705213522',
					password:'123'
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
			signUp(){
				this.$router.push({name:'SignUp'})
			},
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
				if(vm.signInForm.phone.length!=11){
					this.$vux.toast.show({
					 	text: '请输入正确的手机号',
					 	width:'14em',
					 	type: 'text'
					})
					return false
				}else if(vm.signInForm.password == 0){
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
	.signin{
		.signUp{
			color: $primary-color !important;
		}
		footer{
			margin:1.333333rem 0.28rem 0;
		}
	}
</style>