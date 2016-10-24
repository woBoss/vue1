<style scoped lang="stylus">
	.activity
		height  600px
		background-color lightgreen
		font-size 20px
		line-height @height
		text-align center
		color white
</style>
<template>
	<div class="activity width1180">
		<ul>
			<li v-for="(item, index) in lis">{{item.content}} </li>
		</ul>
	</div>
</template>
<script >
	export default{
		data(){
			return{
				lis: [
					{
						current : 1,
						content : "aaa"
					},
					{
						current : 0,
						content : "bbb"
					},
					{
						current : 0,
						content : "ccc"
					},
					{
						current : 0,
						content : "ddd"
					}
				]
			}
		},
		// new Vue({
		// 	  el: '#repeat-object',
		// 	  data: {
		// 	    object: {
		// 	      FirstName: 'John',
		// 	      LastName: 'Doe',
		// 	      Age: 30
		// 	    }
		//   	}
		// })
	}
</script>