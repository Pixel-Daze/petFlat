<!-- 注册模块 -->
<template>
	<div class="signup">
		<x-header class="vux-1px-b" :left-options="{backText: ''}" @on-click-back="back">注册</x-header>
		<group>
      		<x-input title="手机" name="mobile" placeholder="请输入手机号码" keyboard="number" v-model="signUpForm.phone" is-type="china-mobile"></x-input>
      		<x-input title="密码" placeholder="请输入密码" type="password" v-model="signUpForm.password"></x-input>
    	</group>
    	<footer>
    		<x-button class="btn-orange" @click.native="signup">确定</x-button>
		</footer>
		<div class="protocol">
			点击确定表示支持同意<span @click="protocol">宠物领养平台协议</span>
		</div>
	</div>
</template>
<script>
	import { XHeader, XInput, Group, XButton } from 'vux'
	import * as api from '../../api/baseApi'
	export default{
		data(){
			return{
				signUpForm:{
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
			// 注册
			signup(){
				let vm = this
				if(vm.checkInfo()){
					api.signup(vm.signUpForm).then(resp=>{
						if(resp.data.result == 0){
							vm.$vux.alert.show({
						        title: '提示',
						        content: '注册成功',
						        onHide () {
						           vm.signin(vm.signUpForm)
						        }
						    })
						}
					})
				}
			},
			//登录函数
			signin(body){
				let vm = this
				api.signin(body).then(resp=>{
					if(resp.data.result == '0'){
						let info = JSON.stringify(resp.data.data)
						sessionStorage.setItem('user',info)
						vm.$router.push({name:'PetMine'})
					}
				})
			},
			// 查看协议
			protocol(){
				this.$router.push({name:'Protocol'})
			},
			checkInfo(){
				let vm = this
				if(vm.signUpForm.phone.length!=11){
					this.$vux.toast.show({
					 	text: '请输入正确的手机号',
					 	width:'14em',
					 	type: 'text'
					})
					return false
				}else if(vm.signUpForm.password.length == 0){
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
	.signup{
		position: relative;
		height: 100%;
		footer{
			margin:1.333333rem 0.28rem 0;
		}
		.protocol{
			position: absolute;
			text-align: center;
			bottom: 0.266667rem;
			width: 10.0rem;
			span{
				color: $primary-color;
			}
		}
	}
</style>