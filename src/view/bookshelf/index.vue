<template>
	<div id="bookStore">
	<!--	<top-tab></top-tab>-->
		<div class="types">
			<div class="typesCont">
				<div class="bookDetail">
					<div class="detail">
						<div class="bookPhoto">
							<img src="../../assets/img/bookfr.jpg" alt="" />
							<i class="updateNum">1</i>
						</div>
						<div class="bookData">
							<p class="bookName">本草纲目</p>
							<p class="bookNum">完结：共33章</p>
							<p class="currentPage">已读：第2章</p>
							<p class="talkNum">18书友讨论</p>
						</div>
					</div>
					<div class="talk">
						<i class="icon-me-taolun"></i>
						<p>讨论</p>
					</div>
				</div>
				<div class="bookDetail">
					<div class="detail">
						<div class="bookPhoto">
							<img src="../../assets/img/bookfr.jpg" alt="" />
						</div>
						<div class="bookData">
							<p class="bookName">本草纲目</p>
							<p class="bookNum">完结：共33章</p>
							<p class="currentPage">已读：第2章</p>
							<p class="talkNum">18书友讨论</p>
						</div>
					</div>
					<div class="talk">
						<i class="icon-me-taolun"></i>
						<p>讨论</p>
					</div>
				</div>
				<div class="bookDetail">
					<div class="detail">
						<div class="bookPhoto">
							<img src="../../assets/img/bookfr.jpg" alt="" />
							<i class="updateNum">1</i>
						</div>
						<div class="bookData">
							<p class="bookName">本草纲目</p>
							<p class="bookNum">完结：共33章</p>
							<p class="currentPage">已读：第2章</p>
							<p class="talkNum">18书友讨论</p>
						</div>
					</div>
					<div class="talk">
						<i class="icon-me-taolun"></i>
						<p>讨论</p>
					</div>
				</div>
				<div class="bookDetail">
					<div class="detail">
						<div class="bookPhoto">
							<img src="../../assets/img/bookfr.jpg" alt="" />
						</div>
						<div class="bookData">
							<p class="bookName">本草纲目</p>
							<p class="bookNum">完结：共33章</p>
							<p class="currentPage">已读：第2章</p>
							<p class="talkNum">18书友讨论</p>
						</div>
					</div>
					<div class="talk">
						<i class="icon-me-taolun"></i>
						<p>讨论</p>
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
	.talk{text-align: center;}
	.icon-me-taolun{
		font-size:30px;
	}
	#bookStore{
		width:90%;
		left:0;
		right:0;
		margin:0 auto;
	}
	.bookPhoto{
		width:80px
	}
	.bookPhoto img{
		width:100%;
	}
	.bookData{
		margin-left:5px
	}
	.bookDetail{
		position:relative;
		padding:20px 0;
		border-bottom:1px solid #ddd8d8;
	}
	.detail{
		min-width: calc(100% - 62px);
	}
	.bookDetail>div{
		display: inline-block;
		vertical-align: middle;
	}
	.bookDetail>div:nth-child(1)>div{
		display: inline-block;
		vertical-align: middle;
	}
	.bookName{
		font-size:17px;
		margin:11px 0;
		margin-top: 0px;
	}
	
	
	.bookNum,.currentPage,.talkNum{
		margin:3px 0;
		font-size:13px;
		color:#8b8686;
	}
	.updateNum{
		position: absolute;
	    top: 12px;
	    left: 70px;
	    background: red;
	    border-radius: 50%;
	    width: 20px;
	    height: 20px;
	    font-style: normal;
	    text-align: center;
	    line-height: 20px;
	    color: #fff;
	    font-size: 12px;
	}
</style>