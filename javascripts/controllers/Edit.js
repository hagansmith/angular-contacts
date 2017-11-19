"use strict";

app.controller("EditContact", function($routeParams, $scope, ContactService){
  $scope.contact = [];

  const getContact = () => {
    ContactService.getSingleContact($routeParams.id).then((results) => {
    $scope.contact=results.data;
    }).catch((error) => {
      console.log("error in getContact", error);
    });
  };

  getContact();

});
