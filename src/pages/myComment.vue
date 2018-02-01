<template>
	<div class="myComment">
		<mt-header title="我的评论" fixed>
		  <router-link to="/personal" slot="left">
		  	 <mt-button icon="back"></mt-button>
		  </router-link>
		  <router-link to="/" slot="right">
		  	 <mt-button icon="more"></mt-button>
		  </router-link>
		</mt-header>
		<div class="main">
		   <section class="comment-item">
		   	  <div class="comment-author">
				<span class="avatar"><img src="../assets/images/avatar.png" alt=""></span>
				<span class="author">小马哥</span>
				<span class="time">1-29</span>
			    <span class="delBtn">
			    	<router-link to="" icon="more" @click.native="popupShow">
				  	   <mt-button icon="more"></mt-button>
				    </router-link>
			    </span>
			  </div>
			  <div class="comment-content">
			  	 666666
			  </div>
			  <div class="comment-article">
			  	<router-link to="/detail">
			  		<div class="article-img">
			  	 	 <img src="../assets/images/middleImg0.png" alt="">
				  	 </div>
				  	 <div class="article-title">
				  	 	<h2>
				  	 		如何侧方位停车、斜方位停车，超实用倒车停车技能 非常值得收藏
				  	 	</h2>
				  	 </div>
			  	</router-link>
			  </div>
		   </section>
		    <section class="comment-item">
		   	  <div class="comment-author">
				<span class="avatar"><img src="../assets/images/avatar.png" alt=""></span>
				<span class="author">小马哥</span>
				<span class="time">1-29</span>
			    <span class="delBtn">
			    	<router-link to="" icon="more" @click.native="popupShow">
				  	   <mt-button icon="more"></mt-button>
				    </router-link>
			    </span>
			  </div>
			  <div class="comment-content">
			  	 666666
			  </div>
			  <div class="comment-article">
			  	<router-link to="/detail">
			  		<div class="article-img">
			  	 	 <img src="../assets/images/middleImg0.png" alt="">
				  	 </div>
				  	 <div class="article-title">
				  	 	<h2>
				  	 		如何侧方位停车、斜方位停车，超实用倒车停车技能 非常值得收藏
				  	 	</h2>
				  	 </div>
			  	</router-link>
			  </div>
		   </section>
		    <section class="comment-item">
		   	  <div class="comment-author">
				<span class="avatar"><img src="../assets/images/avatar.png" alt=""></span>
				<span class="author">小马哥</span>
				<span class="time">1-29</span>
			    <span class="delBtn">
			    	<router-link to="" icon="more" @click.native="popupShow">
				  	   <mt-button icon="more"></mt-button>
				    </router-link>
			    </span>
			  </div>
			  <div class="comment-content">
			  	 666666
			  </div>
			  <div class="comment-article">
			  	<router-link to="/detail">
			  		<div class="article-img">
			  	 	 <img src="../assets/images/middleImg0.png" alt="">
				  	 </div>
				  	 <div class="article-title">
				  	 	<h2>
				  	 		如何侧方位停车、斜方位停车，超实用倒车停车技能 非常值得收藏
				  	 	</h2>
				  	 </div>
			  	</router-link>
			  </div>
		   </section>
		</div>
		<div class="popup-panel">
			<mt-popup v-model="popupVisible" position="bottom">
			   <div class="tools del-btn" @click="delItem">删除</div>
			   <div class="tools" @click="popupHide">取消</div>
			</mt-popup>
		</div>
	</div>
</template>
<script>
	export default{
		name:"myComment",
		data(){
			return{
				popupVisible:false,
			};
		},
        methods: {
          popupShow(){
              this.popupVisible = true;
          },
          popupHide(){
          	  this.popupVisible = false;
          },
          delItem(){
          	this.popupVisible = false;
          	this.$toast({
          		message: '删除成功',
          		duration: 1000
          	});
          }
        }
	}
</script>
<style lang="less" scoped>
	.myComment{
         .mint-header{
			background-color: #ed1c23;
			height: 110rem/32;
		}	
		.main{
			padding: 120rem/32 20rem/32 0 20rem/32;
			.comment-item{
				margin-top: 20rem/32;
				border-bottom: 1rem/32 solid #f4f5f6;
				.comment-author{
	                .avatar{
	                	img{
	                		width:80rem/32;
							height:80rem/32;
							border-radius: 50%;
	                	    vertical-align: middle;
	                	}
	                }
	                .author,.time{
	      					font-size: 30rem/32;
	      					color: #999;
	      			}
	      			.delBtn{
	      				float: right;
	      				.mint-button--default{
	      				background-color: rgba(255,255,255,0);
	      				box-shadow:none;
	      			    }
	      			    .mint-button--normal{
	      			    	padding-right: 0;
	      			    }
	      		   }
				}
				.comment-content{
					margin-top: 20rem/32;
					font-size: 40rem/32;
				}
				.comment-article{
					>a{
					    box-sizing:border-box;
						background-color: #f4f5f6;
						color: #000000;
						margin: 20rem/32 0;
						display: flex;
						flex-direction: row;
						flex-wrap:nowrap;
						justify-content: flex-start;
						.article-img{
							// flex:20%;
							img{
								height:150rem/32;
							}
						}
						.article-title{
							flex:80%;
							padding: 20rem/32;
						}	
					}
				}
			}
		}
		.popup-panel{
      		.mint-popup.mint-popup-bottom{
      			width:100%;
           	  .tools{
           	  	height: 100rem/32;
           	  	text-align: center;
           	  	line-height: 100rem/32;
           	  }
           	  .del-btn{
           	  	border-bottom: 2rem/32 solid #f4f5f6;
           	  }
	       }
      	}
	}
</style>