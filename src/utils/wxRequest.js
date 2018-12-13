import wepy from 'wepy'
import appConfig from '../utils/appConfig'

const wxRequest = (url,params = {}, callback) => {
    // return wepy.request({
    //     url: appConfig.ServerUrl + url,
    //     data: params.data || {},
    //     method: params.method || 'POST',
    //     dataType: params.dataType || 'json',
    //     header: params.header || {
    //         'Content-type': 'appliation/json'
    //     }
    // })

    wx.request({
        url: appConfig.ServerUrl + url, //仅为示例，并非真实的接口地址
        data: {},
        header: {
          'content-type': 'application/json' // 默认值
        },
        method: 'GET',
        success (res) {
            callback(res.data)
        }
      })

}

//导出当前函数
export default wxRequest
