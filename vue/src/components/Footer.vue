<style scoped lang="stylus">
	.footer
		margin-top 80px
		height 300px
		.big
			font-size 24px
			font-weight bolder
		.wid
			width 70px
			height @width
		a
			font-size 12px
		.bottom0
			border-top 1px solid rgb(215,215,215)
			overflow hidden
			ul
				float left
				padding 35px 0 
				width 190px
				margin-left 5px
				li
					&:nth-child(1)
						margin-bottom 30px
						font-size 18px
						font-weight bold
					margin-top 10px
					line-hieght 2
		.bottom1
			height 40px
			background-color rgb(228,228,228)
			a
				display inline-block
				margin-top 20px
				margin-right 20px
				line-hieght 20px
		.bottom2
			padding 24px 0
			background-color rgb(242,242,242)
			p
				text-indent 31em
				font-size 12px
				line-height 15px
</style>
<template>
    <div class="footer">
    	<div class="bottom0 width1180">
    		<ul v-for="item of arrAnchor1">
    			<li>{{item.name}}</li>
    			<li v-for="anchor of item.anchor">
    				<a :href="anchor.href" :class="anchor.class">{{anchor.name}}</a>
    				<img :class="anchor.url" :src="anchor.img">
    			</li>
    		</ul>
    	</div>
    	<div class="bottom1">
    		<div class="width1180">
    			<a v-for="anchor of arrAnchor2" :href="anchor">{{anchor.name}} </a>
    		</div>
    	</div>
    	<div class="bottom2">
				<div class="w1180">
					<p>COPYRIGHT  2010-2015 女王珠宝有限公司   anqueen.com 保留一切权利。客服热线：12345678912</p>
					<p>深圳公网安备 XXXXXXXXXX | 京ICP证XXXXXX号 | 营业执照</p>
				</div>
		</div>
	
	</div>
</template>
<script>
	export default {
		data(){
			return {
				arrAnchor1 : [
					{
						name : "使用帮助",
						anchor : [
							{
								name : "新手指南",
								href : "/rookie"
							},
							{
								name : "常见问题",
								href : "/qa"
							},
							{
								name : "帮助中心",
								href : "/help"
							},
							{
								name : "用户协议",
								href : "/agreement"
							}
						]
					},
					{
						name : "支付方式",
						anchor : [
							{
								name : "新手指南",
								href : "/rookie"
							},
							{
								name : "常见问题",
								href : "/qa"
							},
							{
								name : "帮助中心",
								href : "/help"
							},
							{
								name : "用户协议",
								href : "/agreement"
							}
						]
					},
					{
						name : "配送方式",
						anchor : [
							{
								name : "新手指南",
								href : "/rookie"
							},
							{
								name : "常见问题",
								href : "/qa"
							},
							{
								name : "帮助中心",
								href : "/help"
							},
							{
								name : "用户协议",
								href : "/agreement"
							}
						]
					},
					{
						name : "售后服务",
						anchor : [
							{
								name : "新手指南",
								href : "/rookie"
							},
							{
								name : "常见问题",
								href : "/qa"
							},
							{
								name : "帮助中心",
								href : "/help"
							},
							{
								name : "用户协议",
								href : "/agreement"
							}
						]
					},
					{
						name : "客服热线",
						anchor : [
							{
								name : "12345678912",
								class : "big"
							},
							{
								name :"（周一至周日，9:00-21:00）"
							}
						]
					},
					{
						name : "女王微信",
						anchor : [
							{
								img : require('../assets/a1.jpg'),
								url : "wid"
							},
							{
								name : "女王官方微信"
							}
						]
					}
				],
				arrAnchor2 : [{
					name : "关于女王珠宝",
					href : "/about"
				},
				{
					name : "申请代言",
					href : "/about"
				},
				{
					name : "加入女王珠宝",
					href : "/about"
				},
				{
					name : "品牌街",
					href : "/about"
				},
				{
					name : "媒体报道",
					href : "/about"
				},
				{
					name : "商务合作",
					href : "/about"
				}]
			};
		}
	}
</script>
