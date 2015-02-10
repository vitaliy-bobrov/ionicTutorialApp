angular.module('starter.services', [])

.factory('Categories', ['$http', '$q', 'config', function($http, $q, config) {

  //Endpoints Variables.
  var categoriesEndpoint = 'categories',
      categoryEndpoint = 'category/';

  return {

     /*
     * Return All Categories.
     */
    all: function() {
      var defer = $q.defer();

      $http({
        method    : 'GET',
        url       : config.serviceBaseUrl + categoriesEndpoint,
        dataType  : 'json',
      })
      .success(function(data, status, headers, config) {
        defer.resolve(data);
      })
      .error(function(data, status, headers, config) {
        defer.reject(data);
      });

      return defer.promise;
    },

    /*
     * Return Category by ID.
     */
    get: function(catId, page) {
      var defer = $q.defer();

      $http({
        method    : 'GET',
        url       : config.serviceBaseUrl + categoryEndpoint + catId,
        dataType  : 'json',
        params    : {
          page: page,
        },
      })
      .success(function(data, status, headers, config) {
        defer.resolve(data);
      })
      .error(function(data, status, headers, config) {
        defer.reject(data);
      });

      return defer.promise;
    }
  }
}])

.factory('Articles', ['$http', '$q', 'config', function($http, $q, config) {

  //Endpoints Variables.
  var blogEndpoint = 'articles',
      articleEndpoint = 'article/';

  return {

     /*
     * Return All Articles.
     */
    all: function(page) {
      var defer = $q.defer();

      $http({
        method    : 'GET',
        url       : config.serviceBaseUrl + blogEndpoint,
        dataType  : 'json',
        params    : {
          page: page,
        },
      })
      .success(function(data, status, headers, config) {
        defer.resolve(data);
      })
      .error(function(data, status, headers, config) {
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
        url       : config.serviceBaseUrl + articleEndpoint + articleId,
        dataType  : 'json',
      })
      .success(function(data, status, headers, config) {
        defer.resolve(data);
      })
      .error(function(data, status, headers, config) {
        defer.reject(data);
      });

      return defer.promise;
    }
  }
}]);