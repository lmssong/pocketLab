
const env = 'development';

const version = 1.0;

const hosts = {
    development: 'https://10.10.22.100:8081',
    production:'https://lmssong.imdo.co'
}

const api = {
    approvalCenter: {
        dataList: {
            method: 'GET',
            url: '/approvalCenter/getApprovalCenterDatas/'
        },
        dataInfo: {
            method: 'GET',
            url: '/approvalCenter/getApprovalCenterInfo/'
        }
    },
    documentCenter:{
        dataList: {
            method: 'GET',
            url: '/documentCenter/getDocumentCenterDatas/'
        },
        dataInfo: {
            method: 'GET',
            url: '/documentCenter/getDocumentCenterInfo/'
        }
    },
    messageCenter: {
        dataList: {
            method: 'GET',
            url: '/messageCenter/getMessageCenterDatas/'
        },
        dataInfo:{
            method: 'GET',
            url: '/messageCenter/getMessageCenterInfo/'
        }
    },
    receiveManagement: {
        dataList: {
            method: 'GET',
            url: '/receiveManagement/getReceiveManagementDatas/'
        },
        dataInfo: {
            method: 'GET',
            url: '/receiveManagement/getReceiveManagementInfo/'
        }
    },
    testingManagement: {
        dataListAll: {
            method: 'GET',
            url: '/testingManagement/getTestingManagementDatasAll/'
        },
        dataInfoAll: {
            method: 'GET',
            url: '/testingManagement/getTestingManagementInfoAll/'
        },
        dataListMine: {
            method: 'GET',
            url: '/testingManagement/getTestingManagementDatasMine/'
        },
        dataInfoMine: {
            method: 'GET',
            url: '/testingManagement/getTestingManagementInfoMine/'
        }
    },
    reportManagement: {
        dataList: {
            method: 'GET',
            url: '/reportManagement/getReportManagementDatas/'
        },
        dataInfo: {
            method: 'GET',
            url: '/reportManagement/getReportManagementInfo/'
        }
    }
}

module.exports = {
    env,
    version,
    hosts,
    api:disposeUrl(api,hosts[env])
}

function disposeUrl(obj, prefix) {
    Object.keys(obj).forEach(v => {
        if (obj[v].url) {
            obj[v].url = prefix + obj[v].url
        } else {
            obj[v] = disposeUrl(obj[v], prefix)
        }
    })

    return obj
}

// //根域名路径地址
// const appConfig = {
//     // ServerUrl: 'https://lmssong.imdo.co' //外网映射域名
//     ServerUrl: 'https://localhost:8091'
// } 

// //导出根域名对象
// export default appConfig