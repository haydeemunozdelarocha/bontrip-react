var expect = require('expect');

var CheckUser = require('CheckUser');

describe('CheckUser',()=>{
  it('should exist',()=>{
    expect(CheckUser).toExist();
  })
  describe('checkUser',()=>{
    it('should return false if no user logged in',()=>{
      localStorage.removeItem('state');

      CheckUser.checkUser().then(function(data){
        expect(data.data.user).toBe(false);
      });
    })
});
describe('loginUser',()=>{

    it('should login user',()=>{

     CheckUser.loginUser('ana@me.com','hello123').then(function(data){
        expect(data.data._id).toBeA('string');
      });

    })
    it('should return error if no user',()=>{

      CheckUser.loginUser().then(function(data,err){
      expect(err).toBe('error')
      });

    })

});
describe('logoutUser',()=>{

    it('should logout user',()=>{

     CheckUser.loginUser('ana@me.com','hello123');

     CheckUser.logoutUser().then(function(data){
        expect(data.data).toBe('logged out');
      });
    })

});
describe('signupUser',()=>{

    it('should signup user',()=>{

     CheckUser.signupUser('user@me.com','hello123').then(function(data){
        expect(data.data._id).toBeA('string');
      });
    })

});
  });
