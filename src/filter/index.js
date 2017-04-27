// 全局过滤器
module.exports.install = (Vue,options) => {
	Vue.filter('toSter',(value)=>{
		if(value){
			return '绝育'
		}else{
			return '未绝育'
		}
	})
	Vue.filter('toImmune',(value)=>{
		if(value){
			return '免疫'
		}else{
			return '未免疫'
		}
	})
}