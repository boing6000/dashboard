angular.module('adf.widget.clock', ['adf.provider'])
    .config(function(dashboardProvider){
        dashboardProvider
            .widget('clock', {
                title: 'Relógio',
                description: 'Exibe Data/Hora',
                category: 'Diversos',
                templateUrl: '../src/templates/widgets/Clock/view.html',
                controller: 'ClockController',
                controllerAs: 'clock',
                config: {
                    timePattern: 'HH:mm:ss',
                    datePattern: 'DD/MM/YYYY'
                },
                edit: {
                    templateUrl: '../src/templates/widgets/Clock/edit.html'
                }
            });
    })
    .controller('ClockController', function($scope, $interval, config){
        var clock = this;

        function setDateAndTime(){
            var d = new moment();
            clock.time = d.format(config.timePattern);
            clock.date = d.format(config.datePattern);
        }

        setDateAndTime();

        // refresh every second
        var promise = $interval(setDateAndTime, 1000);

        // cancel interval on scope destroy
        $scope.$on('$destroy', function(){
            $interval.cancel(promise);
        });
    });