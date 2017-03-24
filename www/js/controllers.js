angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $ionicLoading, $ionicModal) {
  $scope.load = function(){
    $ionicLoading.show({
        template: "Loading...",
        duration: 3000
    }).then(function(){
      console.log("Load indicator is displayed");
    });
  };

  $scope.hide = function(){
      $ionicLoading.hide().then(function(){
        console.log('Load indicator hidden');
      });
  };

  $ionicModal.fromTemplateUrl('templates/modal.html',{
    scope: $scope,
    animation: 'side-in-up'
  }).then(function(modal){
    $scope.modal = modal;
  });

  $scope.openModal = function(){
    $scope.modal.show();
  };

  $scope.closeModal = function(){
    $scope.modal.hide();
  };

  $scope.$on('$destroy', function(){
    $scope.modal.remove();
  });

  //execute a fnction when hide modal
  $scope.$on('modal.hidden', function(){});

  //execute a function when remove modal
  $scope.$on('modal.removed', function(){});
})

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

  $scope.doRefresh = function(){
    console.log('Refrescando');
    $scope.$broadcast('scroll.refreshComplete');
  };

  $scope.onHold = function(){
    console.log('Me soltaaaa');
  };

  $scope.onTap= function(){
    console.log("Se me ataca eu vou ataca");
  };

  $scope.onDoubleTap = function(){
    console.log('Double tap mt again');
  };

  $scope.onTouch = function(){
    console.log('Dont touch me, bastard');
  };

  $scope.onRelease = function(){
    console.log('agora corre');
  }

  $scope.onDrag = function(){
    console.log('Estou ficando tonto');
  };

  $scope.items = [1,2,33,4,5];

  $scope.photos = [
    'https://edge.alluremedia.com.au/m/k/2016/01/shutterstock-programming.jpg',
    'https://www.eteki.com/wp-content/uploads/2016/03/Top_4_Trending_Programming_Languages_One_Must_Learn.jpg',
    'https://cdnp-2f3a.kxcdn.com/blog/wp-content/uploads/2015/04/15-Most-Popular-Programming-Languages-You-Must-Learn-in-2015.png',
    'http://readwrite.com/wp-content/uploads/programming-languages-for-iot-e1467856370607.jpg',
    'http://www.boeducation.com/wp-content/uploads/2016/02/programming.jpg',
    'https://userscontent2.emaze.com/images/86d1baf1-44e7-42d0-ae7f-562640406955/15861e3bb65a4bd6ea7b40f6f6f1795c.jpg'
  ];
})

;
