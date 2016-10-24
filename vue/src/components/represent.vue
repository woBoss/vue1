<style scoped lang="stylus">
	.represent
		// height  2000px
		.reprediv
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
</style>
<template>
	<div class="represent width1180">
		<div class="reprediv width1180" v-for="item1 of arr1">
			<div class="daidiv" v-for="item of arr">
				<img :src="item.urll">
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
	</div>
</template>
<script >
	export default {
		data(){
			return {
				arr : [
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
				arr1 : [
					{},
					{},
					{},
					{},
					{},
				]
			}
		}
	}
</script>