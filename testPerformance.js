/* global maxPrimeSum */

describe('Test for Performance', function () {
  describe('maxPrimeSum', function () {
    this.slow(0);
    it('maxPrimeSum(10000) should take less than 50ms', function () {
      this.timeout(50);
      chai.expect(maxPrimeSum(10000)).to.deep.equal([9521, 65]);
    });
    it('maxPrimeSum(100000) should take less than 3000ms', function () {
      this.timeout(3000);
      chai.expect(maxPrimeSum(100000)).to.deep.equal([92951, 183]);
    });
  });
});
