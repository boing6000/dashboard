'use strict';

angular.module('adf.widget.linklist', ['adf.provider'])
    .config(function(dashboardProvider){
        dashboardProvider
            .widget('linklist', {
                title: 'Links',
                description: 'Exibir Lista de Links',
                category: 'Diversos',
                templateUrl: '../src/templates/widgets/Linklist/view.html',
                edit: {
                    templateUrl: '../src/templates/widgets/Linklist/edit.html',
                    controller: 'LinklistEditCtrl'
                }
            });
    }).controller('LinklistEditCtrl', function($scope){

    function getLinks(){
        if (!$scope.config.links){
            $scope.config.links = [];
        }
        return $scope.config.links;
    }

    $scope.addLink = function(){
        getLinks().push({});
    };

    $scope.removeLink = function(index){
        getLinks().splice(index, 1);
    };
});