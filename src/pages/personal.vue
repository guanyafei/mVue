<template>
	<div class="personal">
		<mt-header title="个人中心" fixed>
		  <router-link to="/" slot="left">
		  	 <mt-button icon="back"></mt-button>
		  </router-link>
		  <router-link to="/" slot="right">
		  	 <mt-button icon="more"></mt-button>
		  </router-link>
		</mt-header>
		<div class="main">
			<section class="p_info">
				<div class="p_logo">
					<router-link to="/login" >
						<img src="../assets/images/avatar.png" alt="">
						<em class="p_name">小马哥</em>
					</router-link>
				</div>
			</section>
			<section class="p_nav">
				<nav>
					<ul>
						<li><router-link to="/">评论</router-link></li>
						<li><router-link to="/">回复</router-link></li>
						<li><router-link to="/">收藏</router-link></li>
					</ul>
				</nav>
			</section>
			<section class="p_cell">
				<mt-cell title="用户反馈" to="/" is-link value=""></mt-cell>
				<mt-cell title="关于我们" to="/" is-link value=""></mt-cell>
				<mt-cell title="联系我们" to="/" is-link value=""></mt-cell>
			</section>
		</div>
	</div>
</template>
<script>
	export default{
		name:'personal',
		data(){
			return{};
		}
	}
</script>
<style lang="less" scoped>
	.personal{
		.mint-header{
			background-color: #ed1c23;
			height: 110rem/32;
			border-bottom: 4rem/32 solid rgba(255,255,255,.5);
		}
		.main{
			margin-top: 110rem/32;
			section{
				padding: 0 20rem/32;
			}
			.p_info{
				height: 250rem/32;
				background-color: #ed1c23;
				position: relative;
				text-align: left;
				.p_logo{
					>a{
						display: inline-block;
						width: 100%;
					}
					img{
						width: 120rem/32;
		        		height:120rem/32;
		        		border-radius: 50%;
		        		position: absolute;
		        		left:10%;
		        		top:50%;
		        		margin-top: -60rem/32;
		        		margin-left: -60rem/32;
					}
					em{
		                line-height: 250rem/32;
		                margin-left: 120rem/32;
		                margin-top: 30rem/32;
		                padding: 0 40rem/32;
		                font-size: 45rem/32;
		                color:white;
					}
				}
			}
			.p_nav{
				background-color: #f4f5f6;
				margin-bottom: 25rem/32;
				ul{
					display: -webkit-flex;
					flex-direction: row;
					flex-wrap: nowrap;
					justify-content: center;
					text-align: center;
					li{
						flex:1;
					   a{
					   	  display: inline-block;
					   	  height:150rem/32; 
					   	  width:100%;
					   	  line-height: 150rem/32; 
						  color:rgba(0,0,0,1);
						  font-size: 40rem/32;
						}
					}	
				}
			}	
			.p_cell{
				background-color: #f4f5f6;
				.mint-cell{
					background-color: #f4f5f6;
				}
			}
		}
	}
</style>