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
            $scope.email;
            $scope.password;
            $scope.isLogged = false;
            $scope.createUser = createUser;
            $scope.loginUser  = loginUser;
            $scope.logOut     = logOut;
            function createUser() {
                const auth = firebase.auth();
                const promise = aut.createUserWithEmailAndPassword($scope.email, $scope.password);
                
            }
            function loginUser() {
                const auth = firebase.auth();
                const promise = auth.signInWithEmailAndPassword($scope.email, $scope.password);
                promise.catch(e => console.log(e.message));
            }
            function logOut() {
                firebase.auth().signOut();
            }
            firebase.auth().onAuthStateChanged(firebaseUser => {
                if(firebaseUser) {
                    console.log(firebaseUser);
                    btnLogout.classList.remove('hide');
                    $scope.isLogged = true;
                } else {
                    console.log("not logged in");
                    $scope.isLogged = false;
                }
            })

    });
}());