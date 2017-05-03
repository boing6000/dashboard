'use strict';

angular.module('adf.widget.charts', ['adf.provider', 'chart.js'])
    .config(ChartsWidget);

function ChartsWidget(dashboardProvider) {

    var widget = {
        reload: true,
        category: 'Relatórios',
        resolve: {
            config: function (config) {
                return config;
            }
        },
        edit: {
            templateUrl: '../src/templates/widgets/Charts/edit.html',
            controller: 'ChartsEditController'
        }
    };

    dashboardProvider
        .widget('chart',
            angular.extend({
                title: 'Gráfico',
                description: 'Exibe um Gráfico apartir de uma url json',
                templateUrl: '../src/templates/widgets/Charts/base.html',
                controller: 'ChartsController'
            }, widget)
        );
}
