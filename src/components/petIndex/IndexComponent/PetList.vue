<template>
	<div>
		<div class="pet-item" v-for="item in petList" @click="choosePet(item)">
			<div class="pet-img">
				<img :src="item.ImgUrl" alt="">
			</div>
			<div class="pet-info">
				<div class="fullname">
					<div class="name">{{item.PetName}}</div>
					<span v-if="item.PetSex == '0'" class="sex icon iconfont icon-lanmeixingbienan"></span>
					<span v-if="item.PetSex == '1'" class="sex icon iconfont icon-lanmeixingbienv"></span>
				</div>
				<div class="description">
					<span v-for="feature in item.PetFeature">{{feature}}</span>
				</div>
				<div class="area"></div>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		props:{
			petList:{
				type:Array,
				required:true
			}
		},
		methods:{
			choosePet(item){
				this.$emit('choosePet',item)
			}
		}
	}
</script>
<style lang='scss'>
	.pet-item{
		padding:0.186667rem 0.2rem;
	    background-color: #fff;
	    display: flex;
	    margin-top: 0.266667rem;
	    .pet-img{
	    	font-size: 0;
        	width:3.12rem;
        	height: 2.88rem;
        	margin-right: 0.32rem;
        	img{
	    		width: inherit;
	    		height: inherit;
	    	}
	    }
	    .pet-info{
	    	flex: 1;
	    	.fullname,.description{
	           height: 0.583333rem;
	           line-height: 0.583333rem;
	           width: 5.973333rem;
	           text-overflow:ellipsis;
	           overflow:hidden;
	           white-space:nowrap;
	        }
	    	.fullname{
	          	font-size: 0.373333rem;
	          	color:rgb(69,68,68);
	          	position: relative;
	          	.name{
	          		width: 1.6rem;
	          	}
	          	.sex{
	          		font-weight: bold;
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
	        .area{
	        	
	        }
	    }

	}
</style>