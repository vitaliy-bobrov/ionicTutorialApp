angular.module('starter.controllers', [])

.controller('CategoriesCtrl', ['$scope', 'Categories', function($scope, Categories) {

}])

.controller('CategoryCtrl', ['$scope', '$stateParams', 'Categories', function($scope, $stateParams, Categories) {

}])

.controller('ArticlesCtrl', ['$scope', 'Articles', function($scope, Articles) {

}])

.controller('ArticleDetailCtrl', ['$scope', '$stateParams', 'Articles', function($scope, $stateParams, Articles) {

}]);