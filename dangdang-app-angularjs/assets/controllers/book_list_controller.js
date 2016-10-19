app.controller('bookListController',['$scope','commonService','$routeParams',function($scope,c_service,$routeParams){
    c_service.getData('ertong',function(res){
        $scope.data = res.data.data;
    });
    c_service.getData('lishi',function(res){
        $scope.data = res.data.data;
    });
    c_service.getData('dongman',function(res){
        $scope.data = res.data.data;
    });
    c_service.getData('qingchunwenxue',function(res){
        $scope.data = res.data.data;
    });
}])