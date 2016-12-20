var makeUltimateDancer = function (top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.timeBetweenSteps = timeBetweenSteps;
};


makeUltimateDancer.prototype = Object.create(makeDancer.prototype);
makeUltimateDancer.prototype.constructor = makeUltimateDancer;


var oldStep = makeDancer.prototype.step;

makeUltimateDancer.prototype.step = function () {
  oldStep.call(this); 
  this.$node.toggle();

};