window.angular.module('ngff.services.global', [])
  .factory('Global', function() {
        var current_user = window.user;
        return {
            currentUser: function() { return current_user; },
            isSignedIn: function() { return !!current_user; }
        };
  })
    .factory('OrderService', function($http) {
        var current_order = {};
        current_order.items = [];
        var baseurl = 'https://test.go.pizzaapp.biz/api/v/1';
        var catalog = {};

        return {
            currentOrder: function() {
                return current_order;
            },
            addItem: function(item) {
                current_order.items.push(item);
            },
            getCatalog : function(){
                $http.defaults.headers.common['X-Requested-With'];
                $http.jsonp(baseurl + '/menu/2?callback=JSON_CALLBACK').
                    success(function(data, status, headers, config) {
                        // this callback will be called asynchronously
                        // when the response is available
                        catalog.categories = data.categories;
                    }).
                    error(function(data, status, headers, config) {
                        // called asynchronously if an error occurs
                        // or server returns response with an error status.
                    });
                return catalog;
            }
        };
    });