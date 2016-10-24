<style coped lang="stylus">
	.main	
		margin-top 50px
		.left
			width 880px
			height 100%
			position relative
			float left
			.today
				background-color rgb(121,121,121)
				width 100px
				height 30px
				position absolute
				top 0
				left 0
				text-align center
				color white
				line-height @height
				z-index 1
				cursor pointer
		.left1
			position relative
			margin-top 20px
			width 100%
			height 250px
			box-shadow 5px 5px 9px #888
		.leftimg
			width 600px
			height 250px
			background-size 100%
			float left
			overflow hidden
			img
				width 100%
		.leftRig
			float right
			width 250px	
			height 250px
			background-color white
			.logo
				width 200px
				height 80px
				border-bottom 1px solid lightgrey
				margin 40px auto
				text-align center
				i
					display inline-block
					font-size 40px
					font-weight bolder
				span
					display block
					margin-top 10px
			.sanjiao
				width 0
				height 0
				border-color transparent rgb(121,121,121) transparent transparent
				border-style solid
				border-width 20px
				position absolute
				top 150px
				right 200px
			.sijiao
				width 200px
				height 40px
				background-color rgb(121,121,121)
				position absolute
				top 150px
				right 0
				text-align center
				color white
				font-size 20px
				line-height 40px
			.bottom
				margin-top 90px
				font-size 14px
				text-align center
		.right
			width 280px
			height 100%
			float left 
			margin-left 20px
			>div
				box-sizing border-box
		.rightdiv
			width 280px
			height 270px
			border 1px solid lightgrey
			border-top 3px solid black
			h1
				font-size 14px
				margin-left 20px
				margin-top 10px	
			div
				margin-top 30px
				margin-left 20px
				line-height 1.5
				padding-bottom 20px
				border-bottom 1px solid lightgrey
				p
					font-size 18px
					font-weight bolder
			.nobor
				border none
		.rightdiv1
			margin-top 20px
			width 100%
			border-top 3px solid black
			line-height 2
			text-indent 2em
			font-size 14px
		.rightdiv2
			margin-top 20px
			width 100%
			height 450px
			border-bottom 1px solid lightgrey
			position relative
			i
				font-weight bolder
				position absolute
				font-size 20px
				top 15px
				left 20px
			.img
				width 100%
				height 280px
				cursor pointer
				img
					width 100%
					height 100%
			.rightbot
				margin 20px auto
				width 96%
				height 125px
				background-color white
				p
					line-height 1.2
					cursor pointer
				span
					display inline-block
					margin-top 20px
					margin-left 10px
					&:first-child
							margin-left 0
				.shopping
					width 100%
					height 40px
					background-color rgb(134,134,134)
					text-align center
					line-height @height
					color white
					font-size 14px
					margin-top 10px
					cursor pointer
</style>

<template>
	<div class="main width1180">
		<div class="left">
			<div class="today">今日首发</div>

			<div v-for="item of arr" class="left1">
				<div class="leftimg">
					<img :src="item.urll">
				</div>
				<div class="leftRig">
					<div class="logo">
						<i>logo</i>
						<span>Queen Jewelry  新宠</span>
					</div>	
					<div class="sanjiao"></div>
					<div class="sijiao">我要代言</div>
					<div class="bottom">距首发结束：12天12时12分12秒</div>
				</div>
			</div>
		</div>
		<div class="right">
			<div class="rightdiv">
				<h1>女王宣言</h1>
				<div>
					<p>我是女王我做主！</p>
					我是女王我做主，我是女王我做主，我是女王我做主，我是女王我做主，
				</div>
				<div class="nobor">
					<p>我的品牌我代言！</p>
					我是女王我做主，我是女王我做主，我是女王我做主，我是女王我做主，
				</div>
			</div>
			<div class="rightdiv1">爆款推荐</div>
			
			<div class="rightdiv2" v-for="item1 of arr2">
				<i>Logo</i>
				<div class="img">
					<img :src="item1.urll" />
				</div>
				<div class="rightbot">
					<p>某某系列珠宝首饰,采用设计平凡设计理念打造平凡时尚</p>
					<span>￥999.00</span>
					<span>♥ 999</span>
					<span>☛ 99</span>
					<span>☺ 99</span>
					<div class="shopping">点击购买</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		data(){
			return{
				arr : [
					{
						urll : require('../assets/b1.jpg')
					},
					{
						urll : require('../assets/b2.jpg')
					},
					{
						urll : require('../assets/b3.jpg')
					},
					{
						urll : require('../assets/b4.jpg')
					},
					{
						urll : require('../assets/b5.jpg')
					},
					{
						urll : require('../assets/b6.jpg')
					},
					{
						urll : require('../assets/b5.jpg')

					},
					{
						urll : require('../assets/b3.jpg')

					},
					{
						urll : require('../assets/b2.jpg')

					},
					{
						urll : require('../assets/b1.jpg')

					},
					{
						urll : require('../assets/b5.jpg')

					},
					{
						urll : require('../assets/b2.jpg')

					},
					{
						urll : require('../assets/b3.jpg')

					},
					{
						urll : require('../assets/b1.jpg')

					},
					{
						urll : require('../assets/b2.jpg')

					}
				],
				arr2 : [
					{
						urll : require('../assets/c1.jpg')
					},
					{
						urll : require('../assets/c2.jpg')
					},
					{
						urll : require('../assets/b3.jpg')
					},
					{
						urll : require('../assets/c5.jpg')
					},
					{
						urll : require('../assets/c4.jpg')
					},
					{
						urll : require('../assets/c1.jpg')
					},
					{
						urll : require('../assets/c3.jpg')
					},
					{
						urll : require('../assets/c2.jpg')
					}
				]
			}
		}
	}
</script>