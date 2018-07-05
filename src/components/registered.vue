 <template>
 	<div class="registered">
 		
	                    <div class="form-group">  
	                        <img class="useNameLogo" src="../img/icon_09_psns.png"/> 
	                        <input class="form-control required" type="number" placeholder="手机号" name="username" autofocus="autofocus"/>  
	                    </div>  
	                    <div class="form-group">  
	                            <img class="passLogo" src="../img/icon_08_suo.png"/>  
	                            <input class="form-control required" type="password" placeholder="密码" id="register_password" name="password"/>  
	                    </div>  
	                    <div class="form-group form_Veri">      
	                    	<input class="form-control Veri" type="text" placeholder="请输入验证码" name="Verification"/> 
	                        <div  class="VeriBtn" @click="veriGet()">获取验证码</div> 
	                    </div>  	                    	                   
	                    <div class="registerBtn" @click="registerFun()">立即注册</div> 	
	                    <div class="agreeRadio">
	                    	 <input type="radio" value=""/>我已阅读并同意 <a href="javascript:;">《用户注册服务协议》</a>
	                    </div>
	                   
	               
	</div>
 </template>

<script>
	import $ from 'jquery'
	import qs from 'qs'
	export default{
		name:'registered',
		methods:{
			//获取验证码
			veriGet(){
				var mobile=$('[name=username]').val();
				if(mobile){
					var data={
						mobile
					};
					this.axios.post('/api/account/getYzm',qs.stringify(data)).then((res)=>{
						console.log(res);
					});
				}else{
					alert('请输入手机号')
				}
			},
			//发送注册信息
			registerFun(){
				var mobile=$('[name=username]').val();
				var pwd=$('#register_password').val();
				var vcode=$('[name=Verification]').val();
				var data={
					mobile,
					pwd,
					vcode,
				};
				this.axios.post(process.env.API_HOST + '/account/regist',qs.stringify(data)).then((res)=>{
					console.log(res.data);
					res=res.data;
					if(res.data){
						
					}else{
						alert(res.message);
					}
					
				}).catch((err)=>{
					console.log(res);
				});
			}
		}
	}
</script>

<style scoped>
	.registered{
		width: 100%;
		margin-top: 50px;
	
		position: relative;
	}
	.registered>.form-group{
		width: 100%;
		height: 20px;
		margin-bottom: 20px;
		padding-bottom: 15px;
		border-bottom: 0.5px solid #CCCCCC;

	}
	.form-group img{
		width: 30px;
		height: 20px;
		display: inline-block;
		position: absolute;
		left: 5px;
		vertical-align: middle;
	}
	.form-group>input{
		width: calc(100% - 50px);
		height: 20px;
		display: inline-block;
		padding: 0;
		padding-left: 45px;
		margin: 0;
		border: none;
		outline: none;
		vertical-align: middle;
		font-size: 18px;			
	}
	.Veri{
		width: 60%  !important;
		padding-left: 5px !important;
			vertical-align: middle;
	}
	.VeriBtn{
		width: 100px !important;
		height: 20px;
		padding: 5px;
		line-height: 20px;
		text-align: center;
		border-radius: 5px;
		color: white;
		background: #24b8f5;
		display: inline-block;
		vertical-align: middle;
		float: right;
		margin-right: 5px;
	}
	.registerBtn{
		width: calc(100% - 10px);
		margin-left: 5px;
		margin-top: 30px;
		height: 40px;
		background:  #24b8f5;
		border-radius: 10px;
		line-height: 40px;
		text-align: center;
		color: white;
		font-size: 20px;
		margin-bottom: 30px;
	}
	.agreeRadio{
		width: calc(100% - 10px);
		height: 20px;
		padding: 5px;
	}
	.agreeRadio>a{
		text-decoration: none;
	}
</style>