<template>
	<div class="good-header">
        <swiper :options="activityOption">
		       <swiper-slide v-for="item in swipe">
		        <img class="item-image" :src="item">
		       </swiper-slide>
		       <div class="swiper-pagination swiper-pagination-white" slot="pagination"></div>
		   </swiper>
       </div>
</template>
<script>
	export default{
		props:{
			swipe:{
				type:Array,
				required:true
			},
			activityOption:{
				type:Object,
				required:true
			}
		}
	}
</script>
<style lang='scss'>
	.good-header{
		.swiper-container{
			height:5.013333rem;
        	width: 10.0rem;
			.swiper-slide{
				img{
					width: 100%;
					display: block;
				}
			}
		}
	}
</style>