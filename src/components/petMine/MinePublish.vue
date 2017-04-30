<template>
	<div class="minePublish">
		<x-header class="vux-1px-b fix-header" :left-options="{backText: ''}" @on-click-back="back">我的发布</x-header>
		<scroller class="pet_container" lock-x scrollbar-y use-pullup @on-pullup-loading="loadData()" :pullup-config="pullup_config" ref="scroller">
				<pet-list :petList="PetList" @choosePet="choosePet" @delelePet="delelePet"></pet-list>
		</scroller>
		<!-- <div class="pet_container">
			<pet-list :petList="PetList" @choosePet="choosePet" @delelePet="delelePet"></pet-list>
		</div> -->
	</div>
</template>
<script>
	import { XHeader,Scroller} from 'vux'
	import PetList from '../petIndex/IndexComponent/PetList'
	import * as api from '../../api/baseApi'
	export default{
		data(){
			return {
				PetList:[],
				pullup_config:{
				  content: '宠物信息加载中',
				  pullUpHeight: 60,
				  height: 40,
				  autoRefresh: true,
				  downContent: 'Release To Refresh',
				  upContent: '',
				  loadingContent: '',
				  clsPrefix: 'xs-plugin-pullup-'
				},
				page:1,
				num:5
			}
		},
		components:{
			XHeader,
			PetList,
			Scroller
		},
		methods:{
			loadInfo(){
				let vm = this
				let body = {
					phone:JSON.parse(sessionStorage.getItem('user')).phone,
					page:vm.page,
					num:vm.num
				}
				api.getPetListByPhone(body).then(resp=>{
					if(resp.data.result == 0){
						vm.PetList = resp.data.data
						vm.page+=1
		    			this.$nextTick(() => {
					      this.$refs.scroller.reset({top: 0})
					    })
		    			this.$refs.scroller.donePullup()
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
		    },
		    loadData(){
				let vm = this
				let body = {
					phone:JSON.parse(sessionStorage.getItem('user')).phone,
					page:vm.page,
					num:vm.num
				}
				api.getPetListByPhone(body).then(resp=>{
		    		if(resp.data.result=='0'){
		    			resp.data.data.forEach(item=>{
		    				vm.PetList.push(item)
		    				this.$nextTick(() => {
						      this.$refs.scroller.reset()
						    })
		    				vm.$refs.scroller.donePullup()
		    			})
		    			vm.page+=1
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
	.minePublish{
		.pet_container{
			padding-top: 1.173333rem;
			padding-bottom: 10px;
		}
	}
</style>