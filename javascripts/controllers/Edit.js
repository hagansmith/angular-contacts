"use strict";

app.controller("EditContact", function($location, $routeParams, $scope, ContactService){
  $scope.contact = [];

  const getContact = () => {
    ContactService.getSingleContact($routeParams.id).then((results) => {
    $scope.contact=results.data;
    }).catch((error) => {
      console.log("error in getContact", error);
    });
  };

  getContact();


  $scope.editContactInfo = (contact) => {
    ContactService.updateContact(contact, $routeParams.id).then(()=>{
      $location.path(`/contacts/view`);
    }).catch((err)=>{
      console.log("error in editContactInfo", err);
    });
  };

});
