<template>
	<div class="page-box">
		<div class="page-header">页面标题</div>
		<div class="page-body">
			<div class="body-sidebar">侧边栏</div>
			<div class="body-context">
				<div class="contain">
					<div class="conntainHeader">
						<div class="ch">
							<span>区域：</span>
							<el-select v-model="value" placeholder="请选择" @change="getAllAreaDevice">
								<el-option v-for="item in areas" :key="item.areaId" :label="item.area"
									:value="item.areaId">
								</el-option>
							</el-select>
						</div>
						<div class="ch">
							<span>设备：</span>
							<el-select v-model="value1" placeholder="请选择" @change="getDevNum">
								<el-option v-for="item in areasDevice" :key="item.deviceId" :label="item.device"
									:value="item.deviceId">
								</el-option>
							</el-select>
						</div>
						<div class="ch">
							<el-button type="primary" @click="click1">查找故障</el-button>
						</div>
					</div>
					<div class="conntainContext">
						<el-table :row-class-name="tableRowClassName" :data="tableData" border style="width: 100%"
							:header-cell-style="{
                textAlign: 'center',
                fontSize: '26px',
                height: '80px',
                padding: '0',
                background:'#203456'
              }" :cell-style="{ textAlign: 'center', height: '50px' }">
							<!-- <el-table-column label="库区" width="100" align="center">
        <template slot-scope="scope">
          {{ scope.row.ReservoirArea }}
        </template>
      </el-table-column> -->
							<el-table-column prop="fault" label="故障名称">
							</el-table-column>

							<el-table-column label="操作原因措施">
								<template slot-scope="scope">
									<el-button @click="showAddDialog(scope.$index)" type="text" size="nomal">新增
									</el-button>
									<el-button @click="updateDialogClick(scope.$index)" type="text" size="nomal">修改
									</el-button>
								</template>

							</el-table-column>
						</el-table>
					</div>
				</div>
			</div>
		</div>
		<!-- 新增弹出的dialog框 -->
		<el-dialog title="提示" :visible.sync="addDialog" width="30%">
			<el-form ref="addForm" :model="addForm" label-width="80px">
				<el-form-item label="故障原因">
					<el-select style="width: 100%" v-model="addForm.faultReason" filterable allow-create
						default-first-option placeholder="请选择">
						<el-option v-for="item in reasonSelect" :key="item.reasonId" :label="item.reason"
							:value="item.reasonId">
						</el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="故障措施" style="width: 100%">
					<div style="width: 100%">
						<div v-for="(item, i) in addForm.input" v-bind:key="i" style="width: 90%; float: left">
							<el-input style="display: inline-block" v-model="addForm.input[i]" placeholder="请输入内容">
							</el-input>
						</div>
						<div style="width: 10%; float: left">
							<span @click="addInput" class="el-icon-plus"></span>
						</div>
					</div>
				</el-form-item>
			</el-form>
		</el-dialog>

		<!-- 修改弹出的dialog框 -->
		<el-dialog title="修改原因措施" :visible.sync="updateDialog" width="30%">
			<el-form ref="updateForm" :model="updateForm" label-width="80px">
				<el-form-item label="故障原因">
					<el-select style="width: 100%" v-model="updateForm.reasonId" filterable allow-create
						default-first-option placeholder="请选择" @change="getAllErrReasonMeasure">
						<el-option v-for="item in reasonSelect" :key="item.reasonId" :label="item.reason"
							:value="item.reasonId">
						</el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="修改原因">
					<el-input v-model="updateForm.reason" placeholder="请输入内容"></el-input>
				</el-form-item>
				<el-form-item label="故障措施" style="width: 100%">
					<div style="width: 100%">
						<div v-for="(item, i) in updateForm.measuresList" v-bind:key="i" style="width: 90%; float: left">
							<el-input style="display: inline-block" v-model="item.measures" placeholder="请输入内容">
							</el-input>
						</div>
					</div>
				</el-form-item>
				<el-form-item >
					<el-button @click="submitUpdate">提交</el-button>
				</el-form-item>
			</el-form>
		</el-dialog>
	</div>
</template>
<script>
	import {
		getAllArea,
		getAllAreaDevice,
		getAllDevReason,
		getAllErrReason,
		getAllErrReasonMeasure,
		postUpdateReason
	} from "../../api/detail.js";
	export default {
		data() {
			return {
				areasDevice: [],
				areas: [], //区域选择框数据
				value: "", //区域下拉框绑定的数据
				value1: "", //设备下拉框绑定的数据
				devNum: '',
				tableData: [
					'设备急停'
				], //表格table信息
				addDialog: false, //控制新增dialog的显示

				addForm: {
					faultReason: "", //新增dialog下拉框选择的原因
					input: [""], //输入框的值
				}, //新增Dialog表单数据
				reasonSelect: [], //新增dialog下拉列表
				updateDialog: false, //控制修改dialog的显示
				updateForm: {
					reasonId:null,
					reason:'',
					measuresList:[]
				}, //控制更新表格的提交数据
				
			};
		},

		methods: {
			tableRowClassName({
				row,
				rowIndex
			}) {
				if (rowIndex !== -1) {
					return "success-row"; 
				}
			},
			//点击修改
			updateDialogClick(tableIndex) {
				var item = this.tableData[tableIndex];
				var data = {
					faultId: item.faultId,
				};
				this.getNewDevReason(data);
				this.updateDialog = true

			},
			//点击新增
			showAddDialog(tableIndex) {
				var item = this.tableData[tableIndex];
				this.addDialog = true;
				var data = {
					faultId: item.faultId,
				};
				this.getNewDevReason(data);
			},
			//获取设备故障所有原因
			async getNewDevReason(data) {
				await getAllErrReason(data).then((res) => {
					let {
						state,
						message,
						result
					} = res.data;
					if (state == true) {
						this.reasonSelect = result;
						console.log(this.reasonSelect)
					}
				});
			},
			//获取单个原因所有的措施
			async getAllErrReasonMeasure(id){
				let data ={
					reasonId:id
				}
				await getAllErrReasonMeasure(data).then(res =>{
					let {state,message,result} = res.data
					if(state ===true){
						this.updateForm.measuresList = result
					}else{
						this.$message({
							message: message,
							type: "warning",
							center: true,
						});
					}
				})
			},
			//修改措施点击提交
			submitUpdate(){
				console.log(this.updateForm)
				postUpdateReason(this.updateForm)
				this.updateDialog = false
			},
			addInput() {
				this.addForm.input.push("");
			},
			//查看故障
			async searchAllReason() {
				console.log(111)
				let data = {
					deviceId: this.devNum,
				}
				await getAllDevReason(data).then(res => {
					console.log(res, '查看故障')
					let {
						state,
						message,
						result
					} = res.data;
					if (state == true) {
						this.tableData = result
					}

				})
			},
			//选择设备后
			getDevNum(val) {
				this.devNum = val;
			},
			//接口获取全部区域
			async getAllArea() {
				await getAllArea().then((res) => {
					let {
						state,
						message,
						result
					} = res.data;
					if (state === true) {
						this.areas = result;
					} else {
						this.$message({
							message: message,
							type: "warning",
							center: true,
						});
					}
				});
			},
			click1() {
				this.searchAllReason()

			},
			async getAllAreaDevice(id) {
				let data = {
					areaId: id,
				};
				await getAllAreaDevice(data).then((res) => {
					let {
						state,
						message,
						result
					} = res.data;
					if (state === true) {
						this.areasDevice = result;
					} else {
						this.$message({
							message: message,
							type: "warning",
							center: true,
						});
					}
				});
			},
		},
		mounted() {
			this.getAllArea();
		},
	};
</script>
<style lang='less'>
	.page-box {
		width: 100%;
		height: 100%;

		.page-header {
			width: 100%;
			height: 20%;
			border: 1px solid thistle;
		}

		.page-body {
			width: 100%;
			height: 80%;
			display: flex;

			.body-sidebar {
				height: 100%;
				width: 20%;
				border: 1px solid steelblue;
			}

			.body-context {
				height: 100%;
				width: 80%;

				// border: 1px solid red;
				.contain {
					height: 80%;
					width: 80%;
					background: #162d53;
					display: flex;
					flex-direction: column;
					margin: 20px auto;

					.conntainHeader {
						flex: 1;
						display: flex;
						font-size: 24px;

						.ch {
							float: left;
							flex: 1;
							margin: auto;
						}
					}

					.conntainContext {
						flex: 4;
						// border: 1px brown solid;
						font-size: 22px;

						.el-table__row {
							&.success-row {
								background: rgb(4, 62, 87);
							}
						}

						.el-table {
							color: #fff;

							.warning-row {
								background-color: #429118;
							}
						}

						.el-table--border {
							td {
								border: 1px solid #666;
							}
						}

						.el-table--border {
							border: none;
						}
					}
				}
			}
		}
	}
</style>
