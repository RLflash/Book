<template>
	<div id="container">
		<div class="topnav">
			<div><router-link to="/home"><i class="icon-me-guanyanren"></i></router-link></div>
			<!--<el-tabs v-model="activeName">
			    <el-tab-pane label="社区" name="first"><router-link to="">社区</router-link><</el-tab-pane>
			    <el-tab-pane label="书架" name="second"><router-link to='/bookshelf'>书架</router-link></el-tab-pane>
			    <el-tab-pane label="书城" name="third"><router-link to='/'>书城</router-link></el-tab-pane>		  
	  		</el-tabs>-->
			<div><router-link to="/community">社区</router-link></div>
			<div><router-link to="/bookshelf">书架</router-link></div>
			<div><router-link to='/'>书城</router-link></div>
			<div><router-link to='/seach'><i class="el-icon-search"></i></router-link></div>
		</div>
		<!--<transition name="slide-left">-->
	      <keep-alive>
	        	<router-view class="child-view"></router-view>
	      </keep-alive>
    	<!--</transition>-->
	</div>
	
	
	
</template>

<script>
	export default{
		name:'toptab',
		data() {
		    return {
		        activeName: 'third'
		    }
    	}
	}
</script>

<style scoped>
	
	.topnav{
		display: flex;
		
		text-align: center;
		height:39px;
		line-height:39px;
		border-bottom:1px solid #eee;
	}
	.topnav>div{
		flex: 1;
	}
	.topnav a{
		color:#000;
		text-decoration:none;
	}
	.el-tabs{flex:3 !important}
	
	/*a.router-link-active {
  color: #f66;
}*/
.router-link-exact-active{
	color: #f66 !important;
}
/*li.router-link-active a {
  color: #f66;
}*/
.child-view {
	
		  position: absolute;
		  width:100%;
		  transition: all .3s cubic-bezier(.55,0,.1,1);
	}
	/*.slide-left-enter, .slide-right-leave-active {
		  opacity: 0;
		  -webkit-transform: translate(0px, 0);
		  transform: translate(0px, 0);
	}
	.slide-left-leave-active, .slide-right-enter {
		  opacity: 0;
		  -webkit-transform: translate(-50%, 0);
		  transform: translate(-50%, 0);
	}*/
</style>