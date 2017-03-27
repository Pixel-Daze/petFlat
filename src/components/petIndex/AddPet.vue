<template>
	<div class="addPet">
		<x-header class="vux-1px-b fix-header" :left-options="{backText: ''}" @on-click-back="back">发布宠物信息</x-header>
		<div class="content">
			<group>
				<x-input title="宠物名称" placeholder="请输入宠物名称" v-model="petInfo.PetName"></x-input>
	      		
	    	</group>
	    	<group title="宠物简介">
	    		<x-textarea  v-model="petInfo.PetDescription"></x-textarea>
	    	</group>
		</div>
		
	</div>
</template>
<script>
	import { XHeader,XInput,Group,XTextarea,XButton,Selector } from 'vux'
	import VueCoreImageUpload  from 'vue-core-image-upload'
	import * as api from '../../api/baseApi'
	export default{
		data(){
			return {
				petInfo:{
					PetName:'',
					PetType:'',
					PetSex:'',
					PetOld:'',
					PetSter:'',
					PetImmune:'',
					PetFeature:[],
					PetDescription:'',
					ImgUrl:'',
					ImgList:''
				}
			}
		},
		components:{
			XHeader,
			XInput,
			Group,
			XTextarea,
			XButton,
			Selector,
			VueCoreImageUpload
		},
		methods:{
			addPet(){

			}
		}
	}
</script>
<style lang='scss'>
	.addPet{
		.content{
			padding-top: 1.173333rem;
		}
		footer{
			margin:1.333333rem 0.28rem 0;
		}
	}
</style>