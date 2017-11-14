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
    .when("/favorites", {
      templateUrl: 'partials/contacts/favorites.html',
      controller: 'Favorites'
    } )
    .when("/new", {
      templateUrl: 'partials/contacts/new.html',
      controller: 'NewContact'
    } )
    .when("/view", {
      templateUrl: 'partials/contacts/view.html',
      controller: 'ViewContact'
    } )
    .otherwise('/login');
});
