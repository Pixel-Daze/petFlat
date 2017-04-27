// 项目相关api
import Vue from 'vue'
import axios from 'axios'
import {
	API_ROOT
} from '../config'

// 用户注册
export function signup(body){
	return new Promise((resolve,reject)=>{
		axios({
			method:'post',
			url:API_ROOT+'register',
			data:{
				phone:body.phone,
				password:body.password
			}
		}).then((resp) =>{
			resolve(resp)
		},reject)
	})
}

// 编辑用户信息
export function editUser(body){
	return new Promise((resolve,reject)=>{
		axios({
			method:'post',
			url:API_ROOT+'edit_user',
			data:{
				phone:body.phone,
				username:body.username,
				userIcon:body.userIcon,
				area:body.area,
				description:body.description
			}
		}).then((resp) =>{
			resolve(resp)
		},reject)
	})
}

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
export function getPetList(body){
	return new Promise((resolve,reject)=>{
		axios({
			method:'post',
			url:API_ROOT+'list-pets',
			data:{
				page:body.page,
				num:body.num
			}
		}).then((resp) =>{
			resolve(resp)
		},reject)
	})
}

// 查询某个用户发布的宠物列表
export function getPetListByPhone(body){
	return new Promise((resolve,reject)=>{
		axios({
			method:'post',
			url:API_ROOT+'search_pet_by_phone',
			data:{
				phone:body.phone,
				page:body.page,
				num:body.num
			}
		}).then((resp) =>{
			resolve(resp)
		},reject)
	})
}

// 查询某个用户收藏的宠物列表
export function getStarList(body){
	return new Promise((resolve,reject)=>{
		axios({
			method:'post',
			url:API_ROOT+'search_star_pets',
			data:{
				phone:body.phone
			}
		}).then((resp) =>{
			resolve(resp)
		},reject)
	})
}


// 根据petCode获取宠物详情
export function getPetDetail(body){
	return new Promise((resolve,reject)=>{
		axios({
			method:'post',
			url:API_ROOT+'search-pet',
			data:{
				PetCode:body.PetCode
			}
		}).then((resp) =>{
			resolve(resp)
		},reject)
	})
}

// 用户登录
export function signin(body) {
	return new Promise((resolve,reject)=>{
		axios({
			method:'post',
			url:API_ROOT+'login',
			data:{
				phone:body.phone,
				password:body.password
			}
		}).then((resp) =>{
			resolve(resp)
		},reject)
	})
}

// 根据用户phone获取用户信息
export function getuserInfo(body) {
	return new Promise((resolve,reject)=>{
		axios({
			method:'post',
			url:API_ROOT+'search_user',
			data:{
				phone:body.phone
			}
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
			url:API_ROOT+'add_pet',
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
			url:API_ROOT+'delete-pet',
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
			url:API_ROOT+'pet-star',
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
			method:'post',
			url:API_ROOT+'pet-is-star',
			data:{
				phone:body.phone,
				PetCode:body.PetCode
			}
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
			url:API_ROOT+'change_password',
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

