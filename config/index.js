/*
 * @Author: curechen 981470148@qq.com
 * @Date: 2023-01-08 10:24:07
 * @LastEditors: curechen 981470148@qq.com
 * @LastEditTime: 2023-01-13 22:31:25
 * @FilePath: \GraduationProject\admin\config\index.js
 * @Description: 
 */
export default {
  development: {
    // baseUrl: '/api' // 测试接口域名
    baseUrl: '//42.193.99.39:8092/manage-api/v1' // 测试接口域名
  },
  beta: {
    // baseUrl: '//backend-api-02.newbee.ltd/manage-api/v1' // 测试接口域名
    baseUrl: '//42.193.99.39:8092/manage-api/v1' // 测试接口域名
  },
  release: {
    // baseUrl: '//backend-api-02.newbee.ltd/manage-api/v1' // 正式接口域名
    baseUrl: '//42.193.99.39:8092/manage-api/v1' // 正式接口域名
  }
}