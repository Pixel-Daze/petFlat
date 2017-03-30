<template>
	<div class="mineInfo">
		<div class="header">
			<div>
				<span class="back"></span>
			</div>
			<div class="userInfo">
				<img :src="user.userIcon" alt="">
				<span class="name">{{user.username}}</span>
			</div>
		</div>
	</div>
</template>
<script>
	import * as api from '../../api/baseApi'
	export default {
		data(){
			return {
				user:{}
			}
		},
		methods:{
			loadInfo(){
				let vm = this
				let body = {
					phone:vm.$route.params.phone
				}
				api.getuserInfo(body).then(resp=>{
					if(resp.data.result == '0'){
						vm.user = resp.data.data
					}
				})
			}
		},
		created(){
			this.loadInfo()
		}
	}
</script>
<style lang='scss'>
	.mineInfo{
		.header{
			width: 10.0rem;
			height: 4.666667rem;
			background: url('../../../static/img/mine/header.png');
			.userInfo{
				text-align: center;
				color: #fff;
				img{
					width: 1.706667rem;
					height: 1.706667rem;
					border-radius: 50%;
					border:0.08rem solid rgba(255,255,255,1);
				}
			}
		}
	}
</style>