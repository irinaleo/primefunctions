/* global maxPrimeSum */

describe('Test for Performance', function () {
  describe('maxPrimeSum', function () {
    it('maxPrimeSum(10000) should take less than 50ms', function () {
      this.timeout(50);
      chai.expect(maxPrimeSum(10000)).to.deep.equal([9521, 65]);
    });
  });
});
