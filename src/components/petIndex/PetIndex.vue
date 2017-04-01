<template>
	<div class="petIndex">
		<index-header :user="user" :auth="auth"></index-header>
		<div class="pet_container">
			<search class="pet_search" @result-click="resultClick" :results="results" cancel-text="搜索" v-model="value" position="absolute" auto-scroll-to-top top="0px" @on-focus="onFocus" @on-cancel="getIndexList" :class="searchkey"></search>
			<scroller lock-x scrollbar-y use-pullup @on-pullup-loading="loadData()" :pullup-config="pullup_config" ref="scroller">
				<pet-list :petList="PetList" @choosePet="choosePet" @delelePet="delelePet"></pet-list>
				
			</scroller>
		</div>
		
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
				value: '搜索宠物',
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
				  upContent: 'Pull Up To Refresh',
				  loadingContent: 'Loading...',
				  clsPrefix: 'xs-plugin-pullup-'
				}
			}
		},
		methods: {
		    resultClick (item) {
		      window.alert('you click the result item: ' + JSON.stringify(item))
		    },
		    
		    onFocus () {
		      this.searchkey['pet_search_focus'] = true
		    },
		    onCancel () {
		      this.searchkey['pet_search_focus'] = false
		    },
		    choosePet(item){
		    	console.log(item)
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
		    },
		    loadInfo(){
		    	this.getUser()
		    	this.getIndexList()
		    },
		    getIndexList(){
		    	let vm = this
		    	api.getPetList().then(resp=>{
		    		if(resp.data.result=='0'){
		    			vm.PetList = resp.data.data
		    			this.$refs.scroller.reset({top:0})
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
				console.log('loading...')
				api.getPetList().then(resp=>{
		    		if(resp.data.result=='0'){
		    			resp.data.data.forEach(item=>{
		    				this.PetList.push(item)
		    				this.$refs.scroller.reset()
		    				this.$refs.scroller.donePullup()
		    			})
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
		}
		
	}
</style>