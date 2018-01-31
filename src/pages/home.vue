<template>
	<div class="home">
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
		<div class="main">
			<div class="swiper-box">
				<mt-swipe :auto="4000">
	                  <mt-swipe-item class="item">
	                  	<img src="../assets/images/swiper01.png" alt="">
	                  </mt-swipe-item>
					  <mt-swipe-item>
					  	<img src="../assets/images/swiper01.png" alt="">
					  </mt-swipe-item>
					  <mt-swipe-item>
					  	<img src="../assets/images/swiper01.png" alt="">
					  </mt-swipe-item>
                </mt-swipe>
			</div>
			<nav class="nav">
				<div class="nav-box clearfix">
					<ul class="clearfix">
						<li @click="changTab(1,'tab-container1')" :class="{'cur':curIdx==1}">推荐</li>
						<li @click="changTab(2,'tab-container2')" :class="{'cur':curIdx==2}">视频</li>
						<li @click="changTab(3,'tab-container3')" :class="{'cur':curIdx==3}">热点</li>
						<li>社会</li>
						<li>娱乐</li>
						<li>军事</li>
						<li>科技</li>
						<li>汽车</li>
						<li>体育</li>
						<li>财经</li>
					</ul>
				</div>
				<div class="mask">
					<router-link to="/category">
					+
				    </router-link>
				</div>
			</nav>
			<div class="content">
				<mt-tab-container v-model="active" swipeable>
				  <mt-tab-container-item id="tab-container1">
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
				  </mt-tab-container-item>
				  <mt-tab-container-item id="tab-container2">
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
				  </mt-tab-container-item>
				  <mt-tab-container-item id="tab-container3">
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
				  </mt-tab-container-item>
				</mt-tab-container>
			</div>
			
		</div>
	</div>
</template>
<script>
	export default{
		name:'home',
        data(){
          return {
          	active:'tab-container1',
          	curIdx: 1
          };
      },
      methods:{
      	changTab(idx,tabId){
          this.curIdx = idx;
          this.active = tabId;
       }
      }
      
	};
</script>
<style lang='less' scoped>
	.home{
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
      .main{
      	.swiper-box{
	      	margin-top: 110rem/32;
	      	height:400rem/32;	
	      	img{
	      		width:100%;
	      		height:100%;
	      	}
      	}
      	.nav{
      		background-color: #f4f5f6;
      		position: relative;
      	    .nav-box{
      	    	width: 100%;
      	    	overflow-x:scroll;
      	    	ul{
                   width:150%;
      	    		li{
      	    			float:left;
      	    			line-height: 140rem/32;
      	    			padding:0 20rem/32;
      	    			font-size: 50rem/32;
      	    		}
      	    		.cur{
      	    			font-size: 60rem/32;
      	    			color:#f85959;
      	    			}
      	    	}
      	    }
      	    .mask{
      	    	height:100%;
      	    	text-align: center;
      	    	position: absolute;
      	    	top:0;
      	    	right: 0;
      	    	font-size: 85rem/32;
      	    	padding: 0 30rem/32;
      	    	background-color: #f4f5f6;
      	    	box-shadow: -8rem/32 0 5rem/32 #888888;
      	    	a{
      	    		color: #f85959;
      	    	}
      	    }
      	}
      }
      .content{
      	.mint-tab-container-item{
      		padding: 0 20rem/32;
      		box-sizing: border-box;
      	}
      	.box{
      		border-bottom: 1px solid rgba(221, 221, 221, 0.6);
      		>a{
      			color:#222;
      			display:block;
      			// padding: 30rem/32 20rem/32;
      			padding: 30rem/32 0;
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
      			margin-top: 20rem/32;
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
</style>
