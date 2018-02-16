<template>
	<div id="home">
		<titlle :titleval="titleVal" :issetup="isSetup"></titlle>
		<div class="compon">
			<div class="contW">
				<ul>
					<li>
						<div class="lCont">导入本地书</div>
						<div class="rCont"><i class="el-icon-arrow-right"></i></div>
					</li>
					<li>
						<div class="lCont">从电脑传书</div>
						<div class="rCont"><i class="el-icon-arrow-right"></i></div>
					</li>
					<li>
						<div class="lCont">书架排序方式</div>
						<div class="rCont">按最近添加<i class="el-icon-arrow-right"></i></div>
					</li>
					<li>
						<div class="lCont">书架显示模式</div>
						<div class="rCont">列表<i class="el-icon-arrow-right"></i></div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	import Titlle from '@/components/title'
	export default{
		name:'home',
		components:{Titlle},	
		data(){
			return{
				titleVal:"设置",
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

<style lang="scss"scoped>
	li{
		list-style:none
	}
	#home{
		min-height: 100vh;
		background:#eee;
		.login{
			.contW{
				padding:20px 0;
				div{
					display: inline-block;
					vertical-align: middle;
					&:nth-child(1){
						font-size:0;
						img{
							border-radius: 50%;
							max-width: 50px;
						}
					}
					&:nth-child(2){
						margin-left:9px;
						p:nth-child(1){
							padding-bottom: 3px;
						}
						p:nth-child(2){
							font-size:12px;
							color:#8b8686;
						}
					}
				}				
			}
		}
		.compon{
			margin:10px 0;
			background:#fff;
			.contW{
				width:90%;
				margin:auto;
				position:relative;
				
				border-top:1px solid #eee;
				li{
					border-top:1px solid #eee;
					padding:9px 0;
					&:nth-child(1){
						border:none
					}
					div{
						display:inline-block;
						font-size: 14px;
    					font-family: sans-serif;
						&:nth-child(2){
							position:absolute;
							right:0px;
							font-size: 13px;
    						font-family: sans-serif;
    						color:#8b8686;
    						i{
    							margin-left:2px
    						}
    						.point{
    							width: 5px;
							    height: 5px;
							    background: red;
							    display: inline-block;
							    border-radius: 50%;
							    right: 3px;
							    margin-right: 3px;
    						}
						}
					}
				}
			}
		}
	}
	
</style>