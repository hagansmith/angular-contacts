"use strict";

app.controller("Login", function($location, $rootScope, $scope, AuthService){
  $scope.authenticate = () => {
    AuthService.authenticateGoogle().then((result) => {
      $rootScope.uid = result.user.uid;
      $scope.$apply(()=>{
      $location.url("/contacts/view");
    });
    }).catch((error) => {
      console.log("error in auth google", error);
    });
  };
});
