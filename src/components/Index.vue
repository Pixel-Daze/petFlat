<template>
	<div class="main_wrapper">
        <!-- <transition name="fold"> -->
            <router-view></router-view>
        <!-- </transition> -->
		<tabbar v-model="selected">
    		<tabbar-item @click.native="tabChange('0')">
                <span slot='icon' class="icon iconfont icon-shouyeshouye"></span>
    			<span slot = 'label'>主页</span>
    		</tabbar-item>
            <tabbar-item @click.native="tabChange('1')">
                <span slot='icon' class="icon iconfont icon-icon"></span>
                <span slot = 'label'>领养单</span>
            </tabbar-item>
    		<tabbar-item @click.native="tabChange('2')">
                <span slot='icon' class="icon iconfont icon-wo"></span>
    			<span slot = 'label'>我的</span>
    		</tabbar-item>
    	</tabbar>
	</div>
</template>
<script>
	import { Tabbar, TabbarItem } from 'vux'
	export default {
        data(){
            return {
                selected:0
            }
        },
  		components: {
    		Tabbar,
    		TabbarItem
  		},
        methods:{
            loadInfo(){
                let vm = this
                //获取sessionStorage中的index,选择路由
                if(vm.getMsg('Index','path')){
                    vm.selected = parseInt(vm.getMsg('Index','path'))
                }
            },
            tabChange(value){
                let index = parseInt(value),path=['PetIndex','PetOrder','PetMine'],vm = this
                //保存已选择index
                vm.setMsg('Index','path',value)
                //判断路由是否需要跳转
                if(vm.selected != index){
                    vm.$router.push({name:path[index]})
                }
            }
        },
        created(){
            this.loadInfo()
        }
	}
</script>
<style lang='scss'>
    @import '../../static/lib/base/config.scss';
	.main_wrapper{
        height: 100%;
        .weui-tabbar{
            background-color: #fff;
            position: fixed;
            a:hover {
                text-decoration: none;
            }
            .weui-tabbar__item{
                color: rgb(103,102,102);
            }
            .weui-tabbar__label{
                 color: rgb(103,102,102);
                 font-size: 0.32rem;
            }
            .weui-tabbar__item.weui-bar__item_on .weui-tabbar__icon, .weui-tabbar__item.weui-bar__item_on .weui-tabbar__icon > i, .weui-tabbar__item.weui-bar__item_on .weui-tabbar__label{
                color: $primary-color;
            }
            .iconfont{
                font-size: 22px;
            }
        }

        .fold-enter-active {
          animation-name: fold-in;
          animation-duration: .5s;
        }
        .fold-leave-active {
          animation-name: fold-out;
          animation-duration: .5s;
        }
        @keyframes fold-in {
          0% {
            transform: translate3d(0, 100%, 0);
          }
          50% {
            transform: translate3d(0, 50%, 0);
          }
          100% {
            transform: translate3d(0, 0, 0);
          }
        }
        @keyframes fold-out {
          0% {
            transform: translate3d(0, 0, 0);
          }
          50% {
            transform: translate3d(0, 50%, 0);
          }
          100% {
            transform: translate3d(0, 100%, 0);
          }
        }
    }
</style>