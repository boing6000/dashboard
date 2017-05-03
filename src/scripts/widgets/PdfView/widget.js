'use strict';

angular.module('adf.widget.pdfviewer', ['adf.provider'])
    .directive('pdfViewer', function($sce){
        return {
            restrict: 'AE',
            scope: {
                src: '='
            },
            template: '<div ng-show="show" id="gdvId" class="gdocsviewer"><iframe ng-src="{{getUrl()}}" width="{{settings.width}}" height="{{settings.height}}"></iframe></div>',
            link: function(scope, element, attrs){
                scope.settings = {
                    width  : '600',
                    height : '700'
                };

                var file = scope.src;
                var ext = file.substring(file.lastIndexOf('.') + 1);
                scope.gdvId = scope.$id;
                scope.show = false;

                scope.getUrl = function(){
                    if (/^(tiff|pdf|ppt|pps|doc|docx|xls|xlsx|jpg|png)$/.test(ext)) {
                        scope.show = true;
                    }
                    return $sce.trustAsResourceUrl('http://academia.dev/Plugin/KbCore/views/pdf/index.php?file=' + scope.src);
                }


            }
        }
    })
    .config(function(dashboardProvider){
        dashboardProvider
            .widget('pdfviewer', {
                title: 'PDF',
                description: 'Exibir PDFs',
                category: 'Relatórios',
                reload: true,
                templateUrl: '../src/templates/widgets/PdfView/view.html',
                edit: {
                    templateUrl: '../src/templates/widgets/PdfView/edit.html',
                    controller: 'PdfViewEditCtrl'
                }
            });
    }).controller('PdfViewEditCtrl', function($scope){

    function getPdfs(){
        if (!$scope.config.pdfs){
            $scope.config.pdfs = [];
        }
        return $scope.config.pdfs;
    }

    $scope.addLink = function(){
        getPdfs().push({});
    };

    $scope.removeLink = function(index){
        getPdfs().splice(index, 1);
    };
});