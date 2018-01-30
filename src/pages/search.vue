<template>
	<div class="search">
		<mt-header title="搜索" fixed>
		  <router-link to="/" slot="left">
		  	 <mt-button icon="back"></mt-button>
		  </router-link>
		</mt-header>
		<div class="main">
		  <div class="s_box">
		  	<input type="text" placeholder="搜索">
		  	<i class="mintui mintui-search"></i>
		  	<i class="mintui mintui-field-error"></i>
		  </div>
		  <section class="recommend">
		  	 <ul>
		  	 	<li><router-link to="/">高速路惊现幽灵车</router-link></li>
		  	 	<li><router-link to="/">南京融雪盐告急</router-link></li>
		  	 	<li><router-link to="/">虚报瞒报票房被罚</router-link></li>
		  	 	<li><router-link to="/">高速路惊现幽灵车</router-link></li>
		  	 	<li><router-link to="/">南京融雪盐告急</router-link></li>
		  	 </ul>
		  </section>
		</div>
	</div>
</template>
<script>
	export default{
		name:'search',
		data(){
			return{};
		}
	}
</script>
<style lang="less" scoped>
	.search{
       .mint-header{
			background-color: #ed1c23;
			height: 110rem/32;
		}
		.main{
			margin-top: 110rem/32;
		    .s_box{
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
		}
		.recommend{
			padding: 20rem/32;
			ul{
				li{
				  float:left;
				  padding:20rem/32;
				  margin: 10rem/32; 
				  background-color: #f5f5f5;
				  a{
				  	color:#363636;
				  }
				}
			
			}
		}
	}
</style>