import {request} from './request'

export function getDetailData(id){
  request({
    url: '/detail',
    params: {
      id
    }
  })
}