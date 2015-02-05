angular.module('starter.services', [])

.factory('Categories', ['$http', '$q', function($http, $q) {

  //Endpoints Variables.
  var categoriesEndpoint = '',
      categoryEndpoint = '';

  return {

     /*
     * Return All Categories.
     */
    all: function() {
      var defer = $q.defer();

      $http({
        method    : 'GET',
        url       : categoriesEndpoint,
        dataType  : 'json'
      })
      .success(function(data, status, headers, config){
        defer.resolve(data);
      })
      .error(function(data, status, headers, config){
        defer.reject(data);
      });

      return defer.promise;
    },

    /*
     * Return Category by ID.
     */
    get: function(catId) {
      var defer = $q.defer();

      $http({
        method    : 'GET',
        url       : categoryEndpoint + catId,
        dataType  : 'json'
      })
      .success(function(data, status, headers, config){
        defer.resolve(data);
      })
      .error(function(data, status, headers, config){
        defer.reject(data);
      });

      return defer.promise;
    }
  }
}])

.factory('Articles', ['$http', '$q', function($http, $q) {

  //Endpoints Variables.
  var blogEndpoint = '',
      articleEndpoint = '';

  return {

     /*
     * Return All Articles.
     */
    all: function() {
      var defer = $q.defer();

      $http({
        method    : 'GET',
        url       : blogEndpoint,
        dataType  : 'json'
      })
      .success(function(data, status, headers, config){
        defer.resolve(data);
      })
      .error(function(data, status, headers, config){
        defer.reject(data);
      });

      return defer.promise;
    },

    /*
     * Return Article by ID.
     */
    get: function(articleId) {
      var defer = $q.defer();

      $http({
        method    : 'GET',
        url       : articleEndpoint + articleId,
        dataType  : 'json'
      })
      .success(function(data, status, headers, config){
        defer.resolve(data);
      })
      .error(function(data, status, headers, config){
        defer.reject(data);
      });

      return defer.promise;
    }
  }
}]);