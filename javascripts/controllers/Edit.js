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

// take arguments "contact"(which is defined in scope) and "contacts"(any values changed in the edit): use contacts to update contact, put edited contact to firebase and redirect to view route when complete.
  $scope.editContactInfo = (contact, contacts) => {
    Object.keys(contacts).forEach((key) => {
      contact[key] = contacts[key];
    });
    ContactService.updateContact(contact, $routeParams.id).then(()=>{
      $location.path(`/contacts/view`);
    }).catch((err)=>{
      console.log("error in editContactInfo", err);
    });
  };

});
