"use strict";

app.service("ContactService", function ($http, $rootScope, $q, FIREBASE_CONFIG){
  const postNewContact = (newContact) => {
    newContact.uid = $rootScope.uid;
    return $http.post(`${FIREBASE_CONFIG.databaseURL}/contacts.json`, JSON.stringify(newContact));
  };

  const getContacts = (userUid) => {
    return $q((resolve, reject) => {
      $http.get(`${FIREBASE_CONFIG.databaseURL}/contacts.json?orderBy="uid"&equalTo="${userUid}"`).then((results) => {
        let contacts = (results.data);
          resolve(contacts);
      });
      }).catch((error) => {
      reject(error);
    });
  };

  const deleteContact = (contact) => {
  return $http.delete(`${FIREBASE_CONFIG.databaseURL}/contacts/${contact}.json`);
  };

  return {postNewContact, getContacts, deleteContact};
});
