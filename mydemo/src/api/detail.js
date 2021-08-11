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


//查看单个原因所有的措施
//http://172.20.10.3:8181/fault/query/reason/fault?faultId=1
export function getAllErrReasonMeasure(data) {
	return request({
		url: '/fault/query/measures/reason',
		method: 'get',
		params: data
	})
}

//提交修改
//http://172.20.10.3:8181/fault/query/reason/fault?faultId=1
export function postUpdateReason(data) {
	return request({
		url: '/fault/update/reason/measures',
		method: 'post',
		data
	})
}


//提交修改
//http://172.20.10.3:8181/fault/query/reason/fault?faultId=1
export function postUpdateResult(data) {
	return request({
		url: '/fault/update/result',
		method: 'post',
		data
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

//添加电机信息
//http://127.0.0.1:8181/machine/add
export function addElecInfo(data) {
	return request({
		url: '/machine/add',
		method: 'post',
		data
	})
}

//修改前查看电机信息
//http://172.20.10.3:8181/machine/query/all?faultId=1594&deviceId=19
export function beforeUpdateElecInfo(data) {
	return request({
		url: '/machine/query/all',
		method: 'get',
		params: data
	})
}

//修改电机信息
//http://127.0.0.1:8181/machine/update
export function UpdateElecInfo(data) {
	return request({
		url: '/machine/update',
		method: 'post',
		data
	})
}

//查看急停历史记录
//http://127.0.0.1:8181/emergency/query/record
export function findStopHisInfo() {
	return request({
		url: '/emergency/query/record',
		method: 'get',
	})
}

//在首页以树状图的形式表示区域及其下属设备
//http://127.0.0.1:8181/device/catalog
export function findIndexMenu() {
	return request({
		url: '/device/catalog',
		method: 'get',
	})
}

//查询设备的状态列表
//http://127.0.0.1:8181/device/query/status?deviceId=1
export function getDeviceStatusList(data) {
	return request({
		url: '/device/query/status',
		method: 'get',
		params:data
	})
}

