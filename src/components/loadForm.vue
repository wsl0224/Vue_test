<template>
	<div class="loadForm">
			<div class="form-group">
					<img class="useNameLogo" src="../img/icon_09_psns.png"/>
					<input class="form-control required" type="number" placeholder="手机号" name="username" autofocus="autofocus" />
				</div>
				<div class="form-group">
					<img class="passLogo" src="../img/icon_08_suo.png"/>
					<input class="form-control required" type="password" placeholder="密码" id="register_password" name="password" />
				</div>						
	</div>
</template>

<script>
	export default {
		name:'loadForm'
	}
</script>

<style scoped>
	.loadForm{
		width: 100%;
		margin-top: 50px;
	
		position: relative;
	}
	.loadForm>.form-group{
		width: 100%;
		height: 20px;
		margin-bottom: 20px;
		padding-bottom: 15px;
		border-bottom: 0.5px solid #CCCCCC;
	}
	.loadForm img{
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
</style>