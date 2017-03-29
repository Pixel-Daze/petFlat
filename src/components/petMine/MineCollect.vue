<template>
	<div class="mineCollect">
		<x-header class="vux-1px-b fix-header" :left-options="{backText: ''}" @on-click-back="back">我的收藏</x-header>
		<div class="pet_container">
			<pet-list :petList="PetList" @choosePet="choosePet"></pet-list>
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
							return item.phone != JSON.parse(sessionStorage.getItem('user')).phone
						})
					}
				})
			},
			choosePet(item){
		    	this.$router.push({name:'PetDetail',params:{petCode:item.PetCode}})
		    }
		},
		created(){
			this.loadInfo()
		}
	}
</script>
<style lang='scss'>
	.mineCollect{
		.pet_container{
			padding-top: 1.173333rem;
			padding-bottom: 10px;
		}
	}
</style>