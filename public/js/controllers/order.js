window.angular.module('ngff.controllers.order', [])
  .controller('OrderController',
    function($scope, OrderService) {
        $scope.order = OrderService.currentOrder();

        var baseOrder = {"":
            {"message":"","delivery":"HOME_DELIVERY",
            "user":{"device":"iPhone","city":"Roveredo","phoneNumber":"0765620318","streetAddress":"Carasole 83",
                "token":"aaaaabbbbbbbbbcccccccdddddd","firstname":"Alessia","latitude":0,"lastname":"Fibbioli","longitude":0,"cap":"6535"},
            "customerId":"{customerId}",
            "date":"12.05.2013 22:25",
            "status":"NEW",
            "items":[{"description":"pomodoro, mozzarella,aglio, peperoncino","name":"Diavolina","price":12.5},
            {"description":"pomodoro, mozzarella, origano","name":"Margherita","price":12}],
            "isShared":0}};

        $scope.registerOrder = function(order){
            var neworder = {};
            angular.copy(baseOrder, neworder);
            neworder[""].items = order.items;
            OrderService.saveOrder(neworder);
        }
    });