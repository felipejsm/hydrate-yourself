(function() {
    
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAfcQ_zUfTElCXF196cOHT7wYDVKdDUJRQ",
    authDomain: "hydrate-yourself.firebaseapp.com",
    databaseURL: "https://hydrate-yourself.firebaseio.com",
    projectId: "hydrate-yourself",
    storageBucket: "hydrate-yourself.appspot.com",
    messagingSenderId: "206134774012"
  };
  firebase.initializeApp(config);
   
   angular
        .module('app',['firebase'])
        .controller('myCtrl', function($firebaseObject, $scope) {
          $scope.thirst = false;
        })
}());