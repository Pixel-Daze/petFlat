<template>
	<div class="mineCollect">
		<x-header class="vux-1px-b fix-header" :left-options="{backText: ''}" @on-click-back="back">我的收藏</x-header>
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
				let body = {
					phone:JSON.parse(sessionStorage.getItem('user')).phone,
				}
				api.getStarList(body).then(resp=>{
					if(resp.data.result == 0){
						vm.PetList = resp.data.data
					}
				})
			},
			choosePet(item){
		    	this.$router.push({name:'PetDetail',params:{petCode:item.PetCode}})
		    },
		    delelePet(item){
		    	let vm = this
		    	vm.$vux.confirm.show({
        		  	content: '确定删除此条宠物信息吗',
				  	onCancel () {
				  	},
				  	onConfirm () {
				  		let body={
				  			PetCode:item.PetCode
				  		}
				  		api.delelePet(body).then(resp=>{
				  			if(resp.data.result == 0){
				  				vm.$vux.toast.show({
									text: '删除成功',
									width:'9em',
									type: 'text'
								})
								vm.page = 1
								vm.getIndexList()
				  			}
				  		})
				  	}
				})
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