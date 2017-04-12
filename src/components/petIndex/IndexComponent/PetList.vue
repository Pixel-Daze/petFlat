<template>
	<div>
		<div class="pet-item" v-for="item in petList" @click="choosePet(item)">
			<div class="pet-img">
				<img :src="item.ImgUrl" alt="">
			</div>
			<div class="pet-info">
				<div class="fullname">
					<div class="name">{{item.PetName}}</div>
					<span v-if="item.PetSex == '1'" class="sex icon iconfont icon-lanmeixingbienan"></span>
					<span v-if="item.PetSex == '0'" class="sex icon iconfont icon-lanmeixingbienv"></span>
					<span class="delete" v-if="item.phone == phone||item.phone==10001" @click.stop="delelePet(item)">删除</span>
				</div>
				<div class="description">
					<span v-for="feature in item.PetFeature">{{feature}}</span>
				</div>
				<div class="old">
					<span>{{item.PetOld}}</span>&nbsp;个月
				</div>
				<div class="area">{{item.area}}</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				phone:''
			}
		},
		props:{
			petList:{
				type:Array,
				required:true
			}
		},
		methods:{
			choosePet(item){
				this.$emit('choosePet',item)
			},
			delelePet(item){
				this.$emit('delelePet',item)
			},
			loadInfo(){
				let vm = this
				if(vm.isSignIn()){
					vm.phone = JSON.parse(sessionStorage.getItem('user')).phone
				}
			}
		},
		created(){
			this.loadInfo()
		}
	}
</script>
<style lang='scss'>
	.pet-item{
		padding:0.186667rem 0 0.186667rem 0.2rem;
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
	    	.fullname,.description,.old,.area{
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
	        		padding:0 0.133333rem;
	        		text-align: center;
	        		color: #fff;
	        		border-radius: 0.133333rem;
	        		margin-right: 0.186667rem;
	        		display: inline-block;
	        		font-size: 0.32rem;
	        		&:nth-of-type(1){
	        			background-color: #f4817c;
	        		}
	        		&:nth-of-type(2){
	        			background-color: #b8e17c;
	        		}
	        		&:nth-of-type(3){
	        			background-color: #fdf298;
	        		}
	        		&:nth-of-type(4){
	        			background-color: #8d44af;
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
	        .area{
          		color: rgb(69,68,68);
          		margin-top: 0.133333rem;
          		font-size: 0.4rem;
	        }
	    }

	}
</style>