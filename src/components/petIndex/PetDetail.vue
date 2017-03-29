<template>
	<div class="petDetail">
		<x-header class="vux-1px-b fix-header" :left-options="{backText: ''}" @on-click-back="back">宠物详情</x-header>
		<div class="pet_container">
			<pet-swiper :swipe="swipe" :activityOption="activityOption"></pet-swiper>
		</div>
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
	            petInfo:{}
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
	.petDetail{
		.pet_container{
			padding-top: 1.173333rem;
		}
	}
</style>