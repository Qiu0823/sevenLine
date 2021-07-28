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
import Vue from 'vue'
export default {
  name: 'App',
  // components: {
  //   HelloWorld
  // }
	created() {
		//websocket接收各组件的状态信息
		let s = this.$store
		s.state.ws = new WebSocket(socketURL)
		// s.state.ws = new WebSocket('ws://localhost:8080')
		s.state.ws.onopen = function () {
		s.state.ws.send('T001')
		}

		s.state.ws.onmessage = function(event) {
			let datas = JSON.parse(event.data)
			console.log(datas)				
			for(var p in datas){
				Vue.set(s.state.WebsocketMessage,p,datas[p])
			}
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
