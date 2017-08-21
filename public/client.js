console.log('it lives');

var app = angular.module('EmployeeApp', [])

app.controller('EmployeeController', ['$http', function ($http) {
    console.log('EmployeeController Loaded');

    var self = this;

    self.employees = [];
    self.newEmployee = {};


    self.getEmployees = function () {
        self.annualCost = 0;
        $http({
            method: 'GET',
            url: '/employees'
        }).then(function (response) {
            self.employees = response.data;
            for (var i = 0; i < response.data.length; i++) {
                var element = response.data[i];
            //     self.annualCost.push(element.salary)                
            self.annualCost = self.annualCost + element.salary
        }
            console.log(self.annualCost);
            self.monthlyCost = self.annualCost/12
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
            self.newEmployee = {};
            });//end of then
    };//end of self.postNewEmployee
    


    self.getEmployees();

}]); //end of app. controller 