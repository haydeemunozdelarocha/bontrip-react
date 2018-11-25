var expect = require('expect');

var GetTrips = require('GetTrips');

describe('GetTrips',()=>{
  it('should exist',()=>{
    expect(GetTrips).toExist();
  })
  describe('getTrips',()=>{
    it('should return user trips',()=>{

      GetTrips.getTrips('5a4d15ecc2dae4662994a6c7').then(function(data){
        expect(data.data).toBeAn('array');
        expect(data.status).toBe(200);
      });
    })
});
describe('selectTrip',()=>{

    it('should select trip',()=>{

     GetTrips.selectTrip('5a4d180ac2dae4662994a6c8').then(function(data){
        expect(data.data._id).toBeA('string');
        expect(data.data).toBeAn('object');
        expect(data.status).toBe(200);
      });

    })


});
describe('deleteTrip',()=>{

    it('should delete trip',()=>{

     GetTrips.deleteTrip('5a4d180ac2dae4662994a6c8').then(function(data){
        expect(data.data.deleted).toBe(true);
      });
    })

});
describe('saveTrip',()=>{

    it('should save trip',()=>{
    var trip={
      name:'Hello',
      start:'2018-01-01',
      end:'2018-01-10',
      cities:['Punta del Este, Uruguay'],
      photo:'https://bontrip.s3.amazonaws.com/Screen Shot 2018-01-05 at 7.09.53 PM.png',
      userId:'5a4d15ecc2dae4662994a6c7'
    };
     GetTrips.saveTrip(trip).then(function(data){
        expect(data.data._id).toBeA('string');
        expect(data.data).toBeAn('object');
        expect(data.status).toBe(200);
      });
    })

});
  });
