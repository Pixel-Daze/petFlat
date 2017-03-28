<template>
	<div class="addPet">
		<x-header class="vux-1px-b fix-header" :left-options="{backText: ''}" @on-click-back="back">发布宠物信息</x-header>
		<div class="content">
			<group title="基本信息">
				<x-input title="宠物名称" placeholder="请输入宠物名称" v-model="petInfo.PetName"></x-input>
      			<selector v-model="petInfo.PetType" title="宠物类别" :options="typeList"></selector>
      			<x-input title="宠物年龄" placeholder="请输入宠物年龄(月份)" keyboard="number" v-model="petInfo.PetOld"></x-input>
      			<x-switch title="宠物性别" :inline-desc="sexName" v-model="sex" @on-change="changeSex"></x-switch>
	    	</group>
	    	<group title="健康信息">
      			<x-switch title="宠物免疫" :inline-desc="sterName" v-model="ster" @on-change="changeSter"></x-switch>
      			<x-switch title="宠物绝育" :inline-desc="immuneName" v-model="immune" @on-change="changeImmune"></x-switch>
	    	</group>
	    	<group title="宠物简介">
	    		<x-textarea placeholder="用短语描述宠物特点用';'隔开,如：可爱；有点蠢" v-model="feature" @on-change="splitFeature"></x-textarea>
	    		<x-textarea placeholder="描述宠物" v-model="petInfo.PetDescription"></x-textarea>
	    	</group>
	    	<group title="宠物小图" class="thumb">
	    		<img class="avatar" v-bind:src="petInfo.ImgUrl"/>
                <vue-core-image-upload v-bind:class="['pure-button','pure-button-primary','js-btn-crop']" text="上传宠物小图" v-bind:crop="false" v-on:imageuploaded="upthumb"  url="http://101.198.151.190/api/upload.php" extensions="png,gif,jpeg,jpg" input-accept="image/*">
				</vue-core-image-upload>
	    	</group>
	    	<group title="宠物生活照" class="imgList">
	    		<img v-for="item in petInfo.ImgList" class="avatar-sq" v-bind:src="item"/>
                <vue-core-image-upload v-if="petInfo.ImgList.length<3" v-bind:class="['pure-button','pure-button-primary','js-btn-crop']" text="上传宠物生活照" v-bind:crop="false" v-on:imageuploaded="upImgList"  url="http://101.198.151.190/api/upload.php" extensions="png,gif,jpeg,jpg" input-accept="image/*">
				</vue-core-image-upload>
	    	</group>
		</div>
		<footer>
    		<x-button class="btn-orange" @click.native="addPet">确定</x-button>
		</footer>
	</div>
</template>
<script>
	import { XHeader,XInput,Group,XTextarea,XButton,Selector,XSwitch } from 'vux'
	import VueCoreImageUpload  from 'vue-core-image-upload'
	import * as api from '../../api/baseApi'
	export default{
		data(){
			return {
				petInfo:{
					PetName:'',
					PetType:'',
					PetSex:'0',
					PetOld:'',
					PetSter:'0',
					PetImmune:'0',
					PetFeature:[],
					PetDescription:'',
					ImgUrl:'',
					ImgList:[]
				},
				sex:false,
				sexName:'雌',
				ster:false,
				sterName:'否',
				immune:false,
				immuneName:'否',
				feature:'',
				typeList:['狗','猫','兔子','仓鼠','刺猬','鸟']
			}
		},
		components:{
			XHeader,
			XInput,
			Group,
			XTextarea,
			XButton,
			Selector,
			XSwitch,
			VueCoreImageUpload
		},
		methods:{
			addPet(){

			},
			// 选择性别
			changeSex(currentValue){
				let vm = this
				if(currentValue){
					vm.sexName = '雄'
					vm.petInfo.PetSex = '1'
				}else{
					vm.sexName = '雌'
					vm.petInfo.PetSex = '0'
				}
			},
			//选择是否做过免疫
			changeSter(currentValue){
				let vm = this
				if(currentValue){
					vm.sterName = '是'
					vm.petInfo.PetSter = '1'
				}else{
					vm.sterName = '否'
					vm.petInfo.PetSter = '0'
				}
			},
			//选择是否绝育
			changeImmune(currentValue){
				let vm = this
				if(currentValue){
					vm.immuneName = '是'
					vm.petInfo.PetImmune = '1'
				}else{
					vm.immuneName = '否'
					vm.petInfo.PetImmune = '0'
				}
			},
			//分割宠物特性
			splitFeature(val){
				let vm = this
				if(val.length){
					let arr = val.split('；')
					vm.petInfo.PetFeature = []
					arr.forEach(item=>{
						if(item.length>0){
							vm.petInfo.PetFeature.push(item)
						}
					})
				}
			},
			//上传宠物小图
			upthumb(res) {
				let vm = this
			  	if (res.errcode == 0) {
			    	vm.petInfo.ImgUrl = res.data.src
			  	}
			},
			//上传宠物列表
			upImgList(res){
				let vm = this
			  	if (res.errcode == 0) {
			    	vm.petInfo.ImgList.push(res.data.src)
			  	}
			}
		}
	}
</script>
<style lang='scss'>
	@import '../../../static/lib/base/config.scss';
	.addPet{
		.content{
			padding-top: 1.173333rem;
			.weui-label{
				width: 5em;
			}
			.thumb,.imgList{
				.weui-cells{
					height: 129px;
				}
				.avatar{
					width: 2.5rem;
				    height: 2.5rem;
				    margin-top: 0.266667rem;
				    border-radius: 50%;
				    border: 0.026667rem solid rgba(0,0,0,.05);
				}
				.avatar-sq{
					width: 2.5rem;
				    height: 2.5rem;
				    margin-top: 0.266667rem;
				    border: 0.026667rem solid rgba(0,0,0,.05);
				}
			}
		}
		footer{
			margin:0.666667rem 0.28rem 0;
			padding-bottom: 0.533333rem;
		}
		.g-core-image-upload-btn {
		    position: relative;
		    overflow: hidden;
		}
		.pure-button-primary, .pure-button-selected, a.pure-button-primary, a.pure-button-selected {
		    background-color: #0078e7;
		    color: #fff;
		}
		.pure-button {
		    font-family: inherit;
		    font-size: 0.4rem;
		    text-decoration: none;
		    display: inline-block;
		    background-color: $primary-color;
		    color: white;
		    padding: 0.133333rem 0.4rem;
		    border-radius: 0.133333rem;
		    
		    /*left: 2.666667rem;*/
		}
		.thumb .pure-button{
			top: -1.066667rem;
		}
		.imgList .pure-button{
			/*top: 0.933333rem;*/
		}
	}
</style>