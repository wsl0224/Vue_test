<template>
	<div class="loadMune">
		<div class="loaded" @click="loading()">
			登录
		</div>
		<div class="registered" @click="registered()">
			立即注册
		</div>
		<div class="forget">
			忘记密码
		</div>
	</div>
</template>

<script>
	import $ from 'jquery'
	import qs from 'qs'
	export default {
		name:'loadMune',
		methods:{
			loading(){
				var mobile=$('[name=username]').val();
				var pwd=$('#register_password').val();
				var data={
					mobile,
					pwd,
				};
				var _self=this;
				this.$ajax.post('/api/login/login',qs.stringify(data)).then((res)=>{
					res=res.data.data;			
				
					_self.$router.push({
						path:'/order',
						name:'order',
						params:{
							cookieToken:res.curToken,
						}
					});
					
				}).catch((err)=>{
					console.log(err);
				});
				
			}
			,
			registered(){
				this.$router.push({
					path:'/registered',
					name:'registered',
				})
			}
		}
	}
</script>

<style scoped>
	.loadMune{
		width: calc(100% - 10px);
		margin-left: 5px;
		margin-top: 30px;
	}
	.loaded{
		width: 100%;
		height: 40px;
		background:  #24b8f5;
		border-radius: 10px;
		line-height: 40px;
		text-align: center;
		color: white;
		font-size: 20px;
		margin-bottom: 30px;
	}
	.registered,.forget{
		width: 100px;
		text-align: center;
		font-size: 20px;
		color:  #24b8f5;
	}
	.registered{
		float: left;
		
	}
	.forget{
		float: right;				
	}
</style>