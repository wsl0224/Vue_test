<template>
	<div class="footerHr">
		<div class="leftHr"></div>
		<div class="midTxt">{{textVal}}</div>
		<div class="rightHr"></div>		
	</div>
</template>

<script>
	export default {
		name:'footerHr',
		data(){
			return{
				textVal:'Demo'
			}
		}
	}
</script>

<style scoped>
	.footerHr{
		width: 90%;
		height: 20px;
		text-align: center;
		position: absolute;
		bottom: 20px;
		left: 0;
		right: 0;
		margin: 0 auto;
	}
	.leftHr,.rightHr{
		width: calc(45% - 55px);
		height: 1px;
		display: inline-block;
		border: 0.5px solid #CCCCCC;
		vertical-align: middle;
	}
	.midTxt{
		width: 100px;
		height: 20px;
		text-align: center;
		color: #24b8f5;
		font-size: 20px;
		display: inline-block;
		vertical-align: middle;
	}
</style>