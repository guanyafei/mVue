<template>
	<div class="protocol">
		<mt-header title="注册协议" fixed>
		  <router-link to="/register" slot="left">
		  	 <mt-button icon="back"></mt-button>
		  </router-link>
		  <router-link to="/" slot="right">
		  	 <mt-button icon="more"></mt-button>
		  </router-link>
		</mt-header>
        <div class="main">
          <article>
          	<section>
          		<h1>用户的责任与义务</h1>
			    <h2>一、用户在使用该网站服务的过程中，负有以下责任与义务：</h2> 
				<p>1）使用网络应遵守中国相关法律法规的规定； </p>
				<p>2）不得以任何非法目的使用网络服务；</p>
				<p>3）不干扰或混乱网络服务； </p>
				<p>4）遵守所有使用网络服务的网络协议、规定、程序和惯例。</p> 
				<p>5）用户须承诺不得传输任何非法的、骚扰性的、中伤他人的、辱骂性的、恐吓性的、伤害性的、庸俗的，淫秽的信息资料； </p>
				<p>6）用户不得传输任何教唆他人犯罪的信息和资料； </p>
				<p>7）不得传输助长国内不利条件和涉及国家安全的资料；</p> 
				<p>8）不得未经许可而非法进入其它电脑系统；</p> 
				<p>9）不得传播反动的、色情的信息和资料。</p>
				<h2>二、若用户的行为违反上述责任与义务，《网界网》网站有权作出独立判断并立即取消用户的服务帐号，用户必须对自己在网上的行为承担一切法律责任，而且该网站的系统记录有可能作为用户违反法律的证据。</h2>
				<h2>三、用户同意保障和维护该网站全体成员及其他用户的利益，如因违反本协议或违反有关的法律法规而给该网站或任何第三人造成损失，用户应承担因此产生的一切赔偿责任。</h2>
          	</section>
		  </article>
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
	.protocol{
         .mint-header{
			background-color: #ed1c23;
			height: 110rem/32;
		}	
		.main{
			padding: 120rem/32 20rem/32 0 20rem/32;
			h1{
				text-align: center;
				margin-bottom: 10rem/32;
			}
		}
	}
</style>