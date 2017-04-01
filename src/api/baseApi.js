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

// 获取宠物信息列表
export function getPetList(){
	return new Promise((resolve,reject)=>{
		axios({
			method:'get',
			url:'../static/json/petlist.json'
		}).then((resp) =>{
			resolve(resp)
		},reject)
	})
}

// 根据petCode获取宠物详情
export function getPetDetail(body){
	return new Promise((resolve,reject)=>{
		axios({
			method:'get',
			url:'../static/json/petDetail.json'
		}).then((resp) =>{
			resolve(resp)
		},reject)
	})
}

// 用户登录
export function signin(body) {
	return new Promise((resolve,reject)=>{
		axios({
			method:'get',
			url:'../static/json/userInfo.json'
		}).then((resp) =>{
			resolve(resp)
		},reject)
	})
}

// 根据用户phone获取用户信息
export function getuserInfo(body) {
	return new Promise((resolve,reject)=>{
		axios({
			method:'get',
			url:'../static/json/userInfo.json'
		}).then((resp) =>{
			resolve(resp)
		},reject)
	})
}

// 新增宠物
export function addPet(body){
	return new Promise((resolve,reject)=>{
		axios({
			method:'post',
			url:'../static/json/userInfo.json',
			data:{
				PetName:body.PetName,
				PetType:body.PetType,
				PetSex:body.PetSex,
				PetOld:body.PetOld,
				PetSter:body.PetSter,
				PetImmune:body.PetImmune,
				PetFeature:body.PetFeature,
				PetDescription:body.PetDescription,
				ImgUrl:body.ImgUrl,
				ImgList:body.ImgList,
				area:body.area,
				phone:body.phone
			}
		}).then((resp) =>{
			resolve(resp)
		},reject)
	})
}

//删除宠物
export function delelePet(body){
	return new Promise((resolve,reject)=>{
		axios({
			method:'post',
			url:'../static/json/userInfo.json',
			data:{
				PetCode:body.PetCode
			}
		}).then((resp) =>{
			resolve(resp)
		},reject)
	})
}

// 收藏/移除收藏
export function starPet(body){
	return new Promise((resolve,reject)=>{
		axios({
			method:'post',
			url:'../static/json/userInfo.json',
			data:{
				"phone":body.phone,
    			"PetCode":body.PetCode,
    			"star":body.star
			}
		}).then((resp) =>{
			resolve(resp)
		},reject)
	})
}

//查询某个用户是否收藏过某个宠物
export function findStar(body){
	return new Promise((resolve,reject)=>{
		axios({
			method:'get',
			url:'../static/json/userInfo.json'
		}).then((resp) =>{
			resolve(resp)
		},reject)
	})
}

//修改密码接口
export function modifyPwd(body){
	return new Promise((resolve,reject)=>{
		axios({
			method:'post',
			url:'../static/json/userInfo.json',
			data:{
				oldpwd:body.oldpwd,
				newpwd:body.newpwd,
				phone:body.phone
			}
		}).then((resp) =>{
			resolve(resp)
		},reject)
	})
}

