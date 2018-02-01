<template>
	<div class="feedback">
		<mt-header title="反馈" fixed>
		  <router-link to="/personal" slot="left">
		  	 <mt-button icon="back"></mt-button>
		  </router-link>
		  <router-link to="/" slot="right">
		  	 <mt-button icon="more"></mt-button>
		  </router-link>
		</mt-header>
		<div class="main">
			<section class="feedback-wrap">
				<h2><span>反馈内容</span></h2>
				<div class="feedback-content">
					<textarea rows="5" placeholder="请填写反馈..."></textarea>
					<span>+</span>
				</div>
				<div id="feedback-phone">
					<mt-field label="联系方式" placeholder="如需得到反馈请输入联系方式" type="tel" v-model="phone"></mt-field>
				</div>
				<div class="feedback-submit">
					<mt-button type="danger" size="large">确认</mt-button>
				</div>
			</section>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				phone:''
			};
		}
	}
</script>
<style lang="less" scoped>
	.feedback{
        .mint-header{
			background-color: #ed1c23;
			height: 110rem/32;
		}
		.main{
           padding-top: 110rem/32;
          .feedback-wrap{
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
			.feedback-content{
               margin-top: 20rem/32;
               border-top: 1rem/32 solid #d9d9d9;
               padding: 50rem/32 20rem/32 20rem/32 0;
               background-color: rgba(255,255,255,1);
               textarea{
               	padding: 40rem/32;
               	width:100%;
               	box-sizing: border-box;
               	border-radius: 20rem/32;
               }
               span{
               	display: inline-block;
               	width: 120rem/32;
               	height: 120rem/32;
               	text-align: center;
               	line-height: 100rem/32;
               	font-size: 80rem/32;
               }
			}
			#feedback-phone{
				.mint-cell.mint-field{
					padding: 0 20rem/32;
					.mint-cell-wrapper{
						padding: 0;
						border-image: none;
						border-top: 2rem/32 solid rgba(169, 169, 169,1);
						border-bottom: 2rem/32 solid rgba(169, 169, 169,1);
					}
				}
			}
			.feedback-submit{
				margin-top: 20rem/32;
				padding: 0 20rem/32;
			}
          }
		}
	}
</style>