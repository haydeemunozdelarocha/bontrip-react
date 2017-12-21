var axios = require('axios');

const PATH = 'http://localhost:8080/';
// const PATH = 'https://mighty-beach-23452.herokuapp.com/';
const GET_TRIPS = 'api/trips';
const SELECT_TRIP = 'api/trips/select/';

module.exports = {
  getTrips:function(user_id){
    var requestUrl = `${PATH}`+`${GET_TRIPS}`;

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
  }
}
