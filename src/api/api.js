import weRequest from '../utils/wxRequest'
import appConfig from '../utils/appConfig'
import Promise from 'bluebird'

const getLabMainNavigatorDatas = params => {
     weRequest('labMain/getLabMainNavigatorDatas', params,function(result){
         return result
     })
}

//获取审批中心数据
const getApprovalCenterDatas = async function(params) {
    return await weRequest('/approvalCenter/getApprovalCenterDatas',params);
}

//获取文档中心数据
const getDocumentCenterDatas = async function(params) {
    return await weRequest('/documentCenter/getDocumentCenterDatas',params);
}

//获取文档中心ISO认证体系文件数据
const getIsoDocumentDatas = async function(params) {
    return await weRequest('/documentCenter/getIsoDocumentDatas',params);
}

//收样送检数据
const getReceiveSampleDatas = async function(params) {
    return await weRequest('/receiveSample/getList',params);
}

//检测任务数据
const getTestingTaskDatas = async function (params) {
    return await weRequest('/testingTask/getList',params);
}

//统一导出封装的API方法
export default {
    getApprovalCenterDatas,
    getDocumentCenterDatas,
    getIsoDocumentDatas,
    getLabMainNavigatorDatas,
    getReceiveSampleDatas,
    getTestingTaskDatas
}