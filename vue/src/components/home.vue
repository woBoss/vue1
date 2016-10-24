<style scoped lang="stylus">
	.home
		height 2600px
		.top
			width 1900px
			height 350px
			position relative
			left -30.5%
			ul
				position absolute
				bottom 20px
				left 50%
				transform translateX(-50%)
				li
					width 60px
					height 6px
					background-color rgb(188,188,188)
					float left
					margin-left 20px
					cursor pointer
					&.current
						background-color white
			img
				position absolute
				width 1900px
				height 350px
				display none
				&.current
					display block
			.homenav
				position absolute
				top 30%
				left 25%
				font-size 36px
				font-weight bolder
				p
					color white
					line-height 1.2
		.hot
			height 680px
			.img
				width 220px
				height 270px
				text-align center
				float left 
				margin-top 30px
				margin-left 13px
				
				span
					padding 10px 10px
					line-height 2.5
		.xiaotop
				height 50px
				font-size 24px
				line-height @height
				font-weight bolder
				margin-top 20px
				.yuan
					width 50px
					height @width
					background-color rgb(242,242,242)
					border-radius 50%
					float right
					text-align center
					line-height @height
					color rgb(188,188,188)
					font-weight bolder
					font-size 26px
		.shoufa
			height 1110px
			.img1
				height 340px
				margin-top 30px
				position relative
				>i
					position absolute
					font-size 22px
					font-weight bolder
					color white
					top 30px
					left 30px
					z-index 222
			.shouimg
				position absolute
			.xiao
				position relative
				width 400px
				height 300px
				background-color white
				float right
				margin  20px 20px 0
				.xtop
					width 100%
					height 30px
					background-color rgb(107,107,107)
					font-size 14px
					line-height @height
					text-align center
					color white
				.ximg
					margin-top 40px
					margin-left 20px
					width 180px
					height @width
				.xiaodiv
					margin-top 40px
					width 160px
					height 210px
					float right
					position relative
					span
						font-size 14px
						display inline-block
					p
						font-size 14px
						font-weight bold
						line-height 1.5
						i
							font-size 22px
					.xiaop
						margin-top 30px
					.xiaop1
						margin-top 70px
					.xiaop2
						margin-top 10px
					.xiaoshopping
						position absolute
						width 100px
						height 30px
						background-color rgb(81,81,81)
						color white
						line-height @height
						text-align center
						font-size 14px
						bottom 70px
						right 0
					.shoppingimg
						position absolute
						bottom 70px
						right 100px
		.daiyan
			height 450px
			font-size 12px
			.daidiv
				width 580px
				height 200px
				float left
				margin-top 20px
				&:nth-child(2)
				&:nth-child(4)
					margin-left 20px
				.daidiv1
					position relative
					width 176px
					height 100%
					float right
					span
						display block
					.daiv
						position absolute
						right 0
						width 100px
						height 30px
						text-align center
						line-height @height
						color white
					.daiv1
						background-color rgb(81,81,81)
						top 80px
					.daiv2
						background-color rgb(121,121,121)
						top 120px
					.daispan1
						font-size 20px
						text-align center
						margin-top 28px
					img
						margin-top 50px
					.daispan2
						line-height 2.5
		.shishang
			height 300px
			margin-top 20px
			.shi
				width 380px
				height 280px
				float left
				&:nth-child(1)
				&:nth-child(2)
					margin-right 20px
				h3
					font-size 20px
				img
					width 180px
					heigt 160px
					margin-top 30px
				.ship
					float right
					margin-top 30px
					width 170px
					height 160px
					font-size 14px
					line-height 1.6
					letter-spacing 1px
					margin-right 5px
				span
					display inline-block
					margin-top 25px
					margin-right 10px
</style>
<template>
	<div class="home width1180">
		<div class="top">
			<img v-for="sn of imgs" :src="sn.urll" :class="{'current':sn.current}" />	
			<ul>
				<li v-for="list of lis" :class="{ 'current':list.current}" v-on:click="methods($event)"></li>
			</ul>
			<div class="homenav">
				<p>我是女王，我做主 !</p>
				<p>我的品牌我代言！</p>
			</div>
		</div>
		<div class="width1180 hot">
			<div class="xiaotop width1180">	
				女王人气Top 10
				<div class="yuan">+</div>
			</div>
			<div class="img" v-for="item of arr">
				<div class="xiaoimg">
					<img :src="item.urll">
				</div>
				<span>QueenJewelry</span><span> ♥ 999</span> 
			</div>
		</div>
		<div class="xiaotop width1180">	
			首发品牌
			<div class="yuan">+</div>
		</div>
		<div class="shoufa width1180">
			<div class="img1 width1180" v-for="item1 of arr1">
				<i>LOGO</i>
				<img class="shouimg" :src="item1.bg">
				<div class="xiao">

					<div class="xtop">
						距首发结束:20天18时18分18秒
					</div>
					<img class="ximg" :src="item1.urll">
					<div class="xiaodiv">
						<p>代言人：
							<i>{{item1.name}}</i>
						</p>
						<span class="xiaop">拒绝平庸，追求卓越</span>
						<span>凸显个性，绝不将就</span>
						<div class="xiaoshopping">立即购买</div>
						<img class="shoppingimg" src="../assets/ab1.png">
						<span class="xiaop1" >9999人喜欢</span>
						<span class="xiaop2">10000人已经购买</span>
				</div>
			</div>
		</div>
		<div class="xiaotop width1180">	
			为我代言
			<div class="yuan">+</div>
		</div>
		<div class="daiyan width1180">
			<div class="daidiv" v-for="item2 of arr2">
				<img :src="item2.urll">
				<div class="daidiv1">
					<span class="daispan1">QueenJewelry</span>
					<img src="../assets/ab1.png">
					<span class="daispan2">9999人喜欢</span>
					<span>10000人已购买</span>
					<div class="daiv daiv1">我要代言</div>
					<div class="daiv daiv2">立即购买</div>
				</div>
			</div>
		</div>
		<div class="xiaotop width1180">	
			我的时尚
			<div class="yuan">+</div>
		</div>
		<div class="shishang width1180">
			<div class="shi" v-for="item3 of arr3">
				<h3>2015春夏流行色：魅惑黑色</h3>
				<img :src="item3.urll">
				<div class="ship">黑色之所以经久不衰,小编猜应该有不少原因,不过肯定逃不脱穿腻了夏日缤纷色彩的心理,不妨从一周中抽出一天来,穿上黑寡妇斯嘉丽最爱的AllBlack造型,这种帅气简单,也能让别人眼前一亮。</div>
				<span>Queen &nbsp; &nbsp; &nbsp;2015-06-02 </span>
				<span>♥ 999</span>
				<span>☛ 99</span>
				<span>☺ 99</span>
			</div>
		</div>
	</div>
</template>
<script >
	export default {
		data(){
			return {
				methods : (event)=>{
					let spans = this.$el.querySelectorAll("li"),
						imgs = this.$el.querySelectorAll("img"),
						i;
					imgs.forEach((item)=>{
						item.classList.remove("current");
					});
					spans.forEach((item,index)=>{
						item.classList.remove("current");
						if(item == event.currentTarget){
							spans[index].classList.add("current");
							imgs[index].classList.add("current");
						}
					})
				},
				imgs : [
					{
						urll:require("../assets/u1.jpg"),
						current : 1
					},
					{
						urll:require("../assets/u2.jpg"),
						current : 0
					},
					{
						urll:require("../assets/u3.jpg"),
						current : 0
					},
					{
						urll:require("../assets/u4.jpg"),
						current : 0
					}
				],
				lis: [
					{
						current : 1,
						content : ""
					},
					{
						current : 0,
						content : ""
					},
					{
						current : 0,
						content : ""
					},
					{
						current : 0,
						content : ""
					}
				],
				arr : [
					{
						urll : require('../assets/aa1.png')
					},
					{
						urll : require('../assets/aa2.png')
					},
					{
						urll : require('../assets/aa3.png')
					},
					{
						urll : require('../assets/aa4.png')
					},
					{
						urll : require('../assets/aa5.png')
					},
					{
						urll : require('../assets/aa6.png')
					},
					{
						urll : require('../assets/aa7.png')

					},
					{
						urll : require('../assets/aa8.png')

					},
					{
						urll : require('../assets/aa9.png')

					},
					{
						urll : require('../assets/aa10.png')

					}
				],
				arr1 : [
					{
						urll: require("../assets/bbb1.png"),
						name : "aaaaa",
						bg : require("../assets/bb3.jpg")
					},
					{
						urll: require("../assets/bbb2.png"),
						name : "bbbbb",
						bg : require("../assets/bb2.jpg")
					},
					{
						urll: require("../assets/bbb3.png"),
						name : "ccccc",
						bg : require("../assets/bb1.jpg")
					}
				],
				arr2 : [
					{
						urll : require('../assets/dd1.jpg')

					},
					{
						urll : require('../assets/dd2.jpg')

					},
					{
						urll : require('../assets/dd3.jpg')

					},
					{
						urll : require('../assets/dd4.jpg')

					}
				],
				arr3 : [
					{
						urll : require('../assets/c1.jpg')

					},
					{
						urll : require('../assets/c2.jpg')

					},
					{
						urll : require('../assets/c3.jpg')

					}
				]
			}
		}
	}
</script>