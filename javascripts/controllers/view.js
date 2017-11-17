"use strict";

app.controller("ViewContact", function($rootScope, $scope, ContactService){


    ContactService.getContacts($rootScope.uid).then((results) => {
      $scope.contacts = results;
    }).catch((error) => {
      console.log("error in getMovies", error);
    });
  });
