// 全局过滤器
module.exports.install = (Vue,options) => {
	Vue.filter('toSter',(value)=>{
		if(value){
			let arr = ['未绝育','绝育']
			return arr[Number(value)]
		}
	})
	Vue.filter('toImmune',(value)=>{
		if(value){
			let arr = ['未免疫','免疫']
			return arr[Number(value)]
		}
	})
}