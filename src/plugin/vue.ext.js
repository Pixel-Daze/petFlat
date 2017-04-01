// vue自定义插件模块
export default{
	install(Vue){
		// 存储错误信息格式:{"bindcard":{"bindError":"验证码错误"}}
        // 规则：如果没有则创建，有就更新
        Vue.prototype.setMsg=(url,name,msg)=>{
            if(sessionStorage.getItem(url) !== null){
                let Msg = JSON.parse(sessionStorage.getItem(url))
                Msg[name] = msg
                sessionStorage.setItem(url,JSON.stringify(Msg))
            }else{
                let Msg = {}
                Msg[name] = msg
                sessionStorage.setItem(url,JSON.stringify(Msg))
            }
        }
        // 获取错误信息
        Vue.prototype.getMsg=(url,name)=>{
            if(sessionStorage.getItem(url) !== null){
                let Msg = JSON.parse(sessionStorage.getItem(url))
                return Msg[name]
            }else{
                return null;
            }
        },
        // 全局返回函数
        Vue.prototype.back=()=>{
            history.back()
        }
        //检查是否登陆
        Vue.prototype.isSignIn=()=>{
            if(sessionStorage.getItem('user')!=null){
                return true
            }else{
                return false
            }
        }

	}
}