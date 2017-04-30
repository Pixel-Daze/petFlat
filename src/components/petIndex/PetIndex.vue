<template>
	<div class="petIndex">
		<index-header :user="user" :auth="auth"></index-header>
		<div class="pet_container">
			<search class="pet_search" @result-click="resultClick" placeholder="搜索宠物" :results="results" cancel-text="搜索" v-model="value" position="absolute" auto-scroll-to-top top="0px" @on-focus="onFocus" @on-cancel="getPetListByWord" :class="searchkey"></search>
			<!-- <div class="pet-list"> -->
				<scroller lock-x scrollbar-y height="-128" use-pullup @on-pullup-loading="loadData()" :pullup-config="pullup_config" ref="scroller">
					<pet-list :petList="PetList" @choosePet="choosePet" @delelePet="delelePet"></pet-list>
					
				</scroller>
			<!-- </div> -->
			
		</div>
		<div class="bottom"></div>
	</div>
</template>
<script>
	import { Search,Scroller } from 'vux'
	import {mapGetters} from 'vuex'
	import IndexHeader from './IndexComponent/IndexHeader'
	import PetList from './IndexComponent/PetList'
	import * as api from '../../api/baseApi'
	export default {
		data(){
			return {
				results: [],
				value: '',
				searchkey:{
					'pet_search_focus':false
				},
				PetList:[],
				user:{},
				auth:false,
				pullup_config:{
				  content: '宠物信息加载中',
				  pullUpHeight: 60,
				  height: 40,
				  autoRefresh: false,
				  downContent: 'Release To Refresh',
				  upContent: '',
				  loadingContent: '',
				  clsPrefix: 'xs-plugin-pullup-'
				},
				page:1,
				num:5,
				iskeyWord:false //是否根据关键词搜索
			}
		},
		methods: {
		    resultClick (item) {
		      window.alert('you click the result item: ' + JSON.stringify(item))
		    },
		    
		    onFocus () {
		      this.searchkey['pet_search_focus'] = true
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
		    loadInfo(){
		    	this.getUser()
		    	this.getIndexList()
		    },
		    getPetListByWord(){
		    	let vm = this
		    	vm.page = 1
		    	vm.iskeyWord = true
		    	let body = {
		    		word:vm.value,
		    		page:vm.page,
		    		num:vm.num
		    	}
		    	api.getPetListBykey(body).then(resp=>{
		    		if(resp.data.result=='0'){
		    			vm.PetList = resp.data.data
		    			vm.page+=1
		    			this.$nextTick(() => {
					      this.$refs.scroller.reset({top: 0})
					    })
		    			this.$refs.scroller.donePullup()
		    		}
		    	})
		    },
		    getIndexList(){
		    	let vm = this
		    	let body = {
		    		page:vm.page,
		    		num:vm.num
		    	}
		    	vm.iskeyWord = false
		    	api.getPetList(body).then(resp=>{
		    		if(resp.data.result=='0'){
		    			vm.PetList = resp.data.data
		    			vm.page+=1
		    			this.$nextTick(() => {
					      this.$refs.scroller.reset({top: 0})
					    })
		    			this.$refs.scroller.donePullup()
		    		}
		    	})
		    },
		    getUser(){
				let vm = this
				if(vm.isSignIn()){
					vm.user = JSON.parse(sessionStorage.getItem('user'))
					vm.auth = true
				}else{
					vm.auth = false
				}
			},
			// todo准备两种模式之间切换
			loadData(){
				let vm = this
				if(vm.iskeyWord){
					
					vm.getmoreDataByKey()
				}else{
					vm.getmoreData()
				}
				
			},
			getmoreData(){
				let vm = this
				let body = {
		    		page:vm.page,
		    		num:vm.num
		    	}
				api.getPetList(body).then(resp=>{
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
			},
			getmoreDataByKey(){
				let vm = this
				let body = {
					word:vm.value,
		    		page:vm.page,
		    		num:vm.num
		    	}
				api.getPetListBykey(body).then(resp=>{
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
		components:{
			Search,
			IndexHeader,
			PetList,
			Scroller 
		},
		computed:{
			...mapGetters([
				'activeIndexPetList'
			])
		},
		mounted(){
			this.$nextTick(() => {
		      this.$refs.scroller.reset({top: 0})
		    })
		},
		created(){
			this.loadInfo()
		}
	}
</script>
<style lang='scss'>
	@import '../../../static/lib/base/config.scss';
	.petIndex{
		.pet_container{
			padding-top: 1.333333rem;
			padding-bottom: 63px;
			.weui-search-bar{
				.weui-search-bar__cancel-btn{
					color: $primary-color;
				}
			}
			.pet_search{
				/*z-index: 10;*/
			}
			.pet_search_focus{
				z-index: 13;
			}
			.pet-list{
				height: calc( 100% - 107px );
				overflow: hidden;
			}
		}
		.bottom{
			height: 63px;
			width: 100%;
		}
		
	}
</style>