/*
 * @Author: curechen 981470148@qq.com
 * @Date: 2023-01-08 10:24:39
 * @LastEditors: curechen 981470148@qq.com
 * @LastEditTime: 2023-02-12 17:32:49
 * @FilePath: \GraduationProject\admin\src\utils\index.js
 * @Description: 
 */
export function localGet (key) {
  const value = window.localStorage.getItem(key)
  try {
    return JSON.parse(window.localStorage.getItem(key))
  } catch (error) {
    return value
  }
}

export function localSet (key, value) {
  window.localStorage.setItem(key, JSON.stringify(value))
}

export function localRemove (key) {
  window.localStorage.removeItem(key)
}

// 判断内容是否含有表情字符，现有数据库不支持。
export function hasEmoji (str = '') {
  const reg = /[^\u0020-\u007E\u00A0-\u00BE\u2E80-\uA4CF\uF900-\uFAFF\uFE30-\uFE4F\uFF00-\uFFEF\u0080-\u009F\u2000-\u201f\u2026\u2022\u20ac\r\n]/g;
  return str.match(reg) && str.match(reg).length
}

// 单张图片上传
// http://backend-api-02.newbee.ltd/manage-api/v1/upload/file
export const uploadImgServer = 'http://42.193.99.39:8092/manage-api/v1/upload/file'
// 多张图片上传
// http://backend-api-02.newbee.ltd/manage-api/v1/upload/files
// export const uploadImgsServer = 'http://42.193.99.39:8092/manage-api/v1/upload/files'
// 因为多张图片上传接口没有做，所以在这里直接改成使用单张图片上传接口
export const uploadImgsServer = 'http://42.193.99.39:8092/manage-api/v1/upload/file'

export const pathMap = {
  login: '登录',
  introduce: '系统介绍',
  dashboard: '大盘数据',
  add: '添加商品',
  swiper: '轮播图配置',
  hot: '热销商品配置',
  new: '新品上线配置',
  recommend: '为你推荐配置',
  category: '分类管理',
  level2: '分类二级管理',
  level3: '分类三级管理',
  good: '商品管理',
  guest: '会员管理',
  order: '订单管理',
  order_detail: '订单详情',
  account: '修改账户'
}