
'use strict';

angular.module('adf.widget.table')
    .controller('TableEditController', TableEditController);

function TableEditController($scope, config) {
    $scope.config = config.table ||{table:[{columns: [], title: 'Tabela 1', url:'', root:''}]};
    $scope.status = [];

    function getColumns(tbl) {
        if (!$scope.config[tbl].columns) {
            $scope.config[tbl].columns = [];
        }
        return $scope.config[tbl].columns;
    }

    function getTable(tbl) {
        if(tbl !== undefined){
            if (!$scope.config[tbl]) {
                $scope.config[tbl] = {};
            }
            return $scope.config[tbl];
        }
        return $scope.config;
    }

    $scope.addTable = function () {
        var numTables = $scope.config.length + 1;
        getTable().push({title: 'Tabela ' + numTables, url:'', root:''});
    };

    $scope.addColumn = function (tbl) {
        getColumns(tbl).push({});
    };

    $scope.removeColumn = function (tbl, index) {
        getColumns(tbl).splice(index, 1);
    };

    $scope.removeTable = function (tbl) {
        getTable().splice(tbl, 1);
    };
}

