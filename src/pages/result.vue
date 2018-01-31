<template>
	<div class="result">
		<mt-header title="搜索" fixed>
		  <router-link to="/" slot="left">
		  	 <mt-button icon="back"></mt-button>
		  </router-link>
		</mt-header>
		<div class="main">
			<div class="r_box">
			  	<input type="text" placeholder="搜索">
			  	<i class="mintui mintui-search"></i>
			  	<i class="mintui mintui-field-error"></i>
			</div>
			<div class="content">
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
</template>
<script>
	export default{
		data(){
			return{};
		}
	}
</script>
<style lang="less" scoped>
	.result{
        .mint-header{
			background-color: #ed1c23;
			height: 110rem/32;
		}
		.main{
			margin-top: 110rem/32;
		    .r_box{
             background-color: #c9c9c9;
             padding:20rem/32;
             position: relative;
			  input{
				width: 100%;
				height:70rem/32;
				box-sizing: border-box;
				border:0;
				color:#666;
				background-color: #fff;
				border-radius: 20rem/32;
				padding:10rem/32 20rem/32 10rem/32 60rem/32;			 }
		   }
		  i.mintui-search{
		  	position: absolute;
		  	left:30rem/32;
		  	top:30%;
		  }
		  i.mintui-field-error{
		  	position: absolute;
		  	right:30rem/32;
		  	top:30%;
		  }
		  .content{
		  	margin-top: 20rem/32;
	      	.box{
	      		border-bottom: 1px solid rgba(221, 221, 221, 0.6);
	      		>a{
      			color:#222;
      			display:block;
      			padding: 30rem/32 20rem/32;
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
	}
</style>