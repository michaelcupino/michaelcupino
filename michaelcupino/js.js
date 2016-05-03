/**
 * You must include the dependency on 'ngMaterial' 
 */
angular.module('BlankApp', ['ngMaterial'])
  .controller('HelloController', function($scope, $interval) {
    this.countDown = '123';
    window.console.log('hi');
    function tick() {
      this.countDown--;
    }
    $interval(tick.bind(this), 1000);
  });


