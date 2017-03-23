<template>
	<div class="main_wrapper">
		<router-view></router-view>
		<tabbar v-model="selected">
    		<tabbar-item @click.native="tabChange('0')">
                <span slot='icon' class="icon iconfont icon-shouyeshouye"></span>
    			<span slot = 'label'>主页</span>
    		</tabbar-item>
    		<tabbar-item @click.native="tabChange('1')">
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
            tabChange(value){
                console.log(value)
            }
        }
	}
</script>
<style lang='scss'>
    @import '../../static/lib/base/config.scss';
	.main_wrapper{
        .weui-tabbar{
            background-color: #fff;
            .weui-tabbar__item{
                padding: 0;
            }
            .weui-tabbar__item.weui-bar__item_on .weui-tabbar__icon, .weui-tabbar__item.weui-bar__item_on .weui-tabbar__icon > i, .weui-tabbar__item.weui-bar__item_on .weui-tabbar__label{
                color: $primary-color;
            }
            .iconfont{
                font-size: 20px;
            }
        }
    }
</style>