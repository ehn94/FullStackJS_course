var expect = require('chai').expect;

describe('Array', function(){
  before(function(){
    // ...
  });

  describe('#indexOf()', function(){
    it('should return -1 when not present', function(){
      expect([1,2,3].indexOf(4)).to.be.equal(-1);
    });
  });
});