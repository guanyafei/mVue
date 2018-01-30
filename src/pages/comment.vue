<template>
	<div class="comment">
		<mt-header title="评论" fixed>
		  <router-link to="/detail" slot="left">
		  	 <mt-button icon="back"></mt-button>
		  </router-link>
		</mt-header>
		<div class="main">
			<section class="comment_area">
				<div class="textarea_wrap">
					<textarea autofocus rows="6" required placeholder="请登录后参与评论..."></textarea>
					<div class="textarea_btn">
						<mt-button type="default" size="large">提交</mt-button>
					</div>
				</div>
				<div class="hot_comment">
					<h2>热门评论</h2>
					<div>
						<ul>
							<li>
								<div class="comment_author">
									<span class="avatar"><img src="../assets/images/avatar.png" alt=""></span>
									<span class="author">沧海一声笑</span>
								</div>
								<p class="comment_content">这破玩意成本888吧这破玩意成本888吧这破玩意成本888吧这破玩意成本888吧
								</p>
								<div class="comment_reply">
									<span class="time">1-29</span>
									<router-link to="/reply" >
										<mt-badge size="small" color="#f6f8fa">
										   <span class="count">352</span>回复
									    </mt-badge>
									</router-link>
								</div>
							</li>
							<li>
								<div class="comment_author">
									<span class="avatar"><img src="../assets/images/avatar.png" alt=""></span>
									<span class="author">沧海一声笑</span>
								</div>
								<p class="comment_content">这破玩意成本888吧这破玩意成本888吧这破玩意成本888吧这破玩意成本888吧
								</p>
								<div class="comment_reply">
									<span class="time">1-29</span>
									<router-link to="/reply" >
										<mt-badge size="small" color="#f6f8fa">
										   <span class="count">352</span>回复
									    </mt-badge>
									</router-link>
								</div>
							</li>
							<li>
								<div class="comment_author">
									<span class="avatar"><img src="../assets/images/avatar.png" alt=""></span>
									<span class="author">沧海一声笑</span>
								</div>
								<p class="comment_content">这破玩意成本888吧这破玩意成本888吧这破玩意成本888吧这破玩意成本888吧
								</p>
								<div class="comment_reply">
									<span class="time">1-29</span>
									<router-link to="/reply" >
										<mt-badge size="small" color="#f6f8fa">
										   <span class="count">352</span>回复
									    </mt-badge>
									</router-link>
								</div>
							</li>
							<li>
								<div class="comment_author">
									<span class="avatar"><img src="../assets/images/avatar.png" alt=""></span>
									<span class="author">沧海一声笑</span>
								</div>
								<p class="comment_content">这破玩意成本888吧这破玩意成本888吧这破玩意成本888吧这破玩意成本888吧
								</p>
								<div class="comment_reply">
									<span class="time">1-29</span>
									<router-link to="/reply" >
										<mt-badge size="small" color="#f6f8fa">
										   <span class="count">352</span>回复
									    </mt-badge>
									</router-link>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</section>
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
	.comment{
         .mint-header{
			background-color: #ed1c23;
			height: 110rem/32;
		}
		.main{
			margin-top: 110rem/32;
			padding: 0 20rem/32;
			.comment_area{
				   textarea{
						width:100%;
						outline: none;
						margin-top: 10rem/32;
						border-radius: 20rem/32;
						padding: 20rem/32;
						box-sizing: border-box;	
				}
				.textarea_btn{
					background-color: #f7f7f7;
				}
				.hot_comment{
					li{
						padding-bottom: 30rem/32;
						border-bottom: 2rem/32 solid #f7f7f7;
						box-sizing: border-box;
					}
					>h2{
						margin: 40rem/32 0 10rem/32 0;
	      				font-weight: 500;
	      				border-left: 8rem/32 solid #ed1c23;
	      				padding-left: 16rem/32;
						}
					.comment_author{
	      				margin-top: 30rem/32;
	      				.avatar{
	      					margin-right: 20rem/32;
	      					img{
	      						width:80rem/32;
	      						height:80rem/32;
	      						border-radius: 50%;
	      						vertical-align: bottom;
	      					}
	      				}
	      				.author{
	      					font-size: 30rem/32;
	      					color: #999;
	      				}
	      			}
      				.comment_content{
      					font-size: 40rem/32;
      					margin:30rem/32 0;
      					word-break: break-all;
      					word-wrap: break-word;
      					white-space: pre-line;
      				}
	      			.comment_reply{
	      				.time{
	      					color: #999;
	      				}
                        >a{
                        	float:right;
                        	padding: 0 20rem/32;
                        		.count{
	                        		margin-right: 10rem/32;
	                        	}
                        	span{
                        		color:#4285f4;
                        	}
                        }
	      			}
				}
			}
		}	
	}
</style>