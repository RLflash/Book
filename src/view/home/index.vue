<template>
	<div id="home">
		<titlle :titleval="titleVal" :issetup="isSetup"></titlle>
		<div class="compon login">
			<div class="contW">
				<div>
					<img src="../../assets/img/shelf.jpg" alt="" />
				</div>
				<div>
					<p>登陆小说书架</p>
					<p>一键同步小说书架相关信息</p>
				</div>
			</div>
		</div>
		<div class="compon">
			<div class="contW">
				<ul>
					<li>
						<div class="lCont">收支明细</div>
						<div class="rCont"><i class="el-icon-arrow-right"></i></div>
					</li>
					<li>
						<div class="lCont">我的以购</div>
						<div class="rCont">--本书<i class="el-icon-arrow-right"></i></div>
					</li>
					<li>
						<div class="lCont">我的推荐票</div>
						<div class="rCont">--张<i class="el-icon-arrow-right"></i></div>
					</li>
				</ul>
			</div>
		</div>
		<div class="compon">
			<div class="contW">
				<ul>
					<li>
						<div class="lCont">福利中心</div>
						<div class="rCont"><i class="point"></i>领书豆免费看书<i class="el-icon-arrow-right"></i></div>
					</li>
					<li>
						<div class="lCont">勋章墙</div>
						<div class="rCont"><i class="el-icon-arrow-right"></i></div>
					</li>
				</ul>
			</div>
		</div>
		<div class="compon">
			<div class="contW">
				<ul>
					<li>
						<div class="lCont">我的阅读记录</div>
						<div class="rCont"><i class="el-icon-arrow-right"></i></div>
					</li>
					<li>
						<div class="lCont">我的推书</div>
						<div class="rCont"><i class="el-icon-arrow-right"></i></div>
					</li>
					<li>
						<div class="lCont">我的书评</div>
						<div class="rCont"><i class="el-icon-arrow-right"></i></div>
					</li>
					<li>
						<div class="lCont">我的阅读喜好</div>
						<div class="rCont"><i class="el-icon-arrow-right"></i></div>
					</li>
				</ul>
			</div>
		</div>
		<div class="compon">
			<div class="contW">
				<ul>
					<li>
						<div class="lCont">问题与反馈</div>
						<div class="rCont">可以跨平台使用吗？<i class="el-icon-arrow-right"></i></div>
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
				titleVal:"我的小说",
				isSetup:true
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