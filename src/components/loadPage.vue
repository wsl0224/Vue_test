<template>
	<div class="loadContent">
		<div class="loadTop">
			<img src="../img/icon_logo.png" />
		</div>
		<loadForm></loadForm>
		<loadMune></loadMune>
		<footerHr></footerHr>
	</div>
</template>
<script>
	import loadForm from './loadForm'
	import loadMune from './loadMune'
	import footerHr from './footerHr'
export default {
		name:'loadPage',
		components:{loadForm,loadMune,footerHr},
		
	}
</script>
<style scoped>
	.loadContent{
		width: 100%;
		height: 100%;
		margin: 0;
		padding: 0;
	}
	.loadTop{
		width: 100%;
		height: 200px;
		background: #24b8f5;
		text-align: center;		
	}
	.loadTop>img{
		width: 100px;
		height: 100px;
		margin-top: 50px;
	}
	
	
</style>