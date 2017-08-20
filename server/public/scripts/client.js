console.log('it lives');

var app = angular.module('EmployeeApp',[])

app.controller('EmployeeController', ['$http', function($http){
console.log('EmployeeController Loaded');

var self = this;

var employees = [];

self.getEmployees= function(){
    $http({
        method:'GET',
        url: '/employees'
    }).then(function(response){
        self.employees= response.data
    });//end of then
};//end of self.getEmployees

self.getEmployees();

}]); //end of app. controller 