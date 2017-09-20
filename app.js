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
          $scope.water = 0;
          $scope.phrase = '';
          $scope.myColorStyle;// = {"color":""};
          $scope.addWater = addWater;
          $scope.reset = reset;
          $scope.setThirst = setThirst;
          function setThirst(val) {
            $scope.thirst = val;
          }
          function reset() {
            $scope.thirst = false;
            $scope.water  = 0;
            $scope.phrase = '';
          }
          function addWater(val) {
              $scope.water += val;
              if($scope.water >= 0 && $scope.water <= 300) {
                $scope.phrase = "Bad news, you're going to die of dehydration :(";
                $scope.myColorStyle = {"color":"#FF4136"};
              } else if($scope.water > 300 && $scope.water <= 600) {
                $scope.phrase = "That's all you got?";
                $scope.myColorStyle = {"color":"#85144b"};
              } else if($scope.water > 600 && $scope.water <= 1000) {
                $scope.phrase = "uhm, you're warming up";
                $scope.myColorStyle = {"color":"#F012BE"};
              } else if($scope.water > 1000 && $scope.water <= 1500) {
                $scope.phrase = "keep it up!";
                $scope.myColorStyle = {"color":"#39CCCC"};
              } else if($scope.water > 2000) {
                $scope.myColorStyle = {"color":"#0074D9"};
                $scope.phrase = "wooow, jeez! you're so hydrated ;)";
              } else if($scope.water > 3000) {
                $scope.myColorStyle = {"color":"#FF4136"};
                $scope.phrase = "Bad news, you're going to die of overhydration :'(";
              }
              //$scope.$apply();
          }
        });
}());