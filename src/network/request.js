/**
 * Created by 123 on 2019/10/15.
 */
import axios from 'axios'
export function requset(config) {
  const instance1=axios.create({
     baseURL:'http://123.207.32.32:8000',
    timeout:5000
  })

  instance1.interceptors.response.use(res=>{
    return res.data
  },err=>{

  })
  return instance1(config)
}
