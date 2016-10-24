<style scoped lang="stylus">
	.red
		color red
	.nav
		width 100%
		height 40px
		background-color rgb(188,188,188)
		position relative
		ul	
			// float left
			li
				float left
				line-height 40px
				margin-left 40px
				text-align center
				cursor pointer
		.li1
			width 180px
			height 40px
			margin-left 0
			background-color rgb(147,147,147)
			position relative
			float left
			text-align center
			line-height 40px
			cursor pointer
			z-index 99999
			span
				position absolute
				left 10px
				font-weight bolder
				top 12px
			i
				position absolute
				right 10px
				font-weight bolder
				top 12px	
				font-size 14px
		.li1:hover+.div1
		.div1:hover
			display block
		.div1
			width 180px
			border 1px solid rgb(147,147,147)
			position absolute
			lfet 0
			top 39px
			box-sizing border-box
			background-color white
			z-index 19999
			display none
			.li
				width 100%
				height 70px
				font-size 16px
				p
					font-weight bolder
					font-size 18px
					line-height 2.5
					text-indent 10px
				span
					display inline-block
					margin-left 10px
			
</style>
<template>
	<div class="nav">
		<div class="width1180">
			<div class="li1">
				<span>三</span>
				全部商品
				<i>v</i>
			</div>
			<div class="div1">
				<div class="li" v-for="item of arr1">
					<p>{{item.name}} </p>
					<span v-for="list of item.other" :class="list.class">{{list.jie}} </span>
				</div>
			</div>
			<ul class="navli">
				<li v-on:mouseover = "greet"><router-link to="/">首页</router-link></li>
				<li><router-link to="/main">品牌首发</router-link></li>
				<li><router-link to="/brand"> 品牌街</couter-link></li>
				<li><router-link to="/represent"> 为我代言</router-link></li>
				<li><router-link to="/apply" >创意申请</router-link></li>
				<li><router-link to="/activity"> 活动</router-link></li>
			</ul>
			
		</div>	
	</div>
</template>
<script >
	export default {
		data(){
			return{
				arr1:[
					{
						name : "钻石",
						other : [
							{
								jie : "30分"
							},
							{
								jie : "50分"
							},
							{
								jie : "格拉钻",
								class :"red"
							}
						]
					},
					{
						name : "钻戒",
						other : [
							{
								jie : "30分"
							},
							{
								jie : "50分"
							},
							{
								jie : "铂金",
								class:"red"
							}
						]
					},
					{
						name : "对戒",
						other : [
							{
								jie : "铂金对戒"
							},
							{
								jie : "靠近对戒"
							}
						]
					},
					{
						name : "配饰",
						other : [
							{
								jie : "吊坠"
							},
							{
								jie : "项链",
								class : "red"
							},
							{
								jie : "套链"
							}
						]
					},
					{
						name : "系列产品",
						other : [
							{
								jie : "宠爱婚戒"
							}
						]
					},
					{
						name : "热门产品",
						other : [
							{
								jie : "50分裸钻"
							},
							{
								jie : "70分裸钻",
								class : "red"
							}
						]
					}
				]
			}
		},
		methods:{
			greet : ()=>{
				let lis = document.querySelector(".navli")
				console.log(1);
				console.log(this);
				lis.style.backgroundColor = "skyblue";
			}
		}
	};
	// function onLi(){
	// 	let lis = document.querySelectorAll(".navli li");	
	// 	for(let i = 0;i<lis.length;i++){
	// 		console.log(lis);
	// 		lis[i].addEventListener("onclick",()=>{
	// 			this.style.backgroundColor="skyblue";
	// 			console.log(1);
	// 		},1) ;
	// 	};
	// };
	// onLi();
</script>