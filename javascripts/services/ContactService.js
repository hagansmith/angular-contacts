"use strict";

app.service("ContactService", function ($http, $rootScope, $q, FIREBASE_CONFIG){
  const postNewContact = (newContact) => {
    newContact.uid = $rootScope.uid;
    return $http.post(`${FIREBASE_CONFIG.databaseURL}/contacts.json`, JSON.stringify(newContact));
  };

  const getContacts = (userUid) => {
    let contacts = [];
    return $q((resolve, reject) => {
      $http.get(`${FIREBASE_CONFIG.databaseURL}/contacts.json?orderBy="uid"&equalTo="${userUid}"`).then((results) => {
        let fbContacts = results.data;
          Object.keys(fbContacts).forEach((key) => {
            fbContacts[key].id = key;
            contacts.push(fbContacts[key]);
            resolve(contacts);
          });
      }).catch((error) => {
        reject(error);
      });
    });
  };

  const deleteContact = (contactId) => {
    return $http.delete(`${FIREBASE_CONFIG.databaseURL}/contacts/${contactId}.json`);
  };

  const updateContact = (contact, contactId) => {
    return $http.put(`${FIREBASE_CONFIG.databaseURL}/contacts/${contactId}.json`, JSON.stringify(contact));
  };

  const createContactObject = (contact) => {
    return {
      "cell_phone" : contact.cell_phone,
      "email" : contact.email,
      "favorite" : contact.favorite,
      "first_name" : contact.first_name,
      "home_address" : contact.home_address,
      "home_city" : contact.home_city,
      "home_state" : contact.home_state,
      "home_zip" : contact.home_zip,
      "last_name" : contact.last_name,
      "uid" : contact.uid,
      "work_phone" : contact.work_phone
    };
  };

  const getFavoriteContacts = (userUid) => {
    let contacts = [];
    return $q((resolve, reject) => {
      $http.get(`${FIREBASE_CONFIG.databaseURL}/contacts.json?orderBy="uid"&equalTo="${userUid}"`).then((results) => {
        let fbContacts = results.data;
          Object.keys(fbContacts).forEach((key) => {
            fbContacts[key].id = key;
            if (fbContacts[key].favorite){
              contacts.push(fbContacts[key]);
            }
            resolve(contacts);
          });
      }).catch((error) => {
        reject(error);
      });
    });
  };

  const getSingleContact = (contactId) => {
    return $http.get(`${FIREBASE_CONFIG.databaseURL}/contacts/${contactId}.json`);
  };

  return {postNewContact, getContacts, deleteContact, updateContact, createContactObject, getFavoriteContacts, getSingleContact};
});
