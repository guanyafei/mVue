<template>
	<div class="login">
		<mt-header title="登录" fixed>
		  <router-link to="/personal" slot="left">
		  	 <mt-button icon="back"></mt-button>
		  </router-link>
		  <router-link to="/" slot="right">
		  	 <mt-button icon="more"></mt-button>
		  </router-link>
		</mt-header>
		<div class="main">
			<div class="login-wrap">
				<h2><span>账号登录</span></h2>
                <mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="phone"></mt-field>
				<mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
				<div class="get-back">
					<router-link to="/resetPwd">
					  	忘记密码?
					</router-link>
					<router-link to="/register" class="register">
					  	暂无账号?立即注册
					</router-link>
				</div>
				<div class="login-submit">
					<mt-button type="danger" size="large">立即登录</mt-button>
				</div>
				<div class="login-other">
					<a href="javascript:void(0)"><img src="../assets/images/qq-login.png" alt=""></a>
					<a href="javascript:void(0)"><img src="../assets/images/wx-login.png" alt=""></a>
					<a href="javascript:void(0)"><img src="../assets/images/wb-login.png" alt=""></a>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				phone:'',
				password:''
			};
		}
	}
</script>
<style lang="less" scoped>
	.login{
         .mint-header{
			background-color: #ed1c23;
			height: 110rem/32;
		}	
		.main{
			padding-top: 110rem/32;
		   .login-wrap{
		   	 padding: 0 20rem/32;		
		   	  >h2{
			   		 padding: 24rem/32 0 0 0;
			   		 font-size: 40rem/32;
			   		 border-bottom: 1rem/32 solid #d9d9d9 ;
			   		 margin-bottom: 20rem/32;
			   		 span{
			   		 	display: inline-block;
			   		 	height: 70rem/32;
			   		 	border-bottom: 6rem/32 solid #ed1c23;
			   		 }
			   	  }
			   	  .mint-cell.mint-field{
			   	  	border: 1rem/32 solid #d9d9d9;
			   	  	margin-bottom: 20rem/32;
			   	  	box-sizing: border-box;
			   	  }
			   	  .get-back{
			   	  	margin: 36rem/32 0;
			   	  	font-size: 36rem/32;
			   	  	a>{
			   	  	    color: #008df3;
			   	  		line-height: 30rem/32;
			   	  	}
			   	  	.register{
			   	  		float:right;
			   	  		color: #008df3;
			   	  	}
			   	  }
			   	  .login-other{
			   	  		display: flex;
				   	  	flex-direction: row;
				   	  	flex-wrap: nowrap;
				   	  	justify-content: center;
				   	  	text-align: center;
				   	  	margin-top: 80rem/32;
				   	  	background-color: #f3f7fb;
				   	  	padding: 150rem/32 80rem/32;
				   	  	>a{
				   	  		flex:1;
				   	  		>img{
				   	  			width: 150rem/32;
				   	  			height: 150rem/32;
				   	  		}
				   	  	}
				   	 }
			   }
		   }
	}
</style>