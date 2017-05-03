
'use strict';

angular.module('adf.widget.charts')
  .service('ChartsService', CartsService);

function CartsService($q, $http, $parse){

  function createColumns(config, model){
    var columns = [];

    angular.forEach(config.labels, function(col, i){
      if (col.title && col.path) {
        columns.push({
          label: {key:col.title, value:$parse(col.title)},
          path: {kei:col.path, value:$parse(col.path)}
        });
      }
    });

    return columns;
  }

  function createDataModel(config, data){
    var model = {
      labels: [],
      values: []
    };

    var root = data;
    if (config.root){
      root = $parse(config.root)(data);
    }

    var columns = createColumns(config, model);
    angular.forEach(root, function(node){
      angular.forEach(columns, function(col, i){
        var value = col.path.value(node);
        var label = col.label.value(node);

          model.values.push(value);
          model.labels.push(label);
      });
    });

    return model;
  }

  function fetch(config){
    return $http.get(config.url)
      .then(function(response){
        return response.data;
      })
      .then(function(data){
        // return createDataModel(config, data);
          if (config.root){
              return $parse(config.root)(data);
          }
        return data;
      });
  }

  function get(config){
    var result = null;
    if (config.url){
      result = fetch(config);
    }
    return result;
  }

  return {
    get: get
  };
}
