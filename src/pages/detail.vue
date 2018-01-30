<template>
	<div class="detail">
		<mt-header fixed>
			<router-link to="/" slot="left" class="logo">
				<img src="../assets/images/logo.png">
			</router-link>
			<router-link to="/personal" slot="right" class="avatar">
				<img src="../assets/images/avatar.png" alt="">
			</router-link>
			<router-link to="/search" slot="right" class="search">
				<img src="../assets/images/search.png" alt="">
			</router-link>
		</mt-header>
		<div class="hideBox"></div>
		<!-- <div class="video">
		   <video autoplay>
		   	  <source src="../assets/video/demo.mp4" type="video/mp4">
		   	  	您的浏览器不支持video标签！
		   </video>
		</div> -->
		<div class="main">
			<article class="article">
				<header class="article_header">
					<h1>点赞！醉酒男倒地 她在-28 ℃寒夜中坚守 20 分钟</h1>
					<div class="article_author">
						<span class="avatar"><img src="../assets/images/author.png" alt=""></span>
						<span class="author">辽沈晚报</span>
						<span class="time">1-29</span>
					</div>
				</header>
				<div class="article_content" :style="{height:articleHeight}">
					<div class="article_box">
						男子停在边石下，偶尔腿还抽动两下，是喝多了？
					-28 ℃，可别让他冻坏了！她在下班途中发现倒地男子后驾车掉头折回，打开双闪灯，俯身查看。
					发现男子眉骨出血，她立即报警。守在男子身边，直到警察联系到男子的女儿后她方才离开。
					夜风中，她冻得脸色青白，浑身打战，他是沈城最美的风景；这次 " 宝马女 " 引来的是网友们的一片赞美，称心善人美，与车无关。其实，宝马车是单位领导的，根本不是她自己的。
					昨日下午，记者辗转联系到了视频中的漂亮女子，她自称姓刘，是沈阳荣盛房地产开发公司的职工员。
					刘女士称，当天晚上在单位加班，因为太晚了，还有一个表格没有做完，赶紧回家做表格！回家途中经过沈辽路家乐福门前时看到好像有人倒在了边石下，" 我就特意减慢了车速，确认是一名男性，但这时车已经开过去了。"
					22 时 30 分左右，在沈阳最冷的冬日，马路上几乎看到其他人，一个年轻女子，她也不敢轻易下车。她犹豫了一下，但刚才男子左腿抽动的画片仍然在眼前，她停下车先给爱人拨去了电话，" 我真他怕冻死在外面，太冷了！但会不会惹上麻烦？" 丈夫告诉她，" 救人，就别想那么多，再详细看一下，需要时立即报警。"
					我就特意减慢了车速，确认是一名男性，但这时车已经开过去了。"
					22 时 30 分左右，在沈阳最冷的冬日，马路上几乎看到其他人，一个年轻女子，她也不敢轻易下车。她犹豫了一下，但刚才男子左腿抽动的画片仍然在眼前，她停下车先给爱人拨去了电话，" 我真他怕冻死在外面，太冷了！但会不会惹上麻烦？" 丈夫告诉她，" 救人，就别想那么多，再详细看一下，需要时立即报警。"
					我就特意减慢了车速，确认是一名男性，但这时车已经开过去了。"
					22 时 30 分左右，在沈阳最冷的冬日，马路上几乎看到其他人，一个年轻女子，她也不敢轻易下车。她犹豫了一下，但刚才男子左腿抽动的画片仍然在眼前，她停下车先给爱人拨去了电话，" 我真他怕冻死在外面，太冷了！但会不会惹上麻烦？" 丈夫告诉她，" 救人，就别想那么多，再详细看一下，需要时立即报警。"
					我就特意减慢了车速，确认是一名男性，但这时车已经开过去了。"
					22 时 30 分左右，在沈阳最冷的冬日，马路上几乎看到其他人，一个年轻女子，她也不敢轻易下车。她犹豫了一下，但刚才男子左腿抽动的画片仍然在眼前，她停下车先给爱人拨去了电话，" 我真他怕冻死在外面，太冷了！但会不会惹上麻烦？" 丈夫告诉她，" 救人，就别想那么多，再详细看一下，需要时立即报警。"
					</div>
				  </div>
				  <div v-if="articleMaskFlag">
					  <div class="article_unfold" @click="unfold">
						<div class="mask">展开全文</div>
					  </div>
				  </div>
			</article>
			<div class="recommend_container">
				<div class="recommendation-item">
					<h2>相关文章</h2>
                    <section class="no-img-box box">
					   <router-link to="/detail">
						<h3>时隔一年,习近平达沃斯演讲更显历史穿透力</h3>
						<div class="box-footer">
							<span>人民网</span>
							<span>评论&nbsp;667</span>
							<span>01-25</span>
							<span class="remove-box">x</span>
						</div>
					   </router-link>
					</section>
					<section class="one-img-box box">
					   <router-link to="/detail">	
						<div class="box-top clearfix">
						    <div class="box-left ">
							  <h3>如何侧方位停车、斜方位停车，超实用倒车停车技能 非常值得收藏</h3>
						    </div>
							<div class="box-right">
								<img src="../assets/images/middleImg0.png" alt="">
							</div>
						</div>
						<div class="box-footer">
							<span>人民网</span>
							<span>评论&nbsp;667</span>
							<span>01-25</span>
							<span class="remove-box">x</span>
						</div>
					   </router-link>
					</section>
					<section class="three-img-box box">
					   <router-link to="/detail">
						<h3>如何侧方位停车、斜方位停车，超实用倒车停车技能 非常值得收藏</h3>
						<div class="box-img">
							<ul class="clearfix">
								<li><img src="../assets/images/img01.png" alt=""></li>
								<li><img src="../assets/images/img01.png" alt=""></li>
								<li><img src="../assets/images/img01.png" alt=""></li>
							</ul>
						</div>
						<div class="box-footer">
							<span>人民网</span>
							<span>评论&nbsp;667</span>
							<span>01-25</span>
							<span class="remove-box">x</span>
						</div>
					  </router-link>
					</section>
					<section class="video-img-box box">
					  <router-link to="/detail">
						<div class="box-top clearfix">
						    <div class="box-left ">
							  <h3>如何侧方位停车、斜方位停车，超实用倒车停车技能 非常值得收藏</h3>
						    </div>
							<div class="box-right">
								<img src="../assets/images/middleImg0.png" alt="">
								<img class="play" src="../assets/images/play.png" alt="">
							</div>
						</div>
						<div class="box-footer">
							<span>人民网</span>
							<span>评论&nbsp;667</span>
							<span>01-25</span>
							<span class="remove-box">x</span>
						</div>
					  </router-link>
					</section>
				</div>
				<div class="recommendation-item">
					<h2>热门推荐</h2>
                    <section class="no-img-box box">
					   <router-link to="/detail">
						<h3>时隔一年,习近平达沃斯演讲更显历史穿透力</h3>
						<div class="box-footer">
							<span>人民网</span>
							<span>评论&nbsp;667</span>
							<span>01-25</span>
							<span class="remove-box">x</span>
						</div>
					   </router-link>
					</section>
					<section class="one-img-box box">
					   <router-link to="/detail">	
						<div class="box-top clearfix">
						    <div class="box-left ">
							  <h3>如何侧方位停车、斜方位停车，超实用倒车停车技能 非常值得收藏</h3>
						    </div>
							<div class="box-right">
								<img src="../assets/images/middleImg0.png" alt="">
							</div>
						</div>
						<div class="box-footer">
							<span>人民网</span>
							<span>评论&nbsp;667</span>
							<span>01-25</span>
							<span class="remove-box">x</span>
						</div>
					   </router-link>
					</section>
					<section class="three-img-box box">
					   <router-link to="/detail">
						<h3>如何侧方位停车、斜方位停车，超实用倒车停车技能 非常值得收藏</h3>
						<div class="box-img">
							<ul class="clearfix">
								<li><img src="../assets/images/img01.png" alt=""></li>
								<li><img src="../assets/images/img01.png" alt=""></li>
								<li><img src="../assets/images/img01.png" alt=""></li>
							</ul>
						</div>
						<div class="box-footer">
							<span>人民网</span>
							<span>评论&nbsp;667</span>
							<span>01-25</span>
							<span class="remove-box">x</span>
						</div>
					  </router-link>
					</section>
					<section class="video-img-box box">
					  <router-link to="/detail">
						<div class="box-top clearfix">
						    <div class="box-left ">
							  <h3>如何侧方位停车、斜方位停车，超实用倒车停车技能 非常值得收藏</h3>
						    </div>
							<div class="box-right">
								<img src="../assets/images/middleImg0.png" alt="">
								<img class="play" src="../assets/images/play.png" alt="">
							</div>
						</div>
						<div class="box-footer">
							<span>人民网</span>
							<span>评论&nbsp;667</span>
							<span>01-25</span>
							<span class="remove-box">x</span>
						</div>
					  </router-link>
					</section>
				</div>
			</div>
		</div>
		<footer class="tools">
			<router-link to="">
				<input type="text" placeholder="吐槽..." required>
			</router-link>
			<router-link to="/comment">
				评论
				<mt-badge size="small">30</mt-badge>
			</router-link>
			<router-link to="/">
				收藏
			</router-link>
			<router-link to="" @click.native="popupShow">
				分享
			</router-link>
		</footer>
		<div class="popup_panel">
			<mt-popup v-model="popupVisible" position="bottom">
			   <div class="share_tools">
			   	  <span>朋友圈</span>
			   	  <span>微信</span>
			   	  <span>QQ</span>
			   	  <span>新浪微博</span>
			   </div>
			   <div class="hide_tools" @click="popupHide">取消</div>
			</mt-popup>
		</div>
	</div>
</template>
<script>
	export default{
		name:"detail",
		data(){
			return{
				articleHeight: '',
				articleMaskFlag:true,
				popupVisible:false
			};
		},
		methods: {
          unfold(){
              this.articleMaskFlag = false;
              this.articleHeight = 'auto';
          },
          popupShow(){
              this.popupVisible = true;
          },
          popupHide(){
          	  this.popupVisible = false;
          }
		}
	}
</script>
<style lang="less" scoped>
	.detail{
	   .mint-header{
			background-color: #ed1c23;
			height: 110rem/32;
        .logo{
        	img{
        		width: 80rem/32;
        		height:80rem/32;
        	}
        }
        .avatar,.search{
        	display: inline-block;
        	img{
        		width: 80rem/32;
        		height:80rem/32;
        		border-radius: 50%;
        	}
		}
        .search{
        	margin: 0 0 0 10rem/32;
		}
      }
      .hideBox{
      	height:110rem/32;
      }
      .video{
		width: 100%;
		background-color: rgba(0,0,0,1);
		video{
			width: 100%;
			height: 600rem/32;
		}
      }
      .main{
      	margin-top: 16rem/32;
      	margin-bottom: 60rem/32;
      	padding:0 20rem/32;
      	.article{
      		position: relative;
      		.article_header{
      			font-size: 50rem/32;
      			.article_author{
      				margin-top: 20rem/32;
      				.avatar{
      					margin-right: 20rem/32;
      					img{
      						width:80rem/32;
      						height:80rem/32;
      						border-radius: 50%;
      						vertical-align: bottom;
      					}
      				}
      				.author,.time{
      					font-size: 30rem/32;
      					color: #999;
      				}
      			}
      		}
      		.article_content{
      			overflow: hidden;
      			height: 1000rem/32;
      		    margin-top: 20rem/32;
      			font-size: 40rem/32;
      		}
      		.article_unfold{
      			width: 100%;
  				position: absolute;
  				bottom:-2rem/32;
  				left:0;
      			.mask{
      				width: 100%;
      				height:200rem/32;
      				background-image: linear-gradient(-180deg, rgba(255,255,255,.8) 0, #FFFFFF 100%);
      				color: #ed1c23;
      				text-align: center;
      				line-height: 200rem/32;
      				font-size: 40rem/32;
      			}
      		}
      	}
      	.recommend_container{
      		margin: 20rem/32 0;
      		.recommendation-item{
      			margin-bottom: 40rem/32;
      			>h2{
      				margin: 40rem/32 0 10rem/32 0;
      				font-weight: 500;
      				border-left: 8rem/32 solid #ed1c23;
      				padding-left: 16rem/32;
      			}
      			.box{
	      		  border-bottom: 1px solid rgba(221, 221, 221, 0.6);
		      		>a{
	      			color:#222;
	      			display:block;
	      			padding: 18rem/32 0;
	      		  }
		      		h3{
		      		    font-size: 40rem/32;
		      		    font-weight: normal;
		      			display:-webkit-box;
		      			-webkit-box-orient:vertical; 
		      			-webkit-line-clamp:2;
		      			overflow:hidden;
		      		}
		      		.box-footer{
		      			margin-top: 10rem/32;
		      			font-size: 30rem/32;
		      			color: #999;
		      			>span:nth-of-type(2){
		      				padding: 0 15rem/32;
		      			}
		      			.remove-box{
		      				float:right;
		      				width:50rem/32;
		      				height:40rem/32;
		      				border: 1px solid rgba(221, 221, 221, 0.6);
		      				border-radius: 20rem/32;
		      				line-height: 40rem/32;
		      				text-align: center;
		      			}
		      		}
		      		.box-img{
		      			>img{
		      				width:100%;
		      				margin-top: 10rem/32 ;
		      			}
		      		}
		      	}
		      	.one-img-box,.video-img-box{
		      		.box-right{
		      			width:35%;
		      			float:left;
		      			img{
		      				width:100%;
		      			}
		      		}
		      		.box-left{
		      			width:65%;
		      			float:left;
		      			h3{
		      				display:-webkit-box;
		      			    -webkit-box-orient:vertical;
		      			    -webkit-line-clamp:4;
		      			    overflow:hidden;
		      			}
		      		}
		      	}
		      	.three-img-box{
		      		.box-img{
		      			margin-top: 10rem/32;
		      			ul{
		      				li{
		      					float:left;
		      					width:calc(100%/3);
		      					overflow: hidden;
		      					>img{
				      				margin-left: 0;
				      				width:calc(100%-2px);		      		
				      				padding-right: 2px;
				      				vertical-align: middle;
				      			}
		      				}
		      			}
		      			
		      		}
		      	}
		      	.video-img-box{
		            .box-right{
		            	position: relative;
		            	.play{
		            		position: absolute;
		            		left:50%;
		            		top:50%;
		            		margin-top: -43rem/32;
		            		margin-left: -43rem/32;
		            		width:86rem/32;
		            		height:86rem/32;
		            	}
		            }
		      	}
		      }
      		}
      	}
      	.tools{
      		display: flex;
      		flex-direction:row;
      		flex-wrap:nowrap;
      		justify-content:center;
      		align-items:center;
      		text-align: center;
      		height: 110rem/32;
      		width:100%;
      		background-color: red;
      		position: fixed;
      		bottom: 0;
      		background-color: #f4f5f6;
      		a{
      			flex:1;
      			height:100%;
      			line-height: 110rem/32;
      			color: rgba(0,0,0,.5);
      		}
      		a:nth-of-type(1){
      			flex:3;
      			input{
      				height:70rem/32;
      				padding: 0 20rem/32;
      				border-radius: 30rem/32;
                    outline: none;
                    border: 1rem/32 solid rgba(0, 0, 0, 0.5);
      			}
      		}
      		a:nth-of-type(2){
      			position: relative;
      			.mint-badge.is-size-small{
                    padding: 0 15rem/32;
                    line-height: 40rem/32;
                    position: absolute;
                    top:10%;
                    right:0;
                    background-color:rgba(0,0,0,.4);
      			}
      		}
      	}
      	.popup_panel{
      		.mint-popup.mint-popup-bottom{
      			width:100%;
      			.share_tools{
	           	  width:100%;
	           	  display: flex;
	           	  flex-direction: row;
	           	  flex-wrap: nowrap;
	           	  justify-content: center;
	           	  text-align: center;
	           	  border-bottom: 4rem/32 solid rgba(221, 221, 221, 0.6);
	           	  background-color: rgba(221, 221, 221, 0.1);
	           	  span{
	           	  	flex:1;
	           	  	height: 200rem/32;
	           	  	line-height: 200rem/32;
	           	  }
	           }
           	  .hide_tools{
           	  	height: 80rem/32;
           	  	text-align: center;
           	  	line-height: 80rem/32;
           	  }
	       }
      	}
	}
</style>