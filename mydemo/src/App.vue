<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <router-view />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import store from '@/store/index.js'
export default {
  name: 'App',
  // components: {
  //   HelloWorld
  // }
	created() {
		//websocket接收各组件的状态信息
		let s = this.$store
		var ws = new WebSocket(socketURL)
		ws.onmessage = function(event) {
			console.log(event.data)
			// s.commit("setWebsocketMessage",JSON.parse(event.data))
			s.state.WebsocketMessage = JSON.parse(event.data)
		};
	},
}
</script>

<style>
#app {
	width: 100%;
	height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}
</style>
