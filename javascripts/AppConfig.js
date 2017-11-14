"use strict";

// app.run(function(FIREBASE_CONFIG){
//   firebase.initializeApp(FIREBASE_CONFIG);
// });

app.config(function($routeProvider){
  $routeProvider
    .when("/login", {
      templateUrl: 'partials/login.html',
      controller: 'Login'
    } )
    .when("/contacts/favorites", {
      templateUrl: 'partials/contacts/favorites.html',
      controller: 'Favorites'
    } )
    .when("/contacts/new", {
      templateUrl: 'partials/contacts/new.html',
      controller: 'NewContact'
    } )
    .when("/contacts/view", {
      templateUrl: 'partials/contacts/view.html',
      controller: 'ViewContact'
    } )
    .otherwise('/login');
});
