"use strict";

app.controller("NewContact", function($location, $scope, ContactService){


$scope.saveContact = (contacts) => {
  ContactService.postNewContact(contacts).then(()=>{
    $location.path('/contacts/view');
  }).catch((error)=>{
    console.log("error in postContact", error);
  });
};

});
