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
        });//end of then
    };//end of self.getEmployees

    self.postNewEmployee = function () {
        console.log('post hit');
        
        $http({
            method: 'POST',
            url: '/employees',
            data: self.newEmployee
        }).then(function(response){
            console.log(response);
            self.getEmployees();
        });//end of then
    };//end of self.postNewEmployee
    

    self.getEmployees();

}]); //end of app. controller 