<template>
	<div class="petIndex">
		<index-header :user="user" :auth="auth"></index-header>
		<div class="pet_container">
			<search class="pet_search" @result-click="resultClick" @on-change="getResult" :results="results" v-model="value" position="absolute" auto-scroll-to-top top="0px" @on-focus="onFocus" @on-cancel="onCancel" :class="searchkey"></search>
			<pet-list :petList="PetList" @choosePet="choosePet"></pet-list>
		</div>
		
	</div>
</template>
<script>
	import { Search } from 'vux'
	import {mapGetters} from 'vuex'
	import IndexHeader from './IndexComponent/IndexHeader'
	import PetList from './IndexComponent/PetList'
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
				auth:false
			}
		},
		methods: {
		    resultClick (item) {
		      window.alert('you click the result item: ' + JSON.stringify(item))
		    },
		    getResult (val) {
		      this.results = val ? getResult(this.value) : []
		    },
		    onFocus () {
		      this.searchkey['pet_search_focus'] = true
		    },
		    onCancel () {
		      this.searchkey['pet_search_focus'] = false
		    },
		    choosePet(item){
		    	console.log(item)
		    },
		    loadInfo(){
		    	this.getUser()
		    	this.getIndexList()
		    },
		    getIndexList(){
		    	let vm = this,petList = vm.$store.getters.activeIndexPetList
		    	if(petList.length==0){
		    		vm.$store.dispatch('FETCH_INDEX_PETLIST').then(()=>{
		    			petList = vm.$store.getters.activeIndexPetList
		    			vm.PetList = petList
		    		})
		    	}else{
		    		vm.PetList = petList
		    	}
		    },
		    getUser(){
				let vm = this
				if(vm.isSignIn()){
					vm.user = JSON.parse(sessionStorage.getItem('user'))
					vm.auth = true
				}else{
					vm.auth = false
				}
			}
		},
		components:{
			Search,
			IndexHeader,
			PetList
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
	function getResult (val) {
	  let rs = []
	  for (let i = 0; i < 8; i++) {
	    rs.push({
	      title: `${val} result: ${i + 1} `,
	      other: i
	    })
	  }
	  return rs
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