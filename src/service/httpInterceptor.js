// httpInterceptor
import axios from 'axios';
import Vue from 'vue'
import  { AlertPlugin } from 'vux'
Vue.use(AlertPlugin)



//不拦截的请求名
const unInterceptorUrl = ['checkAndBindCard']

//不弹loading的请求名
const unLoadingUrl = ['GetProductList','GetOrderList']

// 检测请求名是否需要拦截
function checkUrl(resp){
    let arr = resp.config.url.split('/'),flag = true
    unInterceptorUrl.forEach(item=>{
        if(item === arr[arr.length-1]){
            flag = false
        }
    })
    return flag
}

function checkLoadUrl(resp){
    let arr = resp.url.split('/'),flag = true
    unLoadingUrl.forEach(item=>{
        if(item === arr[arr.length-1]){
            flag = false
        }
    })
    return flag
}


export const request = function(config){
    if(checkLoadUrl(config)){
        // Indicator.open({
        //     text: '拼命加载中...',
        //     spinnerType: 'fading-circle'
        // });
    }
    
    return config
	
}

export const response = function(response){
    if(response.data.result!==0){
        Vue.$vux.alert.show({
          title: '提示',
          content: response.data.msg
        })
    }
	// clearTimeout(loadingTimer);
 //    loadingTimer = setTimeout(()=>{
 //        Indicator.close();
 //        clearTimeout(loadingTimer);

 //    }, 300);
    return response;
    
}