angular.module('feestrApp')
.controller('paymentsController', function($scope, $http, $interval, $cookies, $timeout) {
$scope.initializeContent=function(){
        $scope.newPaymentContent = {};
        $scope.newPaymentContent.title = "";
        $scope.newPaymentContent.brief = "";
        $scope.newPaymentContent.target = "";//Type of Payment
        $scope.newPaymentContent.targetSpecific1 = "";//No of Installments
        $scope.newPaymentContent.targetSpecific2 = "";//Min amt of Installments
        $scope.newPaymentContent.amount =[];
        $scope.newPaymentContent.offer=[];

        $scope.paymentOptions = [];
        $scope.paymentResponses = [];
        $scope.newPaymentContent.isOptional = "";
      }


      $scope.feeData = {
  "feeCode": "Sample",
  "brief": ""
}
      $scope.initializeContent();

      if($scope.newPaymentContent.title === ""){
                  $scope.newContentSaveError = "Give a title to the payment";
                }
                 
    else if($scope.newPaymentContent.brief === ""){
                  $scope.newContentSaveError = "Add a brief to your payment";
                }
    else if($scope.newPaymentContent.amount === ""){
                  $scope.newContentSaveError = "Enter an amount for the payment";
                }
                 else if($scope.newPaymentContent.target === ""){
                  $scope.newContentSaveError = "Mention the Type of Payment";
                }
                else{
                  //Add to server
                  if($scope.newPaymentContent.target == 0 || 1 ){
                    $scope.newPaymentContent.targetAudience = 0;
                  }
                  else{
                    $scope.newPaymentContent.targetAudience=document.getElementById('tokenfield-typeahead').value;
                  }

                  $scope.newContentSaveError = "";
              }
