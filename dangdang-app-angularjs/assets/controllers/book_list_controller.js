app.controller('bookListController',['$scope','commonService','$routeParams',function($scope,c_service,$routeParams){
    $scope.data = [];
    c_service.getData($routeParams.id,function(res){
        $scope.data = res.data;
    });
}])