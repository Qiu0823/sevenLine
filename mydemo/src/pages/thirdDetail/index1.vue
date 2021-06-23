<template>
	<div id="data-view">
		<dv-full-screen-container>
			<div class="contain">
				<div class="conntainHeader">
					<div class="ch">
						<span>区域：</span>
						<el-select v-model="value" placeholder="请选择">
							<el-option v-for="item in area" :key="item.value" :label="item.label" :value="item.value">
							</el-option>
						</el-select>
					</div>
					<div class="ch">
						<span>设备：</span>
						<el-select v-model="value1" placeholder="请选择">
							<el-option v-for="item in area" :key="item.value" :label="item.label" :value="item.value">
							</el-option>
						</el-select>
					</div>
					<div class="ch">
						<el-button type="success">查找故障</el-button>
					</div>
				</div>
				<div class="conntainContext">
					<el-table :data="tableData" border style="width: 100%">
						<el-table-column prop="faultName" label="故障名称">
						</el-table-column>
						<el-table-column label="操作原因措施">
							<el-button @click="showAddDialog" type="text" size="small">新增</el-button>
							<el-button type="text" size="small">修改</el-button>
						</el-table-column>
					</el-table>
				</div>
			</div>
		</dv-full-screen-container>
		
		<!-- 新增弹出的dialog框 -->
		<el-dialog
		  title="提示"
		  :visible.sync="addDialog"
		  width="30%">
			<el-form ref="addForm" :model="addForm" label-width="80px">
				<el-form-item label="故障原因">
					  <el-select
						style="width: 100%;"
					    v-model="addForm.faultReason"
					    filterable
					    allow-create
					    default-first-option
					    placeholder="请选择">
					    <el-option
					      v-for="item in reasonSelect"
					      :key="item.value"
					      :label="item.label"
					      :value="item.value">
					    </el-option>
					  </el-select>
				</el-form-item>
				<el-form-item label="故障措施" style="width: 100%;">
					<div style="width: 100%;">
						<div v-for="(item,i) in addForm.input" v-bind:key="i" style="width: 90%;float: left;"><el-input style="display: inline-block;" v-model="addForm.input[i]" placeholder="请输入内容"></el-input></div>
						<div style="width: 10%;float: left;">
							<span @click="addInput" class="el-icon-plus"></span>
						</div>
					</div>

				</el-form-item>
			</el-form>
		</el-dialog>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				area: [{
					value: '选项1',
					label: '黄金糕'
				}, {
					value: '选项2',
					label: '双皮奶'
				}, {
					value: '选项3',
					label: '蚵仔煎'
				}, {
					value: '选项4',
					label: '龙须面'
				}, {
					value: '选项5',
					label: '北京烤鸭'
				}],//区域选择框数据
				value: '',//区域下拉框绑定的数据
				value1:'',//设备下拉框绑定的数据
				tableData: [{
					faultName: '系统急停'
				}, {
					faultName: '系统急停'
				}, {
					faultName: '系统急停'
				}, {
					faultName: '系统急停'
				}],//表格table信息
				addDialog: false,//控制新增dialog的显示
				
				addForm:{
					faultReason:'',//新增dialog下拉框选择的原因
					input:['']//输入框的值
				},//新增Dialog表单数据
				reasonSelect:[{
					value: '选项1',
					label: '黄金糕'
				}, {
					value: '选项2',
					label: '双皮奶'
				}, {
					value: '选项3',
					label: '蚵仔煎'
				}, {
					value: '选项4',
					label: '龙须面'
				}, {
					value: '选项5',
					label: '北京烤鸭'
				}],//新增dialog下拉列表

				
			}
		},
		
		methods:{
			showAddDialog(){
				this.addDialog = true
			},
			addInput(){
				this.addForm.input.push('')
			}
		}
	}
</script>

<style lang="less" scoped="scoped">
	#data-view {
		width: 100%;
		height: 100%;
		background-color: #030409;
		color: #fff;

		#dv-full-screen-container {
			background-image: url('~@/assets/img/bg.png');
			background-size: 100% 100%;
			box-shadow: 0 0 3px blue;
			display: flex;
			flex-direction: column;

			.contain {
				height: 50%;
				width: 50%;
				border: 1px solid red;
				display: flex;
				flex-direction: column;

				.conntainHeader {
					flex: 1;
					border: 1px yellow solid;
					display: flex;

					.ch {
						float: left;
						flex: 1;
					}
				}

				.conntainContext {
					flex: 4;
					border: 1px brown solid;
				}
			}
		}
	}
</style>
