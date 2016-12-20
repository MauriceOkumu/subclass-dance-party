describe('funnyDancer', function() {

  var funnyDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    funnyDancer = new makeFunnyDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(funnyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(funnyDancer.$node, 'toggle');
    funnyDancer.step();
    expect(funnyDancer.$node.toggle.called).to.be.true;
  });

});