<template>
	<div class="petDetail">
		<x-header class="vux-1px-b fix-header" :left-options="{backText: ''}" @on-click-back="back">宠物详情</x-header>
		<div class="pet_container">
			<pet-swiper :swipe="swipe" :activityOption="activityOption"></pet-swiper>
			<div class="pet-info vux-1px-b">
				<div class="fullname">
					<div class="name">{{petInfo.PetName}}</div>
					<span v-if="petInfo.PetSex == '1'" class="sex icon iconfont icon-lanmeixingbienan"></span>
					<span v-if="petInfo.PetSex == '0'" class="sex icon iconfont icon-lanmeixingbienv"></span>
				</div>
				<div class="description">
					<label>特点：</label>
					<span v-for="feature in petInfo.PetFeature">{{feature}}</span>
				</div>
				<div class="old">
					<label>年龄：</label>
					<span>{{petInfo.PetOld}}</span>&nbsp;个月
				</div>
				<div class="area">
					<label>城市：</label>
				{{petInfo.area}}</div>
				<div class="health">
					<label>健康：</label>
				{{petInfo.PetSter|toSter}}/{{petInfo.PetImmune|toImmune}}</div>
				<div class="area">
					<label>描述：</label>
				{{petInfo.PetDescription}}</div>
			</div>
			<div class="publisher vux-1px-tb">
				<div class="user-icon">
					<img :src="publisher.userIcon" alt="">
				</div>
				<div class="detail-info" >
					<div class="user-name">
				  		<span class="name">{{publisher.username}}</span>
				  		<img src="../../../static/img/mine/yirenz@2x.png" alt="">
				  		<br>
				  		<span class="area">{{publisher.area}}</span>
				  	</div>
				</div>
				<div class="right">
					<span class="icon iconfont icon-back"></span>
				</div>
			</div>
		</div>
		<footer>
	      	<div class="purchase" >
	        我想领养
	      	</div>
	    </footer>
		
	</div>
</template>
<script>
	import { XHeader} from 'vux'
	import PetSwiper from './IndexComponent/PetSwiper'
	import * as api from '../../api/baseApi'
	export default {
		data(){
			return {
				swipe:[],
				activityOption:{
	              	autoplay: 4000,
	              	pagination: '.swiper-pagination',
	              	initialSlide: 1,
	              	autoplayDisableOnInteraction : false,
	              	loop: true
	            },
	            petInfo:{},
	            publisher:{}
			}
		},
		components:{
			XHeader,
			PetSwiper
		},
		methods:{
			loadPetInfo(){
				let vm = this
				let body = {
					PetCode:vm.$route.params.petCode
				}
				api.getPetDetail(body).then(resp=>{
					if(resp.data.result==0){
						vm.petInfo = resp.data.data
						vm.swipe = vm.petInfo.ImgList
						let body = {
							phone:vm.petInfo.phone
						}
						vm.getuserInfo(body)
					}
				})
			},
			getuserInfo(body){
				let vm = this
				api.getuserInfo(body).then(resp=>{
					if(resp.data.result == '0'){
						vm.publisher = resp.data.data
					}
				})
			}
		},
		created(){
			this.loadPetInfo()
		}
	}
</script>
<style lang='scss'>
	@import '../../../static/lib/base/config.scss';
	.petDetail{
		.pet_container{
			padding-top: 1.173333rem;
			.pet-info{
		    	padding: 0.266667rem;
		    	background: #fff;
		    	.fullname,.description,.old,.area,.health{
		           line-height: 0.583333rem;
		           label{
		           		font-size: 0.4rem;
		           }
		        }
		    	.fullname{
		          	font-size: 0.373333rem;
		          	color:rgb(69,68,68);
		          	position: relative;
		          	font-weight: bold;
		          	.name{
		          		width: 1.6rem;
		          	}
		          	.sex{
		          		font-weight: bolder;
		          		font-size: 0.4rem;
						position: absolute;
						top:0.053333rem;
						left: 1.6rem;
		          	}
		          	.icon-lanmeixingbienan{
		          		color: #09ddf6;
		          	}
		          	.icon-lanmeixingbienv{
		          		color: #f35993;
		          	}
		          	.delete{
		          		position: absolute;
						top:0.053333rem;
						right: 0;
						color: #d6d6d6;
						padding:0 0.133333rem;
						font-size: 0.266667rem;
		          	}
		        }
		        .description{
		        	margin-top: 0.133333rem;
		        	span{
		        		padding:0.08rem 0.213333rem;
		        		color: #fff;
		        		border-radius: 0.08rem;
		        		margin-right: 0.186667rem;
		        		&:nth-of-type(1){
		        			background-color: #f4817c;
		        		}
		        		&:nth-of-type(2){
		        			background-color: #b8e17c;
		        		}
		        		&:nth-of-type(3){
		        			background-color: #fdf298;
		        		}
		        	}
		        }
		        .old{
		        	color: rgb(69,68,68);
	          		margin-top: 0.133333rem;
	          		span{
	          			color: #ff7e00;
	          			font-style: italic;
	          			font-weight: bold;
	          			font-size: 0.426667rem;
	          		}
		        }
		        .area,.health{
	          		color: rgb(69,68,68);
	          		margin-top: 0.133333rem;
	          		font-size: 0.4rem;
		        }
		    }
		    .publisher{
		    	margin-top: 0.266667rem;
		    	height: 2.266667rem;
		    	width: 10.0rem;
		    	background: #fff;
		    	display: flex;
		    	padding: 0.266667rem;
		    	.user-icon{
					height: 100%;
					width: 1.733333rem;
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
					.user-name{
						flex: 1;
						margin-top: 0.346667rem;
						img{
							width: 0.92rem;
							height: 0.453333rem;
							margin-bottom: -0.04rem;
						}
						.name{
							font-size: 0.426667rem;
						}
						.area{
							font-size: 0.266667rem;
							color: #666;
						}
					}
					
				}
				.right{
					width: 0.64rem;
					height: 100%;
					line-height: 1.706667rem;
					color: #d6d6d6;
				}
		    }
		}
		footer{
	      position: fixed;
	      bottom: 0;
	      width: 100%;
	      div{
	        height: 1.333333rem;
	        line-height: 1.333333rem;
	        text-align: center;
	        font-size: 0.453333rem;
	        color: #fff;
	      }
	      .purchase{
	        background-color: $primary-color;
	      }
	    }
	}
</style>