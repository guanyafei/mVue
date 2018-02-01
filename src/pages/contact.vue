<template>
	<div class="contact">
		<mt-header title="联系我们" fixed>
		  <router-link to="/personal" slot="left">
		  	 <mt-button icon="back"></mt-button>
		  </router-link>
		  <router-link to="/" slot="right">
		  	 <mt-button icon="more"></mt-button>
		  </router-link>
		</mt-header>
		<div class="main">
			<section class="contact-wrap">
				<h2><span>联系方式</span></h2>
				<div class="contact-ways">
					<p>Tel:<span>110</span></p>
					<p>Email:<span>110@qq.com</span></p>
					<p>王者:<span>http://www.mrtt.com.cn</span></p>
					<p>地址:<span>北京市 丰台区 东安街头条18号院</span></p>
					<p>邮编:<span>100036</span></p>
				</div>
			</section>
		</div>
	</div>
</template>
<script>
	export default{
		name:"contact",
		data(){
			return{};
		}
	}
</script>
<style lang="less" scoped>
	.contact{
        .mint-header{
			background-color: #ed1c23;
			height: 110rem/32;
		}
		.main{
           padding-top: 110rem/32;
           .contact-wrap{
           	  background-color: #f4f5f6;
              >h2{
              	background-color: rgba(255,255,255,1);
              	padding: 24rem/32 0 0 20rem/32;
		   		font-size: 40rem/32;
		   		border-bottom: 1rem/32 solid #d9d9d9;
		   		span{
		   		  display: inline-block;
		   		  height: 70rem/32;
		   		  border-bottom: 6rem/32 solid #ed1c23;
		   		}
			}
			.contact-ways{
               margin-top: 20rem/32;
               border-top: 1rem/32 solid #d9d9d9; 
               border-bottom: 1rem/32 solid #d9d9d9; 
               padding: 10rem/32 20rem/32;
               background-color: rgba(255,255,255,1);
               p{
               	margin: 25rem/32 0;
               	font-size: 40rem/32;
               	span{
               		margin-left: 10rem/32;
               		color: #999;
               	}
               }
			}
          }
		}
	}
</style>