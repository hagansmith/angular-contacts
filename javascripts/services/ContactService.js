"use strict";

app.service("ContactService", function ($http, $rootScope, $q, FIREBASE_CONFIG){
  const postNewContact = (newContact) => {
    let uid = $rootScope.uid;
    // newContact.push(uid);
    console.log(newContact);
    return $http.post(`${FIREBASE_CONFIG.databaseURL}/contacts.json`, JSON.stringify(newContact));
  };

  const getContacts = (userUid) => {
    let contacts = [];
    return $q((resolve, reject) => {
      $http.get(`${FIREBASE_CONFIG.databaseURL}/contacts.json?orderBy="uid"&equalTo="${userUid}"`).then((results) => {
        contacts.push(results.data);
        console.log("in get contacts", results);
          resolve(contacts);
      });
      }).catch((error) => {
      reject(error);
    });
  };

  return {postNewContact, getContacts};
});
