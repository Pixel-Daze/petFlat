<template>
	<div class="editUser">
		<x-header class="vux-1px-b fix-header" :left-options="{backText: ''}" @on-click-back="back">编辑个人信息</x-header>
		<div class="content">
			<div class="user">
                <img class="avatar" v-bind:src="user.userIcon"/><br>
                <vue-core-image-upload v-bind:class="['pure-button','pure-button-primary','js-btn-crop']" text="上传头像" v-bind:crop="false" inputOfFile="file" v-on:imageuploaded="imageuploaded"  url="http://43.251.116.231:5000/upload_pic" extensions="png,gif,jpeg,jpg" v-on:errorhandle="errorhandle" input-accept="image/*">
				</vue-core-image-upload>
            </div>
			
			<group>
				<x-input title="昵称：" placeholder="请输入昵称" v-model="user.username"></x-input>
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
	import VueCoreImageUpload  from 'vue-core-image-upload'
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
			XButton,
			VueCoreImageUpload
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
				if(vm.checkInfo()){
					api.editUser(vm.user).then(resp=>{
						if(resp.data.result == 0){
							vm.$vux.alert.show({
						        title: '提示',
						        content: '修改个人信息成功',
						        onHide () {
						           sessionStorage.setItem('user',JSON.stringify(vm.user))
						           vm.$router.push({name:'PetMine'})
						        }
						    })
						}
					})
				}
			},
			imageuploaded(res) {
				let vm = this
			  	if (res.result == 0) {
			    	vm.user.userIcon = res.data
			  	}
			},
			errorhandle(err) {
			  console.error(err);
			},
			checkInfo(){
				let vm = this
				if(vm.user.username == ''){
					this.$vux.toast.show({
					 	text: '请输入昵称',
					 	width:'8em',
					 	type: 'text'
					})
					return false
				}else if(vm.user.area == ''){
					this.$vux.toast.show({
					 	text: '请输入所在城市',
					 	width:'14em',
					 	type: 'text'
					})
					return false
				}else if(vm.user.description == ''){
					this.$vux.toast.show({
					 	text: '请输入简介',
					 	width:'8em',
					 	type: 'text'
					})
					return false
				}else{
					return true
				}
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
			.user{
				text-align: center;
				.avatar{
					width: 2.5rem;
				    height: 2.5rem;
				    margin-top: 0.266667rem;
				    border-radius: 50%;
				    border: 0.026667rem solid rgba(0,0,0,.05);
				}
			}
			
		}
		footer{
			margin:1.333333rem 0.28rem 0;
		}
		.g-core-image-upload-btn {
		    position: relative;
		    overflow: hidden;
		}
		.pure-button-primary, .pure-button-selected, a.pure-button-primary, a.pure-button-selected {
		    background-color: #0078e7;
		    color: #fff;
		}
		.pure-button {
		    font-family: inherit;
		    font-size: 0.4rem;
		    text-decoration: none;
		    display: inline-block;
		    background-color: #3ab981;
		    color: white;
		    padding: 0.133333rem 0.4rem;
		    border-radius: 0.133333rem;
		}
	}
</style>