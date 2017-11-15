var axios = require('axios');

const GET_TRIPS = 'http://localhost:8000/api/trips';
const SELECT_TRIP = 'http://localhost:8000/api/trips/select/';

module.exports = {
  getTrips:function(user_id){
    var requestUrl = `${GET_TRIPS}`;

    return axios.request({
      method:'get',
      url:requestUrl,
      headers:{
        'Content-Type':'application/x-www-form-urlencoded'
      },
      data: {
        _id:user_id
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
    selectTrip:function(tripId){

    var requestUrl = `${SELECT_TRIP}`+tripId;

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
