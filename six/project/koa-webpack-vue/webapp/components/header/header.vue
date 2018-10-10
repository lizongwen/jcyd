<template>
  <div class="components-header">
	  <span class="text">Vue SPA Framework</span>
	  <div class="title">HELLO VUE</div>
	  <div @click="test">Index for app</div>
	  <em>{{data}}</em>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "header",
  computed: mapState({
    data: state => {
      console.log(state);
      return state.database.data.length;
    }
  }),
  methods: {
    test() {
      this.$store.dispatch("addInfo", {
        txt: "hhaahaha"
      });
    }
  }
};
</script>
<style src="./header.css" scoped></style>
