angular.module('starter.controllers', [])

.controller('CategoriesCtrl', ['$scope', '$ionicLoading', 'Categories', function($scope, $ionicLoading, Categories) {
  $ionicLoading.show();

  Categories.all().then(function(data) {
    $ionicLoading.hide();

    $scope.categories = data;
  }, function(error) {
    console.log(error);
  });
}])

.controller('CategoryCtrl', ['$scope', '$stateParams', 'Categories', function($scope, $stateParams, Categories) {
  $scope.page = 0;
  $scope.articles = [];
  $scope.category = false;
  $scope.morePageExist = true;

  $scope.loadMore = function() {
    Categories.get($stateParams.catId, $scope.page).then(function(data) {
      var length = data.length;

      if(!$scope.category) {
        $scope.category = data[0];
      }

      if(length > 0) {
        $scope.articles = $scope.articles.concat(data);
        $scope.page++;

        if(length < 10) {
          $scope.morePageExist = false;
        }
      }
      else {
        $scope.morePageExist = false;
      }

      $scope.$broadcast('scroll.infiniteScrollComplete');
    }, function(error) {
      console.log(error);
    });
  };
}])

.controller('ArticlesCtrl', ['$scope', 'Articles', function($scope, Articles) {
  $scope.page = 0;
  $scope.articles = [];
  $scope.morePageExist = true;

  $scope.loadMore = function() {
    Articles.all($scope.page).then(function(data) {
      var length = data.length;

      if(length > 0) {
        $scope.articles = $scope.articles.concat(data);
        $scope.page++;

        if(length < 10) {
          $scope.morePageExist = false;
        }
      }
      else {
        $scope.morePageExist = false;
      }

      $scope.$broadcast('scroll.infiniteScrollComplete');
    }, function(error) {
      console.log(error);
    });
  };
}])

.controller('ArticleDetailCtrl', ['$scope', '$stateParams', '$ionicLoading', 'Articles', function($scope, $stateParams, $ionicLoading, Articles) {
  $ionicLoading.show();

  Articles.get($stateParams.articleId).then(function(data) {
    $ionicLoading.hide();

    $scope.article = data[0];
  }, function(error) {
    console.log(error);
  });
}]);