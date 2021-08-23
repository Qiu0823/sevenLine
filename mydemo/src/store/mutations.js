export default {
	setWebsocketMessage(state, e) {
		state.WebsocketMessage = e
	},
	setItemList(state, e) {
		state.storeItemList = e
	},
	setAllRoute(state, e) {
		state.allRoutes = e
	},
	setUserInfo(state, e) {
		state.userInfo = e
	},
	setCurrentNav(state,e){
		state.currentNav = e;
	}
	// setUserToken(state, e) {
	// 	state.userToken = e
	// },
}
