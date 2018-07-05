<template>
  <div class="tabs">
    <!--命名路由-->
    <ul>
      <!--this inspection reports XML/HTML tags with missing mandatory attrbutes ,you can specify attrbute name that should not  be reported-->
      <!--home被点击后，一直处于激活状态，因此需要使用精确匹配模式，在router-link中添加exact属性-->
      <router-link :to="{name:'order'}" tag="li" exact>
        <div class="PayLogo">
          <i class="igongzitiao"></i>
        </div>
        <div class="PayStr">订单</div>
      </router-link>
  <!--    <router-link :to="{name:'My',params:{user:'xu'}}" tag="li">
        <div class="MyLogo">
          <i class="iwode"></i>
        </div>
        <div class="MyStr">我的</div>
      </router-link>-->
    </ul>
  </div>
</template>
<script type="text/ecmascript-6">
 export default {}
</script>
<style scoped>
  .tabs {
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: #fff;
    box-shadow: 0 2px 4px #000;  
    width: 100%;
    height: 48px;
    background: white;
    z-index: 999;
    }
 .tabs>ul,.tabs>ul>li{
    	 margin: 5px 0 3px 0;
       padding: 0;
    }  
 ul{
      display: table;
      width: 100%;
    	height: 40px;
  		margin-top: 5px;
  		margin-bottom: 3px;
  }
  ul>li{
  		 text-align: center;
        font-size: 16px;
        display: table-cell;

        cursor: pointer;
  }
  ul>li.router-link-active{ 	
  	 color: #24b8f5;
  }
  ul>li.router-link-active .igongzitiao{
  		background-image: url(../img/icon_order_blue.png);
  }
  /* ul>li.router-link-active .iwode{
  	  	background-image: url(../img/icon_order_blue.png);
  }*/
  .PayLogo,.MyLogo{
  	width: 100%;
  	height: 22px;
	
  	margin-bottom: 4px;
  }
  ul>li>div{
  
 	 font-size: 10px;
 
  }
  ul>li>div>i{
  	 width: 22px;
  	 height: 22px;
  	 display: inline-block;
  	max-width:100%;max-height:100%;
  	background-size: 100% 100%;
  }
 .igongzitiao{
  		background-image: url(../img/icon_order_back.png);
  		
  }
   /*.iwode{
  	background-image: url(../image/icon_my_01.png);
  }*/
</style>