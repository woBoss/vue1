<style coped lang="stylus">
	.header
		height 110px
		line-height @height
		box-sizing border-box
		position relative
		z-index 99
		.left
			wdith 180px
			height @height
			line-height @height
			position relative
			float left 
			i
				font-size 30px
				font-weight bolder
			span
				display inline-block
				height 30px
			span:hover .lalala
				display block
			.lalala
				width 440px
				height 130px
				position absolute
				left 90px
				top 75px
				border 1px solid grey
				background-color white
				display none
				ul
					display inline-block
					margin-top 6px
					font-size 14px
					&:nth-child(1)
						margin-top 20px
					li
						float left
						margin-left 15px
						height 20px
						line-height 20px
						cursor pointer
		.mid
			float left
			margin-top 35px
			margin-left 150px
			width 550px
			height 38px
			border 1px solid lightgrey
			position relative
			input
				width 500px
				height 30px
				font-size 16px
				color grey
				margin 4px 0 0 10px
				outline none
				border none
			span
				position absolute
				top 10px
				background-color rgb(243,243,243)
				display inline-block
				font-size 14px
				line-height 20px
				height 20px
				&:hover
					background-color lightgrey
					cursor pointer
			.span1
				right 180px
			.span2
				right 130px
			.span3
				right 50px
			.midend
				width 38px
				height @width
				background url(../assets/a2.png) no-repeat
				border-left 1px solid lightgrey
				float right
				cursor pointer
		.end
			float left 
			margin-top 35px
			margin-left 30px
			width 120px
			height 38px
			text-align center
			color grey
			line-height @height
			border 1px solid lightgrey
			position relative
			.end1
				width 320px
				height 170px
				border 1px solid lightgrey
				background url(../assets/a3.png) no-repeat
				position absolute
				left -30px
				display none
			&:hover .end1
				display block
		.img
			width 70px
			height 90px
			position absolute
			text-align center
			right 10px
			top 20px
			img
				width 70px
				height 70px	
</style>
<template>
    <div class="header width1180">
    	<div class="left">
    		<i>LOGO</i>
    		<span>广东 ▼
    			<div class="lalala">
    			<ul v-for="item of arrul">
    				<li>{{item.name}} </li>
    				<li v-for="list of item.place">{{list.name}} </li>
    			</ul>
    		</div>
    		</span>
    		
    	</div>

    	<div class="mid">
    		<input class="midinput" value="搜索您需要的关键词"  onblur="if(this.value==''){this.value='搜索您需要的关键词'}" onfocus="if(this.value=='搜索您需要的关键词'){this.value=''}" />
    		<span class="span1">queenyjewelry</span>
    		<span class="span2">钻戒</span>
    		<span class="span3">铂金对戒</span>
    		<div class="midend"></div>
    	</div>
    	<div class="end">
    		我的首饰盒 ▼
    		<div class="end1"></div>
    	</div>
    	<div class="img">
    		<img src="../assets/a1.jpg">
    		女王微信
    	</div>	
    </div>
</template>
<script>
	export default {
		data(){
			return{
				arrul:[
					{
						name : "A-G",
						place : [
							{
								name : "北京"
							},
							{
								name : "重庆"
							},
							{
								name : "福建"
							},
							{
								name : "广东"
							},
							{
								name : "广西"
							},
							{
								name : "甘肃"
							},
							{
								name : "贵州"
							},
						]
					},
					{
						name : "H-J",
						place : [
							{
								name : "河北"
							},
							{
								name : "河南"
							},
							{
								name : "海南"
							},
							{
								name : "湖北"
							},
							{
								name : "黑龙江"
							},
							{
								name : "吉林"
							},
							{
								name : "江苏"
							},
							{
								name : "江西"
							}
						]
					},
					{
						name : "L-S",
						place : [
							{
								name : "北京"
							},
							{
								name : "重庆"
							},
							{
								name : "福建"
							},
							{
								name : "广东"
							},
							{
								name : "广西"
							},
							{
								name : "甘肃"
							},
							{
								name : "贵州"
							},
							{
								name : "江西"
							}
						]
					},
					{
						name : "A-G",
						place : [
							{
								name : "北京"
							},
							{
								name : "重庆"
							},
							{
								name : "福建"
							},
							{
								name : "广东"
							},
							{
								name : "广西"
							}
						
						]
					}
				]
			}
		}
	}
	// function midinput(){
	// 	let midin = document.querySelector(".midinput");
	// 	midin.onfocus = function(){
	// 		if(this.value=='搜索您需要的关键词'){this.value=''}
	// 	};
	// 	midin.onblur = function(){
	// 		if(this.value==''){this.value='搜索您需要的关键词'}
	// 	};
	// }
	// midinput();
</script>