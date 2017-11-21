"use strict";

app.controller("DetailContact", function($location, $routeParams, $scope, ContactService){
  $scope.contacts = [];

  const getContact = () => {
    ContactService.getSingleContact($routeParams.id).then((results) => {
    $scope.contact=results.data;
    }).catch((error) => {
      console.log("error in getContact", error);
    });
  };

  getContact();

  $scope.updateFavorite = (contact) => {
    if (!contact.favorite) {
      contact.favorite = true;
    } else {
      contact.favorite = false;
    }
    let updatedContact = ContactService.createContactObject(contact);
    ContactService.updateContact(updatedContact, $routeParams.id).then(()=>{
    }).catch((err)=>{
      console.log("error in updateFavorite", err);
    });
  };

});
