<template>
	<div id="seach">
		<titlle :titleval="titleVal" :issetup="isSetup"></titlle>
		<div class="seachInputW">
			 <div class="seachCont">
			 	<el-input placeholder="请输入内容" v-model="input5" class="input-with-select" clearable>
    		 		<el-button slot="append" icon="el-icon-search"></el-button>
  			 	</el-input>
			 </div>
		</div>
	</div>
</template>

<script>
	import Titlle from '@/components/title'
	export default{
		name:'seach',
		components:{Titlle},	
		data(){
			return{
				titleVal:"搜索",
				isSetup:false
			}
		},
		methods:{
			back(){
				history.go(-1)
			}
		}
	}
</script>

<style scoped>
	.seachInputW{
		padding:12px 0px;
		background:#eee;
	}
	.seachCont{
		width:90%;
		
		margin:auto;
		font-size: 0px;
		
	}
	
</style>