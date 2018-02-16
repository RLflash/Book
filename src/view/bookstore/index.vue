<template>
	<div id="bookStore">
	<!--	<top-tab></top-tab>-->
		<el-carousel height="150px">
        	<el-carousel-item v-for="item in 4" :key="item">
        	<!--<h3>{{ item }}</h3>-->
        	</el-carousel-item>
    	</el-carousel>
    	<div class="typeTab">
    		<div>
    			<i></i>
    			<p>分类</p>
    		</div>
    		<div>
    			<i></i>
    			<p>排行</p>
    		</div>
    		<div>
    			<i></i>
    			<p>连载</p>
    		</div>
    		<div>
    			<i></i>
    			<p>完本</p>
    		</div>
    		<div>
    			<i></i>
    			<p>免费</p>
    		</div>
    	</div>
		<!--专属推荐-->
		<div class="exRecom">
			<div class="content">
				<div>
					<img src="../../assets/img/bookfr.jpg" alt="" />
					<p class="bookName">凡人修仙传</p>
					<p class="autor">忘语</p>
				</div>
				<div>
					<img src="../../assets/img/bookfr.jpg" alt="" />
					<p class="bookName">凡人修仙传</p>
					<p class="autor">忘语</p>
				</div>
				<div>
					<img src="../../assets/img/bookfr.jpg" alt="" />
					<p class="bookName">凡人修仙传</p>
					<p class="autor">忘语</p>
				</div>
				<div>
					<img src="../../assets/img/bookfr.jpg" alt="" />
					<p class="bookName">凡人修仙传</p>
					<p class="autor">忘语</p>
				</div>
			</div>
			<div class="change">
				换一换
			</div>
		</div>
		<div class="types">
			<p class="ask">点过【庄子】，还喜欢看这些吗？</p>
			<div class="typesCont">
				<div>
					<div>
						<img src="../../assets/img/bookfr.jpg" alt="" />
					</div>
					<div>
						<p class="title">本草纲目</p>
						<p class="detail">入仕如登山，步步惊心，步步艰难，且看段昱如何从一名乡政府小文书逐步登上仕途之颠，更因其复杂身世引出段段剪不断理还乱的恩怨情仇</p>
						<p class="autor">李时珍</p>
						<p class="label">
							<i>医学</i>
							<i>医学</i>
							<i>医学</i>
						</p>
					</div>
				</div>
				<div>
					<div>
						<img src="../../assets/img/bookfr.jpg" alt="" />
					</div>
					<div>
						<p class="title">本草纲目</p>
						<p class="detail">入仕如登山，步步惊心，步步艰难，且看段昱如何从一名乡政府小文书逐步登上仕途之颠，更因其复杂身世引出段段剪不断理还乱的恩怨情仇</p>
						<p class="autor">李时珍</p>
						<p class="label">
							<i>医学</i>
							<i>医学</i>
							<i>医学</i>
						</p>
					</div>
				</div>
				<div>
					<div>
						<img src="../../assets/img/bookfr.jpg" alt="" />
					</div>
					<div>
						<p class="title">本草纲目</p>
						<p class="detail">入仕如登山，步步惊心，步步艰难，且看段昱如何从一名乡政府小文书逐步登上仕途之颠，更因其复杂身世引出段段剪不断理还乱的恩怨情仇</p>
						<p class="autor">李时珍</p>
						<p class="label">
							<i>医学</i>
							<i>医学</i>
							<i>医学</i>
						</p>
					</div>
				</div>
				
			</div>
		</div>
	</div>
	
	
</template>

<script>
//	import TopTab from '@/view/toptab'
//	export default{
//		name:'bookstore',
//		components:{TopTab}
//	}
</script>

<style scoped>
	.typeTab i{
		display: block;
		width:20px;
		height: 20px;
	}
	.typeTab i{
		margin: auto;
	    width: 39px;
	    height: 30px;
	}
	.typeTab div:nth-child(1) i{
		background:url(../../assets/img/1.png);
		background-size:cover;
		margin:auto;
	}
	.typeTab div:nth-child(2) i{
		background:url(../../assets/img/2.png);
		background-size:cover;
		margin:auto;
	}
	.typeTab div:nth-child(3) i{
		background:url(../../assets/img/3.png);
		background-size:cover;
		margin:auto;
	}
	.typeTab div:nth-child(4) i{
		background:url(../../assets/img/4.png);
		background-size:cover;
		margin:auto;
	}
	.typeTab div:nth-child(5) i{
		background:url(../../assets/img/5.png);
		background-size:cover;
		margin:auto;
	}
	.types{background:#fff;margin-top:10px;padding:10px}
	.types .ask{
		font-size: 14px;
	    font-weight: 500;
	    padding-left: 8px;
	}
	.typesCont>div{
		margin:10px
	}
	.typesCont>div>div{
		display: inline-block;
	}
	.typesCont img{
		width:100%;
	}
	.typesCont>div>div{
		vertical-align: middle;
	}
	.typesCont>div>div:nth-child(1){
		width: 80px;
	}
	.typesCont>div>div:nth-child(2){
		width:calc(100% - 101px);
		padding-left: 16px;
	}
	.typesCont .title{
		font-size:15px;
		font-family: "微软雅黑";
	}
	.typesCont .detail{
		margin-top:10px;
		font-size:12px;
		color:#9f9e9e;
		font-family: "微软雅黑";
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 3;
		overflow: hidden;
	}
	.typesCont .autor,.typesCont .label{
		display:inline-block;
	}
	.typesCont .label{
		float:right;
		margin-top: 3px;
	}
	.typesCont .label>i{
		color:#9f9e9e;
		font-style: normal;
		border:1px solid #9f9e9e;
		font-size:12px;
		padding:0px 5px;
		border-radius: 3px;
	}
	.typesCont .autor{font-size:13px;color:#9f9e9e;margin-top:10px}
	#bookStore{
		background:#eee;
	}
	.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }
  .el-carousel__item:nth-child(n) {
     background:url(../../assets/img/l0.jpg);
   
  }
  
  .el-carousel__item:nth-child(2n) {
     background:url(../../assets/img/l1.jpg);
     
  }
   .el-carousel__item:nth-child(2n+1) {
     background:url(../../assets/img/l2.jpg);
    
  }
   .el-carousel__item:nth-child(2n+2) {
     background:url(../../assets/img/l3.jpg);
   
  }
  .el-carousel__item{
	 background-size:cover !important;
  }
  .typeTab{display:flex;text-align: center;background:#fff;padding:10px}
  .typeTab>div{flex:1}
  .typeTab p{
  	font-size: 15px;
    font-family: sans-serif;
  }
  .exRecom>.content{
  	display: flex;
  	padding:10px;
  }
  .exRecom{
  	background:#fff;
  	margin-top:8px
  }
  .exRecom>.content>div{
  	flex:1;
  	text-align: center;
  }
  .exRecom>.content>div>img{
  	width:80%
  }
  .exRecom p{overflow:hidden;white-space: nowrap;text-overflow: ellipsis;}
  .exRecom .bookName{font-size:13px}
  .exRecom .autor{font-size:12px;color:#a39696}
  .change{text-align: center;border-top:1px solid #eee;padding:10px}
</style>