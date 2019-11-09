<template>
	<div class='blog-head'>
		<div class="container ley-flex ley-flex-space-between ley-flex-align-center">
			<!--  左边博客主名称  -->
			<div class="user-name">
				{{userName}}
			</div>
			<!--  右边菜单列表  -->
			<div class="head-menu ley-flex">
				<div v-for="(item, index) in menuList"
					class="item-menu"
					:key="index">
					<span>{{item.name}}</span>
				</div>
			</div>
		</div>
		
			
	</div>
</template>

<script>
	export default {
		data() {
			return {
				userName: 'LEY',
				menuList: [
					{
						name: '前端技术'
					},{
						name: '生活'
					},{
						name: "读书"
					},{
						name: '个人介绍'
					}
				]
			}
		},
		computed: {

		},
		watch: {

		},
		mounted() {

		},
		methods: {

		},
		components: {

		},
	}
</script>

<style scoped lang="scss">
.blog-head {
	border-bottom: 1px solid #eee;
}
.container {
	width: 1170px;
	margin: 0 auto;
	.user-name {
		font-weight: 600;
		color: #000;
	}
	.head-menu {
		font-weight: 300;
	}
	.item-menu {
		padding: 15px;
		cursor: pointer;
		&:hover {
			color: #000;
		}
	}
}
</style>
