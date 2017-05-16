<template>
	<div class="petMine">
		<div class="user-info" v-show="!auth" @click="signIn">
			<div class="user-icon">
				<span>游客</span>
			</div>
			<div class="detail-info">
				<div class="user-name">
			  		<span>游客</span>
			  		<img src="../../../static/img/mine/weirenz@2x.png" alt="">
			  	</div>
			  	<div class="login" >登录</div>
			</div>
			<div class="right">
				<span class="icon iconfont icon-back"></span>
			</div>
		</div>
		<div class="user-info" v-show="auth" @click="userInfo(user.phone)">
			<div class="user-icon">
				<img :src="user.userIcon" alt="">
			</div>
			<div class="detail-info" >
				<div class="user-name">
			  		<span v-if="user.username">{{user.username}}</span>
			  		<span v-else>认证用户</span>
			  		<img src="../../../static/img/mine/yirenz@2x.png" alt="">
			  	</div>
			</div>
			<div class="right">
				<span class="icon iconfont icon-back"></span>
			</div>
		</div>
		<group class="mine_opt" v-show="user.auth!='3'">
		    <cell title="我的发布" is-link @click.native="goMinePublish">
		    	<span slot="icon" class="icon iconfont icon-maobi"></span>
		    </cell>
		    <cell title="收藏" is-link @click.native="goMineCollect">
		    	<span slot="icon" class="icon iconfont icon-shoucang"></span>
		    </cell>
		    <cell title="编辑资料" is-link @click.native="goEdit">
		    	<span slot="icon" class="icon iconfont icon-shezhi"></span>
		    </cell>
		</group>
	</div>
</template>
<script>
	import { Cell, Group } from 'vux'
	export default {
		data(){
			return {
				user:{},
				auth:false
			}
		},
		components: {
		    Group,
		    Cell
		},
		methods:{
			signIn(){
				this.$router.push({name:'SignIn'})
			},
			goEdit(){
				let vm = this
				if(vm.auth){
					this.$router.push({name:'EditUser'})
				}else{
					vm.signIn()
				}
			},
			goMinePublish(){
				let vm = this
				if(vm.auth){
					this.$router.push({name:'MinePublish'})
				}else{
					vm.signIn()
				}
			},
			goMineCollect(){
				let vm = this
				if(vm.auth){
					this.$router.push({name:'MineCollect'})
				}else{
					vm.signIn()
				}
			},
			userInfo(phone){
				this.$router.push({name:'MineInfo',params:{phone:phone}})
			},
			loadInfo(){
				let vm = this
				if(vm.isSignIn()){
					vm.user = JSON.parse(sessionStorage.getItem('user'))
					vm.auth = true
				}else{
					vm.auth = false
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
	.petMine{
		.user-info{
			height: 3.146667rem;
			width: 10.0rem;
			background-color: $second-color;
			padding: 0.72rem 0.266667rem;
			display: flex;
			color: #fff;
			.user-icon{
				height: 100%;
				width: 1.706667rem;
				border-radius: 50%;
				border: 0.1rem solid #fff;
				text-align: center;
				background-color: #ffcac6;
				span{
					font-size: 0.426667rem;
					line-height: 1.573333rem;
					height:100%;
					width:100%;
					display: inline-block;
				}
				img{
					height:100%;
					width:100%;
					display: inline-block;
					border-radius: 50%;
				}
			}
			.detail-info{
				padding-left: 0.266667rem;
				flex: 1;
				display: flex;
				line-height: 1.706667rem;
				.user-name{
					flex: 1;
					font-size: 0.48rem;
					img{
						width: 0.92rem;
						height: 0.453333rem;
						margin-bottom: -0.026667rem;
					}
				}
				.login{
					width: 2.666667rem;
					font-size: 0.4rem;
					height: 0.64rem;
					text-align: right;
					padding-right: 0.4rem;
				}
			}
			.right{
				width: 0.64rem;
				height: 100%;
				line-height: 1.706667rem;
			}

		}
		.mine_opt{
			.icon{
				font-size: 0.533333rem;
				color: #ffb80d;
			}
			.vux-label{
				font-size: 0.4rem;
				color: $common-font-color;
				padding-left: 0.266667rem;
			}
		}
		
	}
</style>