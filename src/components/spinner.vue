<template>
	<div class="spinner">
		<mt-spinner  type="triple-bounce" color="rgb(38, 162, 255)" :size="60"></mt-spinner>
	</div>
</template>
<script>
	export default{
		name:'spinner',
		data(){
			return{};
		}
	}
</script>
<style lang="less" scoped>
	.spinner{
		text-align: center;
	}
</style>