/*
与后台交互模块 （依赖已封装的ajax函数）
 */
import ajax from './ajax'
const BASE_URL = '/api'

/**
 * 
 * 前台用户登录
 */
export const reqPwdLogin = ({username, password}) => ajax(BASE_URL + '/user/login', {username, password}, 'POST')

export const reqSmartRentData = ({locationa,price,layout,tag,page}) => ajax(BASE_URL + '/rent/select', {locationa,price,layout,tag,page}, 'POST')

/**
 *   智能推荐 special 数据
 */

export const reqSpecial = ({ openid, nums }) => ajax(BASE_URL + '/rent/recommend', { openid, nums }, 'POST')


 /**
  *  rent租房数据 传
  */
export const reqRentData = ({ cityname, page }) => ajax(BASE_URL + '/rent/rent', { cityname, page }, 'GET')


