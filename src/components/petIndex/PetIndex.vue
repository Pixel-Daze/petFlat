<template>
	<div class="petIndex">
		<index-header></index-header>
		<div class="pet_container">
			<search class="pet_search" @result-click="resultClick" @on-change="getResult" :results="results" v-model="value" position="absolute" auto-scroll-to-top top="0px" @on-focus="onFocus" @on-cancel="onCancel" :class="searchkey"></search>
		</div>
		
	</div>
</template>
<script>
	import { Search } from 'vux'
	import IndexHeader from './IndexComponent/IndexHeader'
	export default {
		data(){
			return {
				results: [],
				value: '搜索宠物',
				searchkey:{
					'pet_search_focus':false
				}
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
		    }
		},
		components:{
			Search,
			IndexHeader
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
	.petIndex{
		.pet_container{
			padding-top: 1.333333rem;
			.pet_search{
				/*z-index: 10;*/
			}
			.pet_search_focus{
				z-index: 13;
			}
		}
		
	}
</style>