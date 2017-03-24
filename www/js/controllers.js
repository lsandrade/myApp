angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})

.controller('ListCtrl', function($scope){
})

.controller('FormCtrl', function($scope, $ionicActionSheet, $timeout, $ionicBackdrop){
  $scope.show = function(){

    var hideSheet = $ionicActionSheet.show({
      buttons: [
        {text: '<b>Share</b> This'},
        {text: 'Move'}
      ],
      destructiveText: 'Delete',
      titleText: 'Modify your options',
      cancelText: 'cancel',
      cancel: function(){},
      buttonClicked: function(index){
        return true;
      }
    });

    $timeout(function(){
      hideSheet();
    }, 2000);
  };

  $scope.backdrop = function(){
    $ionicBackdrop.retain();
    $timeout(function(){
      $ionicBackdrop.release();
    }, 1500)
  };
})

;
