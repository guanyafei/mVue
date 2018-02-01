<template>
	<div class="about">
		<mt-header title="关于我们" fixed>
		  <router-link to="/personal" slot="left">
		  	 <mt-button icon="back"></mt-button>
		  </router-link>
		  <router-link to="/" slot="right">
		  	 <mt-button icon="more"></mt-button>
		  </router-link>
		</mt-header>
		<div class="main">
			<section class="about-wrap">
				<h2><span>关于我们</span></h2>
				<div class="about-ways">
					由于专注于金融细分领域，以及独特的媒体定位，截止2016年底，该网站已经成功举办了十三届城市商业银行信息化发展高峰年会、十二届农村金融机构信息化发展战略高峰年会、十三届保险业信息化发展战略高峰年会、十届证券业信息化发展战略高峰年会、十一届金融CIO年会。已形成了一个聚合中小金融机构CIO、信息科技部门负责人及相关业务部门负责人、金融IT服务商的圈子。
				</div>
			</section>
		</div>
	</div>
</template>
<script>
	export default{
		name:"about",
		data(){
			return{};
		}
	}
</script>
<style lang="less" scoped>
	.about{
       .mint-header{
			background-color: #ed1c23;
			height: 110rem/32;
		}
		.main{
           padding-top: 110rem/32;
           .about-wrap{
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
			.about-ways{
               margin-top: 20rem/32;
               border-top: 1rem/32 solid #d9d9d9;
               padding: 30rem/32 20rem/32;
               background-color: rgba(255,255,255,1);
               font-size: 40rem/32;
               text-indent: 80rem/32;
			}
          }
		}
	}
</style>