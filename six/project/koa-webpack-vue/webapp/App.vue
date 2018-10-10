<template>
<div>
	<div>
		<v-header></v-header>
		<h1>hello Vue app!</h1>
	</div>
	<p>
		<router-link to="/a">A页面</router-link>
		<router-link to="/b">B页面</router-link>
	</p>
	<router-view></router-view>
</div>
	
	
</template>

<script>
import header from "./components/header/header.vue";
export default {
  name: "app",
  components: {
    "v-header": header
  }
};
</script>

<style>

</style>
