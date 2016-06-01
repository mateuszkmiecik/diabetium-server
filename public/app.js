var app = angular.module('ds', ['chart.js']);


app.controller('Main', function ($scope, Data) {
    $scope.data = {};
    $scope.chartData = [];

    $scope.labels = [];

    $scope.selected = null;

    $scope.choose = function (c) {
        $scope.selected = c;

        console.log($scope.data);
        var entries = $scope.data.data[c].entries;

        $scope.chartData = [ entries.map(function (d) {
            return d.measure;
        })];

        $scope.labels = entries.map(function (d) {
            return d.date;
        });

    };

    Data.getData().then(function (data) {
        $scope.data = data;
    });


});

app.factory('Data', function ($http) {

    var service = {};
    service.getData = getData;
    return service;


    function getData(){
        return $http.get('/get').then(function (res) {
            var data = res.data;
            var clientIds = Object.keys(data);
            return {
                clientIds: clientIds,
                data: data
            }
        });
    }

});