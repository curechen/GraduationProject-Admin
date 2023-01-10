export default {
  development: {
    baseUrl: '/api' // 测试接口域名
    // baseUrl: '//42.193.99.39:8091/manage-api/v1' // 测试接口域名
  },
  beta: {
    // baseUrl: '//backend-api-02.newbee.ltd/manage-api/v1' // 测试接口域名
    baseUrl: '//42.193.99.39:8091/manage-api/v1' // 测试接口域名
  },
  release: {
    // baseUrl: '//backend-api-02.newbee.ltd/manage-api/v1' // 正式接口域名
    baseUrl: '//42.193.99.39:8091/manage-api/v1' // 正式接口域名
  }
}