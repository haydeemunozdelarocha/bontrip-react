var expect = require('expect');

var GetPlaces = require('GetPlaces');

describe('GetPlaces',()=>{
  it('should exist',()=>{
    expect(GetPlaces).toExist();
  })
  describe('getRecommended',()=>{
    it('should return foursquare places',()=>{

      GetPlaces.getRecommended('San Francisco, CA').then(function(data){
        expect(data.data).toBeAn('array');
        expect(data.data.length).toBeGreaterThan(0);
        expect(data.status).toBe(200);
      });
    })
});
  describe('getLikedPlaces',()=>{
    it('should return user liked places',()=>{

      GetPlaces.getLikedPlaces('5a4d15ecc2dae4662994a6c7','5a4d180ac2dae4662994a6c8').then(function(data){
        expect(data.data).toBeAn('array');
        expect(data.status).toBe(200);
      });
    })
});
describe('viewPlace',()=>{
    it('should return place info',()=>{

      GetPlaces.viewPlace('5a4d15ecc2dae4662994a6c7','5a4d180ac2dae4662994a6c8').then(function(data){
        expect(data.data).toBeAn('object');
        expect(data.data.id).toBeA('String');
        expect(data.status).toBe(200);
      });
    })
});
describe('addPlace',()=>{
    it('should add place to database',()=>{
      var place = {venueId:'4adcdac6f964a5202f5321e3',
            source:'bt',
            _id:'5a4d15ecc2dae4662994a6c7',
            category:'restaurants',
            tripId: '5a4d180ac2dae4662994a6c8',
            lat:'41.8986',
            lon:'12.4768',
            name:'Burger Place'

          };
      GetPlaces.addPlace(place).then(function(data){
        expect(data.data).toBeAn('object');
        expect(data.data.userId).toBeA('String');
        expect(data.status).toBe(200);
      });
    })
});
describe('getDay',()=>{
    it('should get scheduled places in date',()=>{

      GetPlaces.getDay('2018-01-25T07:00:00.000Z','5a4d180ac2dae4662994a6c8','5a4d15ecc2dae4662994a6c7').then(function(data){
        expect(data.data).toBeAn('array');
        expect(data.data._id).toBeA('String');
        expect(data.status).toBe(200);
      });
    })
});
describe('schedulePlace',()=>{
    it('should schedule a place',()=>{

      GetPlaces.getDay('4adcdac6f964a520105321e3','2018-01-25T07:00:00.000Z').then(function(data){
        expect(data.data).toBeAn('object');
        expect(data.data._id).toBeA('String');
        expect(data.status).toBe(200);
      });
    })
});
describe('changeOrder',()=>{
    it('should change the order of scheduled places',()=>{
      var id1 = '5a4e40d5ca50909508970572';
      var order1 = 2;
      var id2 ='5a4e40dfca50909508970574';
      var order2 = 1;
      GetPlaces.changeOrder().then(function(data){
        expect(data.data).toBeAn('object');
        expect(data.data.order).toBe(order1);
        expect(data.data._id).toBe(id2);
        expect(data.status).toBe(200);
      });
    })
});
describe('getGoogleCities',()=>{
    it('should get cities from google api',()=>{

      GetPlaces.getGoogleCities('San Francisco').then(function(data){
        expect(data.data).toBeAn('array');
        expect(data.data.city).toBeA('string');
        expect(data.data.length).toBeGreaterThan(0);
        expect(data.status).toBe(200);
      });
    })
});
  });
