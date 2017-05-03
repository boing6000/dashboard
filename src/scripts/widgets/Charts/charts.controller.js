
'use strict';

angular.module('adf.widget.charts')
    .controller('ChartsController', ChartsController);

function ChartsController($scope, ChartsService, config) {
    $scope.data = [];
    $scope.config = config;

    var options = {
        legend:{
            display: true
        }
    };

    $scope.options = {};


    $scope.colors = [ '#f44336', '#2196f3', '#009688', '#4caf50', '#ff9800', '#ff5722', '#9e9e9e'];

    ChartsService.get(config).then(
        function(res){
            $scope.data = res;
            $scope.options = angular.extend({}, options, $scope.data['options'])
        }
    );


    /*var getData = function (index) {
        if (!$scope.data[index]) {
            ChartsService.get(config.table[index]).then(
                function(res){
                    $scope.data[index] = res;
                }
            );
        }
        return $scope.data[index];
    };*/

    /*angular.forEach(config.table, function(value, key){
       getData(key);
    });*/
}
