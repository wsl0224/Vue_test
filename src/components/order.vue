<template>
	<div class="orderContent" :class="{'noData':!noDataBool}" :style="{height:clientHeight}">
		<div class="listContent" v-if="noDataBool">
			<div class="order_top">				
					<img src="../img/icon_11_mes.png"/>	
			</div>	
			<div class="topContent">
				<div class="topCTitle">
					<span>当前待还</span>
				</div>
				<div class="topCT">
					<div class="topCTL">
						<span>手机APP用户借条</span>
					</div>
					<div class="topCTR">
						<span>还款计划</span>
					</div>
				</div>
				<div class="topLists">
					<div class="topList">
						<div class="topListL">
							&#165;{{NextData.repaymentMoney}}
						</div>
						<div class="topListMid">
							<div class="midTop">
								<span>{{NextData.repaymentDueTime}}</span>
							</div>
							<div class="midFooter">
								<span>距离还款日{{NextData.grantTime}}天</span>
							</div>
						</div>
						<div class="topListR" @click="returnM()">
							还款>
						</div>
					</div>
				</div>
			</div>
			<div class="mainContent">
				<div class="mainListT">
						订单管理
				</div>
				<div class="mainLists" v-for="(item,index) in listData">
					<span>订单号 : {{item.borrowMoney}}</span>
					<div class="mainListL" :class="listCss(item.repaymentStatus)">{{item.repaymentStatus}}</div>
				</div>
				<div class="listFooter"></div>		
			</div>
		</div>
	</div>
</template>

<script>
	import $ from 'jquery'	
	export default {
	name: 'order',
	data() {
		return {
			noDataBool: "",
			clientHeight: `${document.documentElement.clientHeight - 40}px`,
			cookieToken:'',
			NextData:{
				repaymentMoney:'1007',
				repaymentDueTime:'2018.5.20',
				grantTime:'7'
			},
			listData:'',
		}
	},
	  created(){
  	var _self=this;
 	console.log(_self.$route);
 	_self.cookieToken=_self.$route.params.cookieToken;
		this.$ajax({
			method:'get',
			url:'/api/order/getOrerList',
			headers:{ "cookieToken": _self.cookieToken},
			 withCredentials: true,           
            responseType: 'json',
            timeout: 50000
		}).then((res)=>{
					res=res.data;	
					console.log(res.data.length);
				if(res.data.length>0){
					_self.noDataBool=true;
					_self.listData=res.data;

				}else{
					_self.noDataBool=false;
				}
					
				}).catch((err)=>{
					console.log(err);
				});
    },
	mounted() {
		// 动态设置背景图的高度为浏览器可视区域高度

		// 首先在Virtual DOM渲染数据时，设置下背景图的高度．
		this.clientHeight.height = `${document.documentElement.clientHeight-40}px`;
		// 然后监听window的resize事件．在浏览器窗口变化时再设置下背景图高度．
		const that = this;
		window.onresize = function temp() {
			that.clientHeight = `${document.documentElement.clientHeight-40}px`;
		};
	},
	methods:{
		//还款事件
		returnM(){
			
		},
		//判断数据 属性
		listCss:function(e){
			if(e=='已还'){
				return 'activeBlue';
			}else{
				return 'activeRed';
			}
		}
	}
}</script>

<style scoped>
	.orderContent{
		width: 100%;
		height: 100%;
		max-height:772px;
	background-color:#E0E0E0;
		
	}
	.orderContent.noData{
		background-image: url(../img/icon_noData.png);
		background-size:auto;
		background-repeat: no-repeat;
		background-position: center;
	}
	.order_top{
		width: 100%;
		height: 30px;
		background: #00aaef;
	}
.order_top>img{
	width:25px;
	height: 25px;
	margin: 2.5px;
	float: right;
}
.topContent{
	width: calc(100% - 60px);
	height: 100px;
	margin: 15px;
	border-radius: 5px;
	background: white;
	padding: 15px;
	
}
.topCTitle{
	width: 100%;
	height: 17px;
	height: 17px;
	line-height: 17px;
	color:#8C8C8C;
	margin-bottom: 10px;
}
.topCT{
	width: 100%;	
	color:#808080;
	font-size: 12px;
}
.topCT div{
	display: inline-block;
}
.topCTL{
	float: left;
}
.topCTR{
	float: right;
	color:#009DE9;
}
.topLists{
	width: 100%;
	height:45px;
	margin-top: 15px;
}
.topList{
	width: calc(100%-2px);
	height: 43px;
	border: 1px solid #009DE9;
	position: relative;
	}
	.topList div{		
		text-align: center;
	}
	.topListL{
		width:20%;
		height: 43px;
		border-right:1px solid #009DE9;		
		background: #009DE9;	
		color: white;
		font-size: 14px;
		line-height: 43px;
		display: inline-block;
	}
	.topListMid{
		width: calc(58% - 3px);
		height: 43px;
		display: inline-block;
		position: absolute;
		left: 0;
		right: 0;
		margin: 0 auto;
		display: inline-block;
	}
	.topListR{
		width:20%;
		height: 43px;
		border-left:1px solid #009DE9;
		line-height: 43px;
		background: #009DE9;
		float: right;
		font-size: 14px;
		color: white;
		display: inline-block;
		
	}
	.midTop{
		font-size: 12px;
		color: #002752;
		margin-top:5px ;
	}
	.midFooter{
		font-size: 16px;
		color: #009DE9;
	}
.mainContent{
	width: calc(100% - 30px);
	height: 300px;
	margin: 10px;
	padding:5px;

	overflow:auto;/* winphone8和android4+ */
	-webkit-overflow-scrolling: touch; /* ios5+ */
	overflow-x: hidden;	
}
.mainListT{
	width: calc(100%-20px);
	height: 20px;
	text-align: left;
	padding: 5px;
	color:#8C8C8C;
	font-size: 16px;
	border:1px solid #CCCCCC;
	border-radius: 5px 5px 0px 0px;
	background-color: white;  
	line-height: 20px;
}
.mainLists{
	width: calc(100%-20px);
	height: 20px;	
	margin: 5px 0;
	padding-left:5px;
	color:#8C8C8C;
	font-size: 12px;
	border:1px solid #CCCCCC;
	background-color: white;  
	line-height: 20px;
}
.mainListL{
	width: 60px;
	height: 20px;
	line-height: 20px;
	float: right;
	text-align: center;
	color: white;
}
.mainListL.activeBlue{
	background: #009DE9;
}
.mainListL.activeRed{
	background: red;
}
.listFooter{
	width: calc(100%-20px);
	height: 15px;
	border:1px solid #CCCCCC;
	padding-top:5px;
	border-radius: 0px 0px 5px 5px ;
	background-color: white;   
}
</style>