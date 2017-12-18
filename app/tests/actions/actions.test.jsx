var expect = require('expect');
var actions = require('Actions');

describe('Actions',()=>{
  it('should generate login action',()=>{
    var action = {
      type:'LOGIN',
      user: {id:'8798797987'}
    };
    var response = actions.login(action.user);

    expect(response).toEqual(action);
  })
});
