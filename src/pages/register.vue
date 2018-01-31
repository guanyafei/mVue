<template>
	<div class="register">
		<mt-header title="注册" fixed>
		  <router-link to="/login" slot="left">
		  	 <mt-button icon="back"></mt-button>
		  </router-link>
		  <router-link to="/" slot="right">
		  	 <mt-button icon="more"></mt-button>
		  </router-link>
		</mt-header>
		<div class="main">
			<div class="register-wrap">
				<h2><span>注册账号</span></h2>
				<mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="phone"></mt-field>
			    <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
			    <mt-field label="确认密码" placeholder="请再次输入密码" type="password" v-model="repassword"></mt-field>
			    <div class="register-ma clearfix">
			    	<input type="text" placeholder="短信验证码"><mt-button type="primary" size="normal" plain>获取验证码</mt-button> 
			    </div>
			    <div class="register-submit">
					<mt-button type="danger" size="large">立即注册</mt-button>
				</div>
			</div>
			<div class="register-protocol">
			    <span>点击注册即代表同意<router-link to="/protocol">【用户注册协议】</router-link></span>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				phone: '',
				password: '',
				repassword: '',
			};
		}
	}
</script>
<style lang="less" scoped>
	.register{
        .mint-header{
			background-color: #ed1c23;
			height: 110rem/32;
		}	
		.main{
			padding-top: 110rem/32;
			.register-wrap{
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
		   	  .register-ma{
		   	  	margin-bottom: 20rem/32;
		   	  	input{
		   	  		width: 650rem/32;
		   	  		height: 100rem/32;
		   	  		box-sizing: border-box;
		   	  		border: 1rem/32 solid #d9d9d9;
		   	  		padding: 0 20rem/32;
		   	  	}
		   	  	::-webkit-input-placeholder{
		   	  		color:rgba(0,0,0,.7);
		   	  		font-size: 40rem/32;
		   	  		line-height: 100rem/32;
		   	  	}
		   	  	button{
		   	  		float: right;
		   	  		width: 300rem/32;
		   	  	}
		   	  }
		}
		.register-protocol{
			padding: 0 20rem/32;
			text-align: center;
			margin-top: 100rem/32;
			font-size: 40rem/32;
			a{
				color:#26a2ff;
			}
		}
	}
}
</style>