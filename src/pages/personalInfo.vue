<template>
	<div class="personalInfo">
		<mt-header title="我" fixed>
		  <router-link to="/personal" slot="left">
		  	 <mt-button icon="back"></mt-button>
		  </router-link>
		  <router-link to="/" slot="right">
		  	 <mt-button icon="more"></mt-button>
		  </router-link>
		</mt-header>
	    <div class="main">
	    	<div class="info1">
	    		<mt-cell title="头像"  is-link value="" class="avatar" @click.native = "avatarPShow">
		    		<span>
		    			<img  src="../assets/images/avatar.png">
		    		</span>
		    	</mt-cell>
		    	<mt-cell title="昵称"  is-link value="" class="nickname" @click.native="nicknamePShow">
		    		<span>
		    			小马哥
		    		</span>
		    	</mt-cell>
		    	<mt-cell title="自我介绍"  is-link value="" class="introduction" @click.native="introductionPShow">
		    	</mt-cell>
	    	</div>
	    	<div class="info2">
	    		<mt-cell title="性别"  is-link value="" class="sex" @click.native= "sexPShow">
		    		<span>
		    			男
		    		</span>
		    	</mt-cell>
		    	<mt-cell title="所在区域" to="" is-link value="" class="address">
		    		<span>
		    			北京市丰台区
		    		</span>
		    	</mt-cell>
		    	<mt-cell title="出生日期"  is-link value="" class="birthday" @click.native = "birthPShow">
		    		<span>
		    			2000-01-01
		    		</span>
		    	</mt-cell>
		    	<mt-cell title="QQ"  is-link value="" class="QQ" @click.native = "QQPShow">
		    		<span>
		    			12345678
		    		</span>
		    	</mt-cell>
	    	</div>
	    </div>
	    <!-- 更改头像弹窗 -->
	    <div class="infoPopup">
	    	<mt-popup
			  v-model="avatarVisible"
			  popup-transition="popup-fade">
			    <div class="album">
			    	从相册选择
			    </div>
			    <div class="camera">
			    	相机
			    </div>
			    <div class="cancel" @click="avatarPHide">
			    	取消
			    </div>
			</mt-popup>
	    </div>
	     <!-- 更改昵称弹窗 -->
	    <div class="infoPopup">
	    	<mt-popup
			  v-model="nicknameVisible"
			  popup-transition="popup-fade">
			    <div class="nickname-text">
			    	<input type="text" placeholder="请输入昵称">
			    </div>
			    <div class="nicknameBtn clearfix" @click="nicknamePHide">
                    <mt-button type="primary" size="small">确定</mt-button>
			    	<mt-button type="default" size="small">取消</mt-button>
			    </div>
			</mt-popup>
	    </div>
	    <!-- 更改性别弹窗 -->
	    <div class="infoPopup">
	    	<mt-popup
			  v-model="sexVisible"
			  popup-transition="popup-fade">
			    <div class="sex-text">
			    	<mt-radio
					  title="请选择"
					  v-model="sexVal"
					  :options="['男', '女']">
					</mt-radio>
			    </div>
			    <div class="sexBtn clearfix" @click="sexPHide">
                    <mt-button type="primary" size="small">确定</mt-button>
			    	<mt-button type="default" size="small">取消</mt-button>
			    </div>
			</mt-popup>
	    </div>
	    <!-- 更改QQ弹窗 -->
	    <div class="infoPopup">
	    	<mt-popup
			  v-model="QQVisible"
			  popup-transition="popup-fade">
			    <div class="QQ-text">
			    	<input type="text" placeholder="请输入QQ号">
			    </div>
			    <div class="QQBtn clearfix" @click="QQPHide">
                    <mt-button type="primary" size="small">确定</mt-button>
			    	<mt-button type="default" size="small">取消</mt-button>
			    </div>
			</mt-popup>
	    </div>
	    <!-- 更改QQ弹窗 -->
	    <div class="infoPopup">
	    	<mt-popup
			  v-model="introductionVisible"
			  popup-transition="popup-fade">
			    <div class="introduction-text">
			    	<textarea  id="" cols="30" rows="5" placeholder="介绍一下自己吧..."></textarea>
			    </div>
			    <div class="introductionBtn clearfix" @click="introductionPHide">
                    <mt-button type="primary" size="small">确定</mt-button>
			    	<mt-button type="default" size="small">取消</mt-button>
			    </div>
			</mt-popup>
	    </div>
	    <!-- 出生日期弹窗 -->
	    <div class="birthPopup">
	    	<mt-datetime-picker
			    ref="picker"
			    type="date"
                :startDate="startDate"
			    v-model="pickerValue">
			</mt-datetime-picker>
	    </div>
	</div>
</template>
<script>
	export default{
		name:"personalInfo",
		data(){
			return{
				introduction:'',
				avatarVisible: false,
				nicknameVisible: false,
				sexVisible: false,
				sexVal:'男',
				QQVisible:false,
				introductionVisible:false,
				pickerValue:new Date(2000,0,1),
				startDate: new Date(1970,0,1),
			};
		},
		methods:{
			avatarPHide(){
                this.avatarVisible = false;
		    },
		    avatarPShow(){
                this.avatarVisible = true;
		    },
		    nicknamePHide(){
                this.nicknameVisible = false;
		    },
		    nicknamePShow(){
                this.nicknameVisible = true;
		    },
		    sexPHide(){
                this.sexVisible = false;
		    },
		    sexPShow(){
                this.sexVisible = true;
		    },
		    QQPHide(){
                this.QQVisible = false;
		    },
		    QQPShow(){
                this.QQVisible = true;
		    },
		    introductionPHide(){
                this.introductionVisible = false;
		    },
		    introductionPShow(){
                this.introductionVisible = true;
		    },
		    birthPShow(){
		    	this.$refs.picker.open();
		    }
	    }
	}
</script>
<style lang="less" scoped>
	.personalInfo{
        .mint-header{
			background-color: #ed1c23;
			height: 110rem/32;
		}
		.main{
			margin-top: 110rem/32;
			background-color: #f4f5f6;
			>div{
				padding-top: 14rem/32;
			}
			.info1{
				.avatar{
					img{
                        width: 80rem/32;
                        height: 80rem/32;
                        border-radius: 50%;
					}
				}
			}
	    }
	    .infoPopup{
	    	.mint-popup{
	    		border-radius: 20rem/32;
	    		> div{
	    			margin: 30rem/32;
	    			color: #4285f4;
	    			width: 500rem/32;
	    			input{
	    				width: 100%;
	    				height: 100rem/32;
	    				box-sizing: border-box;
	    				padding-left: 20rem/32;
	    			}
	    			.mint-button {
	    				float: right;
	    				margin-left: 20rem/32;
	    				height: 60rem/32;
	    				padding: 0 20rem/32;
	    			}
	    			textarea{
                        padding: 10rem/32;
	    			}
	    	  }
	    	}
	    }
    }
</style>