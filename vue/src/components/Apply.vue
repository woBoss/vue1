<style scoped lang="stylus">
.meter
	position relative
	overflow hidden
	&.step1
		.progress
			border-right-width 705px
			border-left-width 475px
	&.step2
		.progress
			border-right-width 471px
			border-left-width 709px
	&.step3
		.progress
			border-right-width 0
			border-left-width 1180px
	.progress
		position absolute
		top 89px
		height 2px
		border-style none solid
		border-right-color rgb(188,188,188)
		border-left-color black
	.circle
		position relative
		float left
		width 36px
		height @width
		margin-top 70px
		border-width 2px
		border-style solid
		border-radius 50%
		text-align center
		line-height @height
		z-index 1
		&.normal
			background-color white
			border-color rgb(188,188,188)
		&.done
			background-color black
			border-color @background-color
			color white
		&:before
			position absolute
			top -44px
			left ((@width + @border-width * 2) / 2)
			font-size 15px
			white-space nowrap
			color black
			transform translateX(-50%)
		&:nth-of-type(1)
			margin-left 338px
			&:before
				content "描述您的需求"
		&:nth-of-type(2)
			margin-left 194px
			&:before
				content "预览您的需求"
		&:nth-of-type(3)
			margin-left 194px
			&:before
				content "发送需求成功"
.main
	height 680px
	.info
		width 280px
		height 100%
		float right 
		background-color rgb(242,242,242)
		.info1
			width 220px
			height 170px
			border-bottom 1px dotted lightgrey
			margin 0 auto
			span
				display block
				line-height 1.5
				font-size 14px
				&:nth-of-type(1)
					margin-top 30px
					font-size 18px
					font-weight bold
				&:nth-of-type(2)
					margin-top 20px
			.infospan1
				font-size 22px
				line-height 2
		>img
			width 170px
			height 170px
			margin-top 55px
			margin-left 30px
	form
		padding 30px
		float left
		width 838px
		height 618px
		border 1px solid rgb(242,242,242)
		position relative
		label
			font-size 14px
			&:not([for="sltype"])
				display block
		select
			height 25px
		>div
			&:not(:first-of-type)
				margin-top 30px
		.ipt-txt
			margin-top 18px
			height 28px
			border 1px soilid rgb(169,169,169)
			&#iptrep
				width 651px
			&:not(#iptrep)
				width 210px
		.code
			width 130px
			height 30px
			background-color rgb(242,242,242)
			border 1px solid rgb(228,228,228)
			cursor pointer
			outline none
		textarea
			margin-top 18px
			width 653px
			height 183px
		.image
			width 80px
			height @width
			background-color rgb(242,242,242)
			background-repeat no-repeat
			background-position center
			background-size contain
			border 1px solid rgb(228,228,228)
			border-radius 2px
			float left
			[type="file"]
				width @width
				height @height
				opacity 0
				&::-webkit-file-upload-button
					display none
		p
			line-height 2
			font-size 12px
			float left
			margin-left 20px
			margin-top 30px
		a
			font-weight bold
			font-size 12px
			float left
			margin-left 10px
			margin-top 36px
		.next
			width 100px
			height 30px
			background-color rgb(134,134,134)
			border-style none
			border-radius 2px
			color white
			cursor pointer
			clear both
			position absolute
			bottom 10px
			left 30px
</style>
<template>
	<div class="apply width1180">
		<div class="meter step2">
			<div class="circle done">1</div>
			<div class="circle done">2</div>
			<div class="circle normal">3</div>
			<div class="progress"></div>
		</div>
		<div class="main width1180">
			<form>
				<div>
					<label for="sltype">选择类目：</label>
					<select id="sltype" v-model="type" multiple>
						<option v-for="item of arrTypes" :value=" item.value" v-text="item.name" ></option>
					</select>
				</div>
				<div>
					<label for="iptrep">简单描述您的需求：</label>
					<input for="iptrep" v-model="req"  @input="handleValidate('req', $event)"/>
				</div>
				<div>
					<label>留下您的联系方式，方便交易顾问联系您 ：</label>
					<input class="ipt-txt" placeholder="请输入手机验证码 " v-model="tel" @input="handleValidate('tel', $event)" />
					<input class="code"  type="button" value="获取手机验证码" />
					<br/>
					<input class="ipt-txt" placeholder="请输入手机号码" v-model="code" @input="handleValidate('code', $event)"/>
				</div>
				<div>
					<label for="">说说您的具体要求：</label>
					<textarea v-model="detail" @input="handleValidate('detail', $event)" ></textarea>
				</div>
				<div>
					<div class="image" :style="{'background-image':'url('+path+')'}">
						<input type="file" @change = "handleChange" />
					</div>
					<p v-text="message">最多上传5个附件，每个大小不超过2M</p>
					<a >上传遇到问题?</a>
				</div>
				<input class="next" type="button" value="下一步 >" @click="handleNext" />
			</form>
			<div class="info">
				<div class="info1">
					<span>保障交易安全</span>
					<span>个人资料绝不泄露</span>
					<span>交易问题一律赔偿</span>
					<span>不收取任何费用</span>
				</div>
				<div class="info1">
					<span>联系客服帮您发需求</span>
					<span>客服电话</span>
					<span class="infospan1">12345678912</span>
					<span>（周一至周日，9:00-21:00）</span>
				</div>
				<img src="../assets/a1.jpg" />
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		data(){
			return{
				arrTypes:[
					{
						name : "首发申请",
						value : "001"
					},
					{
						name : "二发申请",
						value : "002"
					},
					{
						name : "三发申请",
						value : "003"
					}
					
				],
				path : "",
				req : "",
				code : "",
				detail : "",
				tel : "",
				type : "001",
				message : ""
			};
		},
		methods : {
			handleChange(e){
				const fileReader = new FileReader(),
					FILES = e.target.files;
				fileReader.onload = e =>{
					this.path = e.target.result;
				};
				FILES.length && /jpe?g|png|gif|bmp/.test(FILES[0].type) && fileReader.readAsDataURL(FILES[0]);
			},
			handleNext(){
				console.log(this.type,this.req,this.tel,this.code,this.datail);
			},
			handleValidate(type,e){
				const value = this[type];
				this.message = (/<script>/.test(value) || !({
					tel : /^1[3578]\d{9}$/,
					code : /^\d{6}$/
				}[type] || /.*/).test(value)) ? "您的输入有错": "";
			}
		}
	};
</script>
