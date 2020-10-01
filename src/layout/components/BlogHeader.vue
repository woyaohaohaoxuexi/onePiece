<template>
	<div class='blog-head'>
		<div class="container ley-flex ley-between ley-align-center">
			<!--  左边博客主名称  -->
			<div class="user-name">
				<router-link to="/" class="blog-name ley-a">{{ userName }}</router-link>
			</div>
			<!--  右边菜单列表  -->
			<!-- <div class="head-menu ley-flex">
				<div v-for="(item, index) in menuList"
					class="item-menu"
					:key="index">
					<router-link :to="{name: item.routeName}" class="ley-a">{{ item.name }}</router-link>
				</div>
			</div> -->
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				userName: 'Ley`s blog',
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
	font-size: 18px;
	font-weight: 600;
	border-bottom: 1px solid #eee;
}
.container {
	width: 70%;
	height: 60px;
	margin: 0 auto;
	.blog-name {
		font-size: 20px;
		font-weight: 600;
		line-height: 60px;
		color: $color-333;
		&:hover {
			color: $orange;
		}
	}
	.item-menu {
		margin: 0 15px;
		cursor: pointer;
		&:hover {
			color: #000;
		}
	}
}
</style>
