console.log('it lives');

var app = angular.module('EmployeeApp', [])

app.controller('EmployeeController', ['$http', function ($http) {
    console.log('EmployeeController Loaded');

    var self = this;

    self.employees = [];


    self.getEmployees = function () {


        $http({
            method: 'GET',
            url: '/employees'
        }).then(function (response) {
            self.employees = response.data;
            console.log (response.data);
            console.log (self.employees);
        });//end of then
    };//end of self.getEmployees


    

    self.getEmployees();

}]); //end of app. controller 