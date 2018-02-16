<template>
	<div id="seach">
		<div class="nav">
			<div class="back" @click='back'><i class="el-icon-arrow-left"></i></div>
			<div class="title">{{titleval}}</div>
			<div class="rightIcon" v-if="issetup"><router-link to="/setting"><i class="icon-me-setup"></i></router-link></div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'seach',
		data(){
			return{}
		},
		props:["titleval","issetup"],

//		props:{
//			titleval:String
//		},
		methods:{
			back(){
				history.go(-1)
			}
		}
	}
</script>

<style scoped>
	#seach{
		background:#fff;
	}
	.nav{
		height:39px;
		line-height: 39px;
		text-align: center;
		border-bottom:1px solid #eee;
	}
	.back{
		width:39px;
		position: absolute;
	}
	.rightIcon{
		
		width: 39px;
	    position: absolute;
	    top: 0px;
	    right: 0px;
	}
	
</style>