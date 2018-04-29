angular.module('users')
.controller('WordsCtrl', function ($scope, topMostUsedWords) {
  $scope.search = function (q) {
    topMostUsedWords.fetchWords(q).then(function (result) {
      var words = [];
      result.forEach(function (word) {
        Object.keys(word).forEach(function (key){
          words.push({ word : key, count : word[key] });
        })
      });
      $scope.words = words
    })
  }
})
