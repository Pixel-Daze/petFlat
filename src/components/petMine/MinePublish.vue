<template>
	<div class="minePublish">
		<x-header class="vux-1px-b fix-header" :left-options="{backText: ''}" @on-click-back="back">我的发布</x-header>
		<div class="pet_container">
			<pet-list :petList="PetList" @choosePet="choosePet" @delelePet="delelePet"></pet-list>
		</div>
	</div>
</template>
<script>
	import { XHeader} from 'vux'
	import PetList from '../petIndex/IndexComponent/PetList'
	import * as api from '../../api/baseApi'
	export default{
		data(){
			return {
				PetList:[]
			}
		},
		components:{
			XHeader,
			PetList
		},
		methods:{
			loadInfo(){
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
		    }
		},
		created(){
			this.loadInfo()
		}
	}
</script>
<style lang='scss'>
	.minePublish{
		.pet_container{
			padding-top: 1.173333rem;
			padding-bottom: 10px;
		}
	}
</style>