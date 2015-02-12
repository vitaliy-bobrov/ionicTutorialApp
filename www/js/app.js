// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('blogin', ['ionic', 'angularLocalStorage', 'blogin.controllers', 'blogin.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.constant('config', {
  serviceBaseUrl: 'http://bobrovdevdev.devcloud.acquia-sites.com/?q=',
  localStoragePrefix: 'blogin_',
})

.constant('$ionicLoadingConfig', {
  template: 'Loading...',
  animation: 'fade-in'
})

.config(['$stateProvider', '$urlRouterProvider', '$httpProvider', function($stateProvider, $urlRouterProvider, $httpProvider) {
  $httpProvider.defaults.withCredentials = true;

  // Bar with tabs.
  $stateProvider.state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Categories list tab.
  .state('tab.categories', {
    url: '/categories',
    views: {
      'tab-categories': {
        templateUrl: 'templates/tab-categories.html',
        controller: 'CategoriesCtrl'
      }
    }
  })

  // One category tab with it articles.
  .state('tab.category', {
    url: '/category/:catId',
    views: {
      'tab-categories': {
        templateUrl: 'templates/category.html',
        controller: 'CategoryCtrl'
      }
    }
  })

  // Article details page with full post content.
  .state('tab.category-article', {
    url: '/category/article/:articleId',
    views: {
      'tab-categories': {
        templateUrl: 'templates/article-detail.html',
        controller: 'ArticleDetailCtrl'
      }
    }
  })

  // All articles tab.
  .state('tab.articles', {
    url: '/articles',
    views: {
      'tab-articles': {
        templateUrl: 'templates/tab-articles.html',
        controller: 'ArticlesCtrl'
      }
    }
  })

  // Article details page with full post content.
  .state('tab.article-detail', {
    url: '/articles/:articleId',
    views: {
      'tab-articles': {
        templateUrl: 'templates/article-detail.html',
        controller: 'ArticleDetailCtrl'
      }
    }
  })

  // Account details page.
  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html'
      }
    }
  });

  // default state that shows all articles tab.
  $urlRouterProvider.otherwise('/tab/articles');

}]);
