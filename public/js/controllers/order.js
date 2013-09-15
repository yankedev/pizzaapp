window.angular.module('ngff.controllers.order', [])
  .controller('OrderController',
    function($scope, OrderService) {
        $scope.order = OrderService.currentOrder();
    });