<template>
	<div class="protocol">
		<x-header class="vux-1px-b fix-header" :left-options="{backText: ''}" @on-click-back="back">宠物领养平台服务条款</x-header>
		<div class="content">
			<div class="mainTitle">本协议由您和矮乐多网络共同缔结，本协议具有合同效力。</div>
			<div class="info" v-for="info in protocolInfo">
				<div class="subTitle">{{info.title}}</div>
				<div class="subInfo" v-html="info.content"></div>
			</div>
		</div>
	</div>
</template>
<script>
	import { XHeader} from 'vux'
	import * as api from '../../api/baseApi'
	export default{
		data(){
			return{
				protocolInfo:[]
			}
		},
		components:{
			XHeader
		},
		methods:{
			loadProtocol(){
				let vm = this
				api.getProtocolInfo().then(resp=>{
					if(resp.data.result == '0'){
						vm.protocolInfo = resp.data.data
						console.log(vm.protocolInfo)
					}
				})
			}
		},
		mounted(){
			this.loadProtocol()
		}
	}
</script>
<style lang='scss'>
	@import '../../../static/lib/base/config.scss';
	.protocol{
		position: relative;
		.content{
			padding: 1.173333rem 0.133333rem 0;
			color: $common-font-color;
			.mainTitle{
				padding-top: 0.133333rem;
				font-weight: bold;
			}
			.info{
				padding-top: 0.4rem;
				.subTitle{
					font-weight: bold;
				}
			}
		}
	}
</style>