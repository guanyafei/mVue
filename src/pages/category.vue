<template>
	<div class="category">
		<mt-header title="导航" fixed>
		  <router-link to="/" slot="left">
		  	 <mt-button icon="back"></mt-button>
		  </router-link>
		</mt-header>
		<div class="main">
			<section class="custom_nav">
				<nav class="custom_nav_header">
					<span>我的自定义</span>
					<span>管理</span>
				</nav>
				<nav class="custom_nav_bottom">
					<router-link to="/" slot="left">
					   <mt-button>国内</mt-button>
					   <em></em>
					</router-link>
					<router-link to="/" slot="left">
					   <mt-button>社会</mt-button>
					   <em></em>
					</router-link>
					<router-link to="/" slot="left">
					   <mt-button>国际</mt-button>
					   <em></em>
					</router-link>
					<router-link to="/" slot="left">
					   <mt-button>国足</mt-button>
					   <em></em>
					</router-link>
					<router-link to="/" slot="left">
					   <mt-button>明星</mt-button>
					   <em></em>
					</router-link>
					<router-link to="/" slot="left">
					   <mt-button>明星</mt-button>
					   <em></em>
					</router-link>
					<router-link to="/" slot="left">
					   <mt-button class="add">+</mt-button>
					</router-link>
				</nav>
			</section>
			<section class="nav_box">
				<nav class="custom_nav_header">
					<span>新闻资讯<sub>点击直达频道</sub></span>
				</nav>
				<nav class="custom_nav_bottom">
					<router-link to="/" slot="left">
					   <mt-button>新闻</mt-button>
					</router-link>
					<router-link to="/" slot="left">
					   <mt-button>国内</mt-button>
					</router-link>
					<router-link to="/" slot="left">
					   <mt-button>社会</mt-button>
					</router-link>
					<router-link to="/" slot="left">
					   <mt-button>国际</mt-button>
					</router-link>
					<router-link to="/" slot="left">
					   <mt-button>国足</mt-button>
					</router-link>
					<router-link to="/" slot="left">
					   <mt-button>明星</mt-button>
					</router-link>
					<router-link to="/" slot="left">
					   <mt-button>明星</mt-button>
					</router-link>
				</nav>
				<nav class="custom_nav_bottom">
					<router-link to="/" slot="left">
					   <mt-button>军事</mt-button>
					</router-link>
					<router-link to="/" slot="left">
					   <mt-button>新闻</mt-button>
					</router-link>
					<router-link to="/" slot="left">
					   <mt-button>军事情报</mt-button>
					</router-link>
					<router-link to="/" slot="left">
					   <mt-button>深度</mt-button>
					</router-link>
				</nav>
				<nav class="custom_nav_bottom">
					<router-link to="/" slot="left">
					   <mt-button>娱乐</mt-button>
					</router-link>
					<router-link to="/" slot="left">
					   <mt-button>明星</mt-button>
					</router-link>
					<router-link to="/" slot="left">
					   <mt-button>电影</mt-button>
					</router-link>
					<router-link to="/" slot="left">
					   <mt-button>电视剧</mt-button>
					</router-link>
					<router-link to="/" slot="left">
					   <mt-button>综艺</mt-button>
					</router-link>
					<router-link to="/" slot="left">
					   <mt-button>音乐</mt-button>
					</router-link>
				</nav>
			</section>
		</div>
	</div>
</template>
<script>
	export default{
		name:"category",
		data(){
			return{};
		}
	}
</script>
<style lang="less" scoped>
	.category{
	    .mint-header{
			background-color: #ed1c23;
			height: 110rem/32;
		}	
		.main{
			padding-top: 110rem/32;
			background-color: #e8e8e8;
			.custom_nav,.nav_box{
				margin: 20rem/32 0;
				padding: 0 20rem/32;
				background-color: white;
				.custom_nav_header{
					position: relative;
					padding: 20rem/32 0;
					border-bottom: 1rem/32 solid #ececec;
					span{
						font-size: 45rem/32;
						sub{
							color:#888!important;
							margin-left: 20rem/32;
							font-size: 30rem/32;
						}
					}
					span:first-child{
                        &::after{
							content:"";
							width:70rem/32;
							height:5rem/32;
							background-color: #ed1c23;
							position: absolute;
							bottom:0;
							left:0;
						}
					}
					span:nth-of-type(2){
						float: right;
					}
				}
				.custom_nav_bottom{
					margin: 20rem/32 0;
					a{
						position: relative;
						em{
							position: absolute;
							top: 0;
							left:0;
							width:35rem/32;
							height:35rem/32;
							margin-left: 15rem/32;
							border-radius: 50%;
							background: url("../assets/images/del.png") no-repeat center border-box;
						}
						display: inline-block;
					   .mint-button{
						  padding:10rem/32 60rem/32;
						  margin:10rem/32 15rem/32;
						  border-radius: 50rem/32;
						  font-size: 20rem/32;
					   }
					   &:last-child{
					   	.add{
					   		font-size: 50rem/32;
					   	}
					   }	
					}
				}
			}
		    .nav_box{
		    	.custom_nav_bottom{
		    		a:first-child{
		    			.mint-button{
		    				color: #008af5;
		    			}
		    			.mint-button--default{
		    				box-shadow:0 0 1rem/32 rgba(0,135,250,1);
		    			}
		    		}
		    	}
		    }
		}
	}
</style>