<!-- modify the password -->
<template>
	<div class="modifyPwd">
		<x-header class="vux-1px-b fix-header" :left-options="{backText: ''}" @on-click-back="back">修改密码</x-header>
		<div class="content">
			<group>
				<x-input title="原密码" placeholder="请输入原密码" type="password" v-model="oldpwd"></x-input>
				<x-input title="新密码" placeholder="请输入新密码" type="password" v-model="newpwd"></x-input>
				<x-input title="确认密码" placeholder="请再次输入新密码" type="password" v-model="confirmpwd"></x-input>
			</group>
		</div>
		<footer>
	    	<x-button class="btn-orange" @click.native="modifyPwd">确定</x-button>
		</footer>
	</div>
</template>
<script>
	import { XHeader,Group,XButton,XInput } from 'vux'
	import * as api from '../../api/baseApi'
	export default{
		data(){
			return {
				oldpwd:'',
				newpwd:'',
				confirmpwd:''
			}
		},
		components:{
			XHeader,
			Group,
			XButton,
			XInput
		},
		methods:{
			modifyPwd(){
				let vm = this
				if(vm.checkInfo()){
					let body={
						oldpwd:vm.oldpwd,
						newpwd:vm.newpwd,
						phone:JSON.parse(sessionStorage.getItem('user')).phone
					}
					let auth = JSON.parse(sessionStorage.getItem('user')).auth
					if(auth == '3'){
						api.modify_change_admin_password(body).then(resp=>{
							if(resp.data.result == '0'){
								vm.$vux.alert.show({
							        title: '提示',
							        content: '修改密码成功',
							        onHide () {
							           vm.$router.push({name:'PetMine'})
							        }
							    })
							}
						})
					}else{
						api.modifyPwd(body).then(resp=>{
							if(resp.data.result == '0'){
								vm.$vux.alert.show({
							        title: '提示',
							        content: '修改密码成功',
							        onHide () {
							           vm.$router.push({name:'PetMine'})
							        }
							    })
							}
						})
					}
					
				}
			},
			checkInfo(){
				let vm = this
				if(vm.oldpwd==''){
					this.$vux.toast.show({
					 	text: '请输入原密码',
					 	width:'11em',
					 	type: 'text'
					})
					return false
				}else if(vm.newpwd ==''){
					this.$vux.toast.show({
					 	text: '请输入新密码',
					 	width:'11em',
					 	type: 'text'
					})
					return false
				}else if(vm.confirmpwd ==''){
					this.$vux.toast.show({
					 	text: '请确认新密码',
					 	width:'11em',
					 	type: 'text'
					})
					return false
				}else if(vm.confirmpwd!=vm.newpwd){
					this.$vux.toast.show({
					 	text: '新密码不一致',
					 	width:'11em',
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
	.modifyPwd{
		.content{
			padding-top: 1.173333rem;
			.weui-label{
				width: 5em !important;
			}
		}
		footer{
			margin:1.333333rem 0.28rem 0;
		}
	}
</style>