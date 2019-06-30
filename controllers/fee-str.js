var app = angular.module('MyApp', [])
        app.controller('MyController', function ($scope, $window) {
            $scope.Customers = []
               /* { Name: "John Hammond", Country: "United States" },
                { Name: "Mudassar Khan", Country: "India" },
                { Name: "Suzanne Mathews", Country: "France" },
                { Name: "Robert Schidner", Country: "Russia" }
                */ 
            $scope.Add = function () {
                //Add the new item to the Array.
                var customer = {};
                customer.Details = $scope.Details;
                customer.Amount = $scope.Amount;
                $scope.Customers.push(customer);
 
                //Clear the TextBoxes.
                $scope.Details = "";
                $scope.Amount = "";
            };
 
            $scope.Remove = function (index) {
                //Find the record using Index from Array.
                var details = $scope.Customers[index].Details;
                if ($window.confirm("Do you want to delete: " + details)) {
                    //Remove the item from Array using Index.
                    $scope.Customers.splice(index, 1);
                }
            }
        });