"use strict";

app.controller("ViewContact", function($rootScope, $scope, ContactService){
  $scope.contacts = [];


  const getContacts = () => {
    ContactService.getContacts($rootScope.uid).then((results) => {
    $scope.contacts = Object.keys(results).length === 0? null : results;
    }).catch((error) => {
      console.log("error in getContact", error);
    });
  };

  getContacts();

  $scope.deleteContact = (contact) => {
    ContactService.deleteContact(contact).then((result)=>{
      getContacts();
    }).catch((err)=>{
      console.log("error in deleteContact", err);
    });
  };
});
