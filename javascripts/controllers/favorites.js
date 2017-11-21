"use strict";

app.controller("Favorites", function($rootScope, $scope, ContactService){
  $scope.contacts = [];


  const getFavoriteContacts = () => {
    ContactService.getFavoriteContacts($rootScope.uid).then((results) => {
    $scope.contacts = Object.keys(results).length === 0? null : results;
    }).catch((error) => {
      console.log("error in getContact", error);
    });
  };

  getFavoriteContacts();

  $scope.updateFavorite = (contact) => {
    if (!contact.favorite) {
      contact.favorite = true;
    } else {
      contact.favorite = false;
    }
    let updatedContact = ContactService.createContactObject(contact);
    ContactService.updateContact(updatedContact, contact.id).then(()=>{
      getFavoriteContacts();
    }).catch((err)=>{
      console.log("error in updateFavorite", err);
    });
  };

});
