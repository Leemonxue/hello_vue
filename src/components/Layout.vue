<template>
	<section class="container">
		<section class="nav">
			<Topbar></Topbar>
		</section>
		<section class="wrapper">
			<section class="menu">
				<Leftbar></Leftbar>
			</section>
			<section class="content" style="border: 1px black solid;">
				<router-view></router-view>
			</section>
		</section>
	</section>
</template>

<script>
	import Topbar from './common/Topbar';
	import Leftbar from "./common/Leftbar";
	export default {
		name: 'app',
		components: {
			Topbar,
			Leftbar
		}
	}
</script>

<style>
.wrapper{
	display: -ms-flexbox;
	display: -webkit-flex;
	display: flex;
}
.menu{
	width: 165px;
	margin-right: 15px;
}
.content{
	flex: 1;
}
</style>