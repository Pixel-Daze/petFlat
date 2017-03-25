<template>
	<div>
		<div class="pet-item" v-for="item in petList" @click="choosePet(item)">
			<div class="pet-img">
				<img :src="item.ImgUrl" alt="">
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

	}
</style>