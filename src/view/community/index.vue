<template>
	<div id="community">
		<div class="talkContw">
			<div class="talkCont">
				<div class="autorInfo">
					<img src="../../assets/img/shelf.jpg" alt="" />
					<i>中国No.1</i>
				</div>
				<div class="talkDetail">
					<p>大婚当天，她在郊外醒来，衣衫褴褛，在众人的鄙夷下，一步一个血印踏入</p>
					<div>
						<div>
							<img src="../../assets/img/bookfr.jpg" alt="" />
						</div>
						<div>
							<img src="../../assets/img/bookfr.jpg" alt="" />
						</div>
						<div>
							<img src="../../assets/img/bookfr.jpg" alt="" />
						</div>
					</div>
				</div>
				<div class="talkInfo">
					<i class="read">1007阅读</i>
					<div class="rUp">
						<i class="icon-me-message r"></i>1
						<i class="icon-me-praise r"></i>2
					</div>
				</div>
			</div>
		</div>
		<div class="talkContw">
			<div class="talkCont">
				<div class="autorInfo">
					<img src="../../assets/img/shelf.jpg" alt="" />
					<i>中国No.1</i>
				</div>
				<div class="talkDetail">
					<p>大婚当天，她在郊外醒来，衣衫褴褛，在众人的鄙夷下，一步一个血印踏入</p>
					<div>
						<div>
							<img src="../../assets/img/bookfr.jpg" alt="" />
						</div>
						<div>
							<img src="../../assets/img/bookfr.jpg" alt="" />
						</div>
						<div>
							<img src="../../assets/img/bookfr.jpg" alt="" />
						</div>
					</div>
				</div>
				<div class="talkInfo">
					<i class="read">1007阅读</i>
					<div class="rUp">
						<i class="icon-me-message r"></i>1
						<i class="icon-me-praise r"></i>2
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style lang="scss" type="text/css" scoped="">
	i{font-style: normal;}
	#community{
		background:#eee;
		.talkContw{
			background:#fff;
			
			.talkCont{
				position: relative;
				background:#fff;
				width: 90%;
				left:0;
				right: 0px;
				margin:auto;
				padding:10px 0;
				margin-top:10px;
			}
		}
		.autorInfo{
			padding-top: 10px;
			color:#8b8686;
			img{
				border-radius:50%;
				vertical-align: middle;
				max-width: 35px;
			}
			i{
				font-style:normal;
				font-size:12px;
				color:#8b8686;
				margin-left:3px;
			}
			
		}
		.talkDetail{
			padding:10px 0 0;
			border-bottom:1px solid #eee;
			div{
				padding:5px 0;
				display: flex;
				div{
					flex:1;
					img{
						width: 91%;
					    max-height: 123px;
					    text-align: center;
					}
				}
			
			}
		}
		.talkInfo{
			margin-top:10px;
			font-size:13px;
			.read{
				vertical-align: middle;
			}
			.rUp{
				vertical-align:middle;
			}
			.r{
				font-size:18px;
				vertical-align: middle;
			}
			.icon-me-praise{
				margin-left: 10px;
			}
			div{
				display: inline-block;
				position:absolute;
				right: 10px;
			}
		}
	}
</style>