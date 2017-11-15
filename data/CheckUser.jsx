var axios = require('axios');

const CHECK_LOGIN = 'http://localhost:8000/api/login/user';
const LOGIN = 'http://localhost:8000/api/login';
const SIGNUP = 'http://localhost:8000/api/login/signup';

module.exports = {
  checkUser:function(){
    var requestUrl = `${CHECK_LOGIN}`;

    return axios.request({
      method:'get',
      url:requestUrl,
      headers:{
        'Content-Type':'application/x-www-form-urlencoded'
      }
    }).then(function(res,err){

      if(res){
        return res;
      } else {
        return err;
      }
    },function(res){
      throw new Error('error');
    })
  },
    loginUser:function(username,password){
    var requestUrl = `${LOGIN}`;

    return axios.request({
      method:'post',
      url:requestUrl,
      headers:{
        'Content-Type':'application/json'
      },
      data:{
        username:username,
        password:password
      }
    }).then(function(res,err){
      if(res){
        return res;
      } else {
        return err;
      }
    },function(res){
      throw new Error('error');
    })
  },
  signupUser:function(username,password){
    var requestUrl = `${SIGNUP}`;

    return axios.request({
      method:'get',
      url:requestUrl,
      headers:{
        'Content-Type':'application/x-www-form-urlencoded'
      },
      data:{
        username:username,
        password:password
      }
    }).then(function(res,err){
      if(res){
        return res;
      } else {
        return err;
      }
    },function(res){
      throw new Error('error');
    })
  }
}
