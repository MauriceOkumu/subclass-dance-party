var makeFunnyDancer = function (top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.timeBetweenSteps = timeBetweenSteps;
};


makeFunnyDancer.prototype = Object.create(makeDancer.prototype);
makeFunnyDancer.prototype.constructor = makeFunnyDancer;


var oldStep = makeDancer.prototype.step;

makeFunnyDancer.prototype.step = function () {
  oldStep.call(this); 
  this.$node.toggle();

};