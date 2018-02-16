<template>
  <div id="app">
  <transition name="slide-left">
	      <keep-alive>
	        	<router-view class="child-view"></router-view>
	      </keep-alive>
    	</transition>
   
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*{padding:0px;margin:0px}
body{
	overflow-x: hidden;
}
a{
	text-decoration: none;
}
#app {
	
}
.child-view {
	
		position: absolute;
		  width:100%;
		  transition: all .3s cubic-bezier(.55,0,.1,1);
	}
		.slide-left-enter, .slide-right-leave-active {
		  opacity: 0;
		  -webkit-transform: translate(0px, 0);
		  transform: translate(0px, 0);
	}
	.slide-left-leave-active, .slide-right-enter {
		  opacity: 0;
		  -webkit-transform: translate(-50%, 0);
		  transform: translate(-50%, 0);
	}

</style>
