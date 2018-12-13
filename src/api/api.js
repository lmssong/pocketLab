import weRequest from '../utils/wxRequest'
import appConfig from '../utils/appConfig'


const getLabMainNavigatorDatas = params => {
     weRequest('labMain/getLabMainNavigatorDatas', params,function(result){
         return result
     })
}

const getReceiveSampleDatas = (params, callback)=> {
     weRequest('/receiveSample/getList',params,function(result){
         return callback(result)
     })
}

//统一导出封装的API方法
export default {
    getLabMainNavigatorDatas,
    getReceiveSampleDatas
}