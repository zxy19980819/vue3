/**
 * Created by 123 on 2019/10/15.
 */
import {requset} from './request'
export function getHomeMultidata() {
  return requset({
    url:'/api/v1/home/multidata'
  })
}

export function getHomeGoods(type,page) {
  return requset({
    url:'/api/v1/home/data',
    params:{
      type:type,
      page:page
    }
  })
}

export function getDetail(iid) {
  return requset({
    url:'/api/v1/detail',
    params:{
      iid:iid

    }
  })
}

