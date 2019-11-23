<template>
	<div class='blog-head'>
		<div class="container ley-flex ley-between ley-align-center">
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
						name: '前端技术',
						routeName: 'Home'
					},{
						name: '生活',
						routeName: 'Life'
					},{
						name: "读书",
						routeName: 'Reading'
					},{
						name: '个人介绍',
						routeName: 'Self'
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
	width: 70%;
	height: 60px;
	margin: 0 auto;
	.user-name {
		font-weight: 600;
		color: #000;
	}
	.head-menu {
		font-weight: 300;
	}
	.item-menu {
		// padding: 15px;
		margin: 0 15px;
		cursor: pointer;
		&:hover {
			color: #000;
		}
	}
}
</style>
