'use strict';

angular.module('adf.widget.weather', ['adf.provider'])
    .value('weatherApiKey', 'fe8e62312d4265df60bd83feb042853a')
    .value('weatherServiceUrl', 'http://api.openweathermap.org/data/2.5/weather?units=metric&lang=pt&q=')
    .config(function($sceDelegateProvider) {
        $sceDelegateProvider.resourceUrlWhitelist([
            // Allow same origin resource loads.
            'self',
            // Allow loading from our assets domain.  Notice the difference between * and **.
            'http://*.openweathermap.org/**'
        ])
    })
    .config(function(dashboardProvider){
        dashboardProvider
            .widget('weather', {
                title: 'Pevisão do Tempo',
                description: 'Exibe a previsão do tempo para a cidade selecionada',
                category: 'Diversos',
                templateUrl: '../src/templates/widgets/Weather/view.html',
                controller: 'WeatherCtrl',
                reload: true,
                resolve: {
                    data: function(weatcherService, config){
                        if (config.location){
                            return weatcherService.get(config.location);
                        }
                    }
                },
                edit: {
                    templateUrl: '../src/templates/widgets/Weather/edit.html'
                }
            });
    })
    .service('weatcherService', function($q, $http, weatherServiceUrl, weatherApiKey, $sce){
        return {
            get: function(location){
                var deferred = $q.defer();
                var url = function(){
                    return (weatherServiceUrl + location + '&appid=' + weatherApiKey);
                };
                $http.get(url()).then(
                   function(res){
                        if (res.data && res.data.cod === 200){
                            deferred.resolve(res.data);
                        } else {
                            deferred.reject();
                        }
                    },
                    function(){
                        deferred.reject();
                    });
                return deferred.promise;
            }
        };
    })
    .controller('WeatherCtrl', function($scope, data){
        $scope.data = data;
    });