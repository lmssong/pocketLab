import wepy from 'wepy'
import appConfig from '../utils/appConfig'
import Promise from 'bluebird'

const wxRequest = function(url,params = {}){
    return new Promise(function(resolve,reject){
        wx.request({
            url: appConfig.ServerUrl + url, //仅为示例，并非真实的接口地址
            data: {},
            header: {
              'content-type': 'application/json' // 默认值
            },
            method: 'GET',
            success (res) {
                resolve(res.data)
            },
            fail() {
                reject()
            }
          })
    })
}

//导出当前函数
export default wxRequest
