var axios = require('axios');

// const PATH = 'http://localhost:8080/';
const PATH = 'https://mighty-beach-23452.herokuapp.com/';
const GET_TRIPS = 'api/trips/';
const SAVE_TRIP = 'api/trips';
const SELECT_TRIP = 'api/trips/select/';
const DELETE_TRIP = 'api/trips/delete/';

module.exports = {
  getTrips:function(user_id){
    var requestUrl = `${PATH}`+`${GET_TRIPS}`+user_id;

    return axios.request({
      method:'get',
      url:requestUrl,
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

    var requestUrl = `${PATH}`+`${SELECT_TRIP}`+tripId;

    return axios.request({
      method:'get',
      url:requestUrl,
      headers:{
        'Content-Type':'application/x-www-form-urlencoded'
      }
    }).then(function(res,err){
      if(res){
        console.log(res);
        return res;
      } else {
        return err;
      }
    },function(res){
      throw new Error('error');
    })
  },
  deleteTrip:function(tripId){
    var requestUrl = `${PATH}`+`${DELETE_TRIP}`+tripId;
    console.log(requestUrl)
    return axios.request({
      method:'post',
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
    saveTrip:function(trip){
    var requestUrl = `${PATH}`+`${SAVE_TRIP}`;

    return axios.request({
      method:'post',
      url:requestUrl,
      data:trip
    }).then(function(res,err){
      if(res){
        console.log(res);
        return res;
      } else {
        return err;
      }
    },function(res){
      throw new Error('error');
    })
  }
}
