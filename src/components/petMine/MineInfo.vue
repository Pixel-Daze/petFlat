<template>
	<div class="mineInfo">
		<div class="header">
			<div class="back">
				<span class="icon iconfont icon-back1" @click.stop="back"></span>
				<span v-if="phone==user.phone" class="icon iconfont icon-shezhi" @click.stop="setting"></span>
			</div>
			<div class="userInfo">
				<img :src="user.userIcon" alt="">
				<div v-if="user.username" class="name">{{user.username}}</div>
				<div v-else class="name">认证用户</div>
				<span v-if="user.area">{{user.area}}</span>
			</div>
		</div>
		<div class="info-swiper">
	       	<tab :line-width=2 active-color='#fd655a' v-model="index">
	        	<tab-item class="vux-center" :selected="selected === item" v-for="(item, index) in list" @click="selected = item" :key="index">{{item}}</tab-item>
	      	</tab>
	      	<swiper v-model="index" :show-dots="false">
	        	<swiper-item v-for="(item, index) in list" :key="index">
	          		<div class="tab-swiper vux-center" v-if="index == 1">
	          			<div class="swipe-area"><label>地址：</label>{{user.area}}</div>
	          			<div class="swipe-description"><label>简介：</label>{{user.description}}</div>
	          			<footer v-if="phone!=user.phone">
	          				<a class="phone" :href="link_phone">打电话</a>  
					      	<a class="sms" :href="link_sms">发短信</a>
					    </footer>
	          		</div>
	          		<div  class="tab-swiper vux-center petlist" v-if="index == 0">
	          			<pet-list :petList="PetList" @choosePet="choosePet" @delelePet="delelePet"></pet-list>
	          		</div>
	        	</swiper-item>
	      	</swiper>
	    </div>
	</div>
</template>
<script>
	import * as api from '../../api/baseApi'
	import { Tab, TabItem, Swiper, SwiperItem } from 'vux'
	import PetList from '../petIndex/IndexComponent/PetList'
	export default {
		data(){
			return {
				index:0,
				selected:'动态',
				user:{},
				list:['动态','简介'],
				PetList:[],
				link_phone:'',
				link_sms:'',
				phone:''
			}
		},
		components:{
			Tab,
			TabItem,
			Swiper,
			SwiperItem,
			PetList
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
						vm.link_phone  = 'tel:'+vm.user.phone
						vm.link_sms  = 'sms:'+vm.user.phone
						vm.phone = JSON.parse(sessionStorage.getItem('user')).phone
					}
				})
				vm.getMinePet()
			},
			getMinePet(){
				let vm = this
				api.getPetList().then(resp=>{
					if(resp.data.result == 0){
						vm.PetList = resp.data.data.filter(item=>{
							return item.phone == JSON.parse(sessionStorage.getItem('user')).phone
						})
					}
				})
			},
			choosePet(item){
		    	this.$router.push({name:'PetDetail',params:{petCode:item.PetCode}})
		    },
		    delelePet(item){
		    	this.$vux.confirm.show({
        		  	content: '确定删除此条宠物信息吗',
				  	onCancel () {
				  	},
				  	onConfirm () {
				  		let body={
				  			PetCode:item.PetCode
				  		}
				  		api.delelePet(body).then(resp=>{
				  			if(resp.data.result == 0){

				  			}
				  		})
				  	}
				})
		    	console.log(item)
		    },
		    setting(){
		    	this.$router.push({name:'Setting'})
		    }
		},
		created(){
			this.loadInfo()
		}
	}
</script>
<style lang='scss'>
	@import '../../../static/lib/base/config.scss';
	.mineInfo{
		height: 100%;
		.header{
			width: 10.0rem;
			height: 4.666667rem;
			background: url('../../../static/img/mine/header.png');
			.back{
				height: 1.066667rem;
				padding-top: 0.266667rem;
				position: relative;
				span{
					height: 0.933333rem;
					width: 0.933333rem;
					text-align: center;;
					line-height: 0.933333rem;
					color: #fff;
					font-size: 0.533333rem;
					display: block;
					background: rgba(0,0,0,.2);
					border-radius: 50%;
					margin:0 0 0 0.4rem;
				}
				.icon-shezhi{
					position: absolute;
					right: .4rem;
					top:0.266667rem;
				}
			}
			.userInfo{
				text-align: center;
				color: #fff;
				img{
					width: 2.133333rem;
					height: 2.133333rem;
					border-radius: 50%;
					border:0.08rem solid rgba(255,255,255,1);
				}
				.name{
					font-weight: bold;
					font-size: 0.4rem;
					text-shadow: 0.026667rem 0.026667rem 0.013333rem $common-font-color;
				}
			}
		}
		.info-swiper{
			height: calc(100%  - 4.666667rem) !important;
			.vux-slider{
				height: calc(100%  - 44px) !important;
				.vux-swiper{
					height: 100% !important;
				}
			}
			.vux-swiper .petlist{
				height: 100% !important;
				overflow-y: auto;
			}
			.tab-swiper{
				font-size: 0.4rem;
				padding-top: 0.133333rem;
				.swipe-area,.swipe-description{
					padding:0 0.266667rem;
					label{
						color: #6d6d6d;
					}
				}
			}
		}
		footer{
	      position: fixed;
	      bottom: 0;
	      width: 100%;
	      z-index: 100;
	      a{
	        height: 1.333333rem;
	        line-height: 1.333333rem;
	        text-align: center;
	        font-size: 0.453333rem;
	        color: #fff;
	        width: 50%;
	        float: left;
	      }
	      .phone{
	        background-color: $primary-color;
	      }
	      .sms{
	      	color: $primary-color;
	      	background-color: #fff;
	      }
	    }
	}
</style>