var axios = require('axios');

// const PATH = 'http://localhost:8080/';
const PATH = 'https://mighty-beach-23452.herokuapp.com/';
const CHECK_LOGIN = 'api/login/user';
const LOGIN = 'api/login';
const LOGOUT = 'api/login/logout';
const SIGNUP = 'api/login/signup';

module.exports = {
  checkUser:function(){
    var requestUrl = `${PATH}`+`${CHECK_LOGIN}`;

    return axios.request({
      method:'get',
      url:requestUrl
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
    var requestUrl = `${PATH}`+`${LOGIN}`;

    return axios.request({
      method:'post',
      url:requestUrl,
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
      logoutUser:function(username){
    var requestUrl = `${PATH}`+`${LOGOUT}`;

    return axios.request({
      method:'get',
      url:requestUrl,
      headers:{
        'Content-Type':'application/json'
      },
      data:{
        username:username
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
    var requestUrl = `${PATH}`+`${SIGNUP}`;

    return axios.request({
      method:'post',
      url:requestUrl,
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
