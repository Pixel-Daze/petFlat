<template>
	<header class="pet_index_header vux-1px-b">
		<div v-show="!auth" class="user-icon" @click="signIn">
			<span>游客</span>
		</div>
		<div v-show="auth" class="user-icon">
			<img :src="user.userIcon" alt="">
		</div>
		<div class="title">矮乐多宠物领养平台</div>
		<div class="addPet" @click="addPet">
			<span class="icon iconfont icon-bianji"></span>
		</div>
	</header>
</template>
<script>
	export default{
		props:{
			user:{
				type:Object,
				required:true
			},
			auth:{
				type:Boolean,
				required:true
			}
		},
		methods:{
			signIn(){
				this.$router.push({name:'SignIn'})
			},
			addPet(){
				let vm = this
				if(vm.auth){
					vm.$router.push({name:'AddPet'})
				}else{
					vm.signIn()
				}
			}
		}
	}
</script>
<style lang='scss'>
	.pet_index_header{
		height: 1.333333rem;
		width: 10.0rem;
		background: #fff;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 11;
		padding: 0.2rem 0.266667rem;
		display: flex;
		.user-icon{
			width: 0.933333rem;
			height: 0.933333rem;
			span,img{
				width: 100%;
				height: 100%;
				display: inline-block;
				border-radius: 50%;
				text-align: center;
				background-color: #ffcac6;
				color:#fff;
				line-height: 0.933333rem;
			}
		}
		.title{
			flex: 1;
			text-align: center;
			line-height: 0.933333rem;
			font-size: 0.373333rem;
		}
		.addPet{
			width: 0.933333rem;
			height: 0.933333rem;
			text-align: right;
			span{
				font-size: 0.72rem;
				text-align: right;
				line-height: 0.933333rem;
				color: #666;
			}
		}
	}
</style>