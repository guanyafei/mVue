<template>
	<div class="collection">
		<mt-header title="收藏" fixed>
		  <router-link to="/personal" slot="left">
		  	 <mt-button icon="back"></mt-button>
		  </router-link>
		  <router-link to="" slot="right">
		  	 <mt-button :style="{display:editBtnStyle}" @click="edit" >编辑</mt-button>
		  	 <mt-button :style="{display: cancelStyle}" @click="cancel">取消</mt-button>
		  </router-link>
		</mt-header>
		<div class="main">
			<div class="content">
				<section class="no-img-box box">
				    <input type="checkbox" :style="{display: checkboxStyle}" @click="addNews">
				    <router-link to="/detail" :style="{paddingLeft:itemStyle+'rem'}">
					<h3>时隔一年,习近平达沃斯演讲更显历史穿透力</h3>
					<div class="box-footer">
						<span>人民网</span>
						<span>评论&nbsp;667</span>
						<span>01-25</span>
					</div>
				   </router-link>
				</section>
				<section class="one-img-box box">
				    <input type="checkbox" :style="{display: checkboxStyle}" @click="addNews">
				    <router-link to="/detail" :style="{paddingLeft:itemStyle+'rem'}">	
					<div class="box-top clearfix">
					    <div class="box-left ">
						  <h3>如何侧方位停车、斜方位停车，超实用倒车停车技能 非常值得收藏</h3>
						  <div class="box-footer">
							<span>人民网</span>
							<span>评论&nbsp;667</span>
							<span>01-25</span>
						  </div>
					    </div>
						<div class="box-right">
							<img src="../assets/images/middleImg0.png" alt="">
						</div>
					</div>
				   </router-link>
				</section>
				<section class="three-img-box box">
				    <input type="checkbox" :style="{display: checkboxStyle}" @click="addNews">
				    <router-link to="/detail" :style="{paddingLeft:itemStyle+'rem'}">
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
					</div>
				  </router-link>
				</section>
				<section class="video-img-box box">
				    <input type="checkbox" :style="{display: checkboxStyle}" @click="addNews">
				    <router-link to="/detail" :style="{paddingLeft:itemStyle+'rem'}">
					<div class="box-top clearfix">
					    <div class="box-left ">
						  <h3>如何侧方位停车、斜方位停车，超实用倒车停车技能 非常值得收藏</h3>
						  <div class="box-footer">
							<span>人民网</span>
							<span>评论&nbsp;667</span>
							<span>01-25</span>
						  </div>
					    </div>
						<div class="box-right">
							<img src="../assets/images/middleImg0.png" alt="">
							<img class="play" src="../assets/images/play.png" alt="">
						</div>
					</div>
				  </router-link>
				</section>
				<section class="video-img-box box">
				    <input type="checkbox" :style="{display: checkboxStyle}" @click="addNews">
				    <router-link to="/detail" :style="{paddingLeft:itemStyle+'rem'}">
					<div class="box-top clearfix">
					    <div class="box-left ">
						  <h3>如何侧方位停车、斜方位停车，超实用倒车停车技能 非常值得收藏</h3>
						  <div class="box-footer">
							<span>人民网</span>
							<span>评论&nbsp;667</span>
							<span>01-25</span>
						  </div>
					    </div>
						<div class="box-right">
							<img src="../assets/images/middleImg0.png" alt="">
							<img class="play" src="../assets/images/play.png" alt="">
						</div>
					</div>
				  </router-link>
				</section>
				<section class="video-img-box box">
				    <input type="checkbox" :style="{display: checkboxStyle}" @click="addNews">
				    <router-link to="/detail" :style="{paddingLeft:itemStyle+'rem'}">
					<div class="box-top clearfix">
					    <div class="box-left ">
						  <h3>如何侧方位停车、斜方位停车，超实用倒车停车技能 非常值得收藏</h3>
						  <div class="box-footer">
							<span>人民网</span>
							<span>评论&nbsp;667</span>
							<span>01-25</span>
						  </div>
					    </div>
						<div class="box-right">
							<img src="../assets/images/middleImg0.png" alt="">
							<img class="play" src="../assets/images/play.png" alt="">
						</div>
					</div>
				  </router-link>
				</section>
			</div>
		</div>
		<footer :style="{display: footerStyle}">
			<router-link to="" :style="{color:count > 0 ? '#ed1c23' : '#999'}">
				删除<span class="count" >({{count}})</span>
		    </router-link>
		</footer>
	</div>
</template>
<script>
	export default{
		name:"collection",
		data(){
			return{
				checkboxStyle: 'none',  //复选框
				cancelStyle: 'none',    //取消按钮
				itemStyle: '0',         //新闻块
				footerStyle: 'none',    //删除popu
				editBtnStyle: 'inline-block',  //编辑按钮
				count: 0, // 计数 选中的新闻个数
			};
		},
		methods:{
			// 点击编辑 展示复选框 删除按钮等
			edit(){
                this.cancelStyle = "inline-block";
                this.editBtnStyle = "none";
                this.footerStyle = "block";
                this.checkboxStyle = "block";
                this.itemStyle = 80/32;
			},
			// 取消编辑
			cancel(){
				this.cancelStyle = "none";
                this.editBtnStyle = "inline-block";
                this.footerStyle = "none";
                this.checkboxStyle = "none";
                this.itemStyle = 0;
                this.count = 0;
			},
			// 计数 选中的新闻个数
			addNews(){
               this.count++;
			}
		}
	}
</script>
<style lang="less" scoped>
	.collection{
		.mint-header{
			background-color: #ed1c23;
			height: 110rem/32;
			border-bottom: 4rem/32 solid rgba(255,255,255,.5);
		}
		.main{
			margin-top: 110rem/32;
			margin-bottom: 100rem/32;
			.content{
			  	margin-top: 20rem/32;
			  	padding: 0 20rem/32;
		      	.box{
		      		border-bottom: 1px solid rgba(221, 221, 221, 0.6);
		      		position: relative;
		      		input[type=checkbox]{
		      			width: 50rem/32;
		      			height: 50rem/32;
		      			position: absolute;
		      			left: 0;
		      			top: 50%;
		      			margin-top: -25rem/32;
		      			border-radius: 50%;
		      		}
		      		>a{
	      			color:#222;
	      			display:block;
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
		      		}
		      		.box-img{
		      			>img{
		      				width:100%;
		      				margin-top: 10rem/32 ;
		      			}
		      		}
		      	}
		      	.one-img-box,.video-img-box{
		      		.box-top{
		      			position: relative;
		      		}
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
		      			.box-footer{
		      				position: absolute;
		      				bottom: 0;
		      				left:0;
		      			}
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
		footer{
            position: fixed;
            left: 0;
            bottom: 0;
            height: 100rem/32;
            width: 100%;
            padding: 0 20rem/32;
            box-sizing: border-box;
            background-color: #f4f5f6;
            >a{
            	float: right;
            	height: 100%;
            	line-height: 100rem/32;
            	font-size: 40rem/32;
            }
		}
	}
</style>