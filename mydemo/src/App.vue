<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <router-view :key="key"/>
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
		// console.log(this.$router.history.current,'router')
		let s = this.$store
		let that = this;
		s.state.ws = new WebSocket(socketURL)
		s.state.ws.onopen = function () {
		console.log(that.$router.history.current,'router')
		const currentRou = that.$router.history.current
		if(currentRou.path == '/index'){
			const str = currentRou.query.str;
			s.state.ws.send(str)
		} else{
			s.state.ws.send('T001')
		}
		}

		s.state.ws.onmessage = function(event) {
			let datas = JSON.parse(event.data)
			console.log(datas)				
			for(var p in datas){
				Vue.set(s.state.WebsocketMessage,p,datas[p])
			}
		};
	},
computed: {
    key() {
        return this.$route.name !== undefined? this.$route.name + +new Date(): this.$route + +new Date()
    }
 }
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
