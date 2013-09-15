window.angular.module('ngff.controllers.menu', [])
  .controller('MenuController',
    function($scope, OrderService) {
        $scope.menu = {};
        $scope.menu.groups = [{title: 'Novità', items : [{name: 'Gamberetti', price: '16.5', description: 'Porzione 30 pz.'}]},
            {title: 'Pizza', items : [{name: 'Margherita', price: '12', description: 'Pomodoro, Mozzarella'},
                {name: 'Diavoletta', price: '12.5', description: 'Pomodoro, Mozzarella, Salame Piccante'}]}];
        $scope.catalog = OrderService.getCatalog();
        $scope.order = OrderService;
    });