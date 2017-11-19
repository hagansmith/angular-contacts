"use strict";

app.controller("ViewContact", function($location, $rootScope, $scope, ContactService){
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

  $scope.updateFavorite = (contact) => {
    if (!contact.favorite) {
      contact.favorite = true;
    } else {
      contact.favorite = false;
    }
    let updatedContact = ContactService.createContactObject(contact);
    ContactService.updateContact(updatedContact, contact.id).then(()=>{
    }).catch((err)=>{
      console.log("error in updateFavorite", err);
    });
  };

  $scope.editContact = (contactId) => {
    $location.path(`/contacts/edit/${contactId}`);
  };

});
