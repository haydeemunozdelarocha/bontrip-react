var axios = require('axios');

const PATH = 'http://localhost:8080/';
const GET_RECOMMENDED = 'api/venues/recommended';
const GET_PLACES ='api/venues/';
const GET_LIKED_PLACES ='api/places/';
const GET_TEST_PLACES ='api/places/test';
const ADD_PLACE ='api/places/add';

module.exports = {
  getRecommended:function(city){
    city = encodeURI(city);
    console.log('getting recommended');
    var requestUrl = `${PATH}`+`${GET_RECOMMENDED}`+'?search='+city;

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
    getLikedPlaces:function(user_id,tripId){
      console.log('getting places api');
      console.log(tripId);
    var requestUrl = `${PATH}`+`${GET_TEST_PLACES}`+'?user='+user_id+'&trip='+tripId;
    console.log(requestUrl);

    return axios.request({
      method:'get',
      url:requestUrl,
      headers:{
        'Content-Type':'application/x-www-form-urlencoded'
      },
      data:{
        _id:user_id,
        tripId:tripId
      }
    }).then(function(res,err){
      if(res){
        console.log(res);
        return res;
      } else {
        console.log(err);
        return err;
      }
    },function(res){
      throw new Error('error');
    })
  },
    viewPlace:function(place_id){

    var requestUrl = `${PATH}`+`${GET_PLACES}`+place_id;

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
    addPlace:function(place){

    var requestUrl = `${PATH}`+`${ADD_PLACE}`;
    console.log(requestUrl);
    console.log(place);

    return axios.request({
      method:'post',
      url:requestUrl,
      headers:{
        'Content-Type':'application/x-www-form-urlencoded'
      },
      data:{venueId:place.venueId,
            source:place.source,
            user_id:place.user_id}
    }).then(function(res,err){
      if(res){
        return res;
      } else {
        console.log(err);
        return err;
      }
    },function(res){
      throw new Error('error');
    })
  }
}
