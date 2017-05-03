
'use strict';

angular.module('adf.widget.charts')
    .controller('ChartsEditController', ChartsEditController);

function ChartsEditController($scope, config) {
    $scope.config = config ||{labels: [], title: 'Gráfico 1', url:'', root:'', type: ''};
    $scope.status = [];

    $scope.options = [
        {type: 'line', label: 'Linha'},
        {type: 'bar', label: 'Barras Verticais'},
        {type: 'horizontalBar', label: 'Barras Horizontais'},
        {type: 'radar', label: 'Radar'},
        {type: 'polarArea', label: 'Área Polar'},
        {type: 'pie', label: 'Pizza'},
        {type: 'doughnut', label: 'Rosquinha'},
        {type: 'bubble', label: 'Bolhas'}
    ];

    function getRandomColors () {
        var letters = '0123456789ABCDEF'.split('');
        var _color = '#';
        for (var i = 0; i < 6; i++) {
            _color += letters[Math.floor(Math.random() * 16)];
        }
        return _color;
    }

    function getColumns() {
        if (!$scope.config.labels) {
            $scope.config.labels = [];
        }
        return $scope.config.labels;
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
        getColumns(tbl).push({color: getRandomColors()});
    };

    $scope.removeColumn = function (index) {
        getColumns().splice(index, 1);
    };

    $scope.removeTable = function (tbl) {
        getTable().splice(tbl, 1);
    };
}

