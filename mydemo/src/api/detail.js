import axios from 'axios'

const request = axios.create({
	//baseURL: 'http://192.168.1.232:9001' // url = base url + request url
	// withCredentials: true, // send cookies when cross-domain requests
	baseURL: _LOGIN_URL
})

export function pending(data) {
	return request({
		url: '/fault/query/pending',
		method: 'get',
		params: data
	})
}

export function handled(data) {
	return request({
		url: '/fault/query/handled',
		method: 'get',
		params: data
	})
}

export function frm(data) {
	return request({
		url: '/fault/query/frm',
		method: 'get',
		params: data
	})
}

export function ErrorMessageChart(data) {
	return request({
		url: '/fault/count/reason',
		method: 'get',
		params: data
	})
}


export function ErrorMessageHistory(data) {
	return request({
		url: '/fault/query/history',
		method: 'get',
		params: data
	})
}


export function indexScrollBar(data) {
	return request({
		url: '/fault/roll/bar',
		method: 'get',
		params: data
	})
}

export function getHandleResult(data) {
	return request({
		url: '/fault/query/result',
		method: 'get',
		params: data
	})
}
//获取所有区域
export function getAllArea() {
	return request({
		url: '/device/query/area',
		method: 'get'
	})
}

//获取某个区域内设备
export function getAllAreaDevice(data) {
	return request({
		url: '/device/query/device/area',
		method: 'get',
		params: data
	})
}
//查看所有设备故障
export function getAllDevReason(data) {
	return request({
		url: '/fault/query/fault/device',
		method: 'get',
		params: data
	})
}
//查看故障所有原因
//http://172.20.10.3:8181/fault/query/reason/fault?faultId=1
export function getAllErrReason(data) {
	return request({
		url: '/fault/query/reason/fault',
		method: 'get',
		params: data
	})
}

//新增原因和措施
//http://172.20.10.3:8181/fault/add/reason/measures
export function addReaAndMea(data) {
	return request({
	  url: '/fault/add/reason/measures',
	  method: 'post',
	  data
	})
  }
  