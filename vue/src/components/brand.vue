<style scoped lang="stylus">
	.brand
		height  4000px
		.top
			width 1900px
			height 350px
			position relative
			left -30.5%
			.homenav
				position absolute
				top 30%
				left 25%
				font-size 36px
				font-weight bolder
				p
					color white
					line-height 1.2
		.mid
			margin-top 80px
			height 2200px
			.left
				float left
				width 220px
				.leftdiv
					margin-top 30px
					width 220px
					height 330px
					background-color rgb(81,81,81)
					text-align center
					overflow hidden
					span
						color white
						font-weight bolder
						display block
					.leftspan1
						margin-top 100px
						font-size 40px
					.leftspan2
						margin-top 30px
						font-size 24px
						color rgb(215,215,215)
			.right
				float right
				width 940px
				.rightdiv
					margin-top 70px
					width 940px
					height 290px
					box-sizing border-box
					border 1px solid lightgrey
					border-top 2px solid black
					position relative
					.ye
						position absolute
						text-align center
						right 0
						top -27px
						cursor pointer
						>div
							height 25px
							line-height @height
							color white
							float left
						.ye1
							width 75px
							background-color rgb(121,121,121)
						.ye2
							width 25px
							background-color rgb(161,161,161)
					.rigdiv
						width 220px
						height 100%
						background-color white
						float left
						margin-left 12px
						// &:nth-child(2)
						// 	margin-left 0
						>img
							width 200px
							height @width
							margin 10px 10px 0
						span
							display inline-block
							line-height 2
						.rigspan1
							margin-left 10px
						.rigspan2 
							margin-left 53px
						.rigspan3
							margin-left 40px
							margin-top 10px	
</style>
<template>
	<div class="brand width1180">
		<div class="top">
			<img src="../assets/u1.jpg">
			<div class="homenav">
				<p>我是女王，我做主 !</p>
				<p>我的品牌我代言！</p>
			</div>
		</div>
		<div class="mid width1180">
			<div class="left">
				<div class="leftdiv" v-for="item of arr">
					<span class="leftspan1">LOGO</span>
					<span class="leftspan2">女王珠宝</span>
				</div>
			</div>
			<div class="right">
				<div class="rightdiv" v-for="item1 of arr1">
					<div class="ye">
						<div class="ye1">了解更多</div>
						<div class="ye2"> >> </div>
					</div>
					<div class="rigdiv" v-for="item2 of arr2">
						<img :src="item2.urll" >
						<span class="rigspan1">QueenJewelry</span>
						<span class="rigspan2">￥99</span>
						<span class="rigspan3">♥ 999 &nbsp; ☛ 99 &nbsp;&nbsp;☺ 99</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script >
	export default {
		data(){
			return {
				arr : [
					{},
					{},
					{},
					{},
					{},
					{},
					{},
					{},
					{},
					{}
				],
				arr1 : [
					{},
					{},
					{},
					{},
					{},
					{},
					{},
					{},
					{},
					{}
				],
				arr2 : [
					{
						urll:require("../assets/c1.jpg")
					},
					{
						urll:require("../assets/c2.jpg")
					},
					{
						urll:require("../assets/c3.jpg")
					},
					{
						urll:require("../assets/c8.jpg")
					}
				]
			}
		}
	}
</script>