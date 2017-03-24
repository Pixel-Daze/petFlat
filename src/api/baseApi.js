// 项目相关api
import Vue from 'vue'
import axios from 'axios'
import {
	API_ROOT
} from '../config'

// 获取协议信息
export function getProtocolInfo(){
	return new Promise((resolve,reject) => {
		axios({
			method:'get',
			url:'./static/json/protocol.json'
		}).then((resp) =>{
			resolve(resp)
		},reject)
	})
}