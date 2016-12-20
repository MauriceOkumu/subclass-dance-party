describe('ultimateDancer', function() {

  var ultimateDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    ultimateDancer = new makeUltimateDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(ultimateDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(ultimateDancer.$node, 'toggle');
    ultimateDancer.step();
    expect(ultimateDancer.$node.toggle.called).to.be.true;
  });

});