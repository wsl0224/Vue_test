<template>
	<div class="mainContent">
		 <Tabs></Tabs>
		  <router-view></router-view>
	</div>
</template>

<script>
import Tabs from "./Tabs.vue"
export default {
    name: 'mainPage',
  
    data(){
      return {}
    },
    components: {Tabs} 
 }
</script>

<style scoped>
	.mainContent{
	width: 100%;
	min-width: 375px;
	height: 100%;
	max-height: 772px;
	background-color: rgba(250, 250, 250, 1);
	}
</style>