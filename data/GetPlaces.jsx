var axios = require('axios');

const GET_RECOMMENDED = 'http://localhost:8000/api/venues/recommended';
const GET_PLACES ='http://localhost:8000/api/venues/';
module.exports = {
  getRecommended:function(city){
    city = encodeURI(city);
    var requestUrl = `${GET_RECOMMENDED}`+'?search='+city;

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
    viewPlace:function(place_id){

    var requestUrl = `${GET_PLACES}`+place_id;

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
  }
}
