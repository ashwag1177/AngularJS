(function() {
    'use strict';
  
    angular.module('LunchCheck', [])
           .controller('LunchCheckController', LunchCheckController);
  
    LunchCheckController.$inject = ['$scope'];
  
    function LunchCheckController($scope) {
      $scope.menu                      = '';
      $scope.message                   = '';
      $scope.ColorOfMessage             = '';
      $scope.FontColorOfMessage         = '';
      $scope.BorderColorOfInput = '';
  
      $scope.CheckIfTooMuch = function() {
        var menu  = $scope.menu.split(','),
            count = 0;
  
        for (var i = 0; i < menu.length; i++) {
          if (menu[i].trim(' ').length > 0) {
            count++;
          }
        }
  
        if (count == 0) {
          RedColor('Please enter data first');
        } else if (count <= 3) {
          GreenColor('Enjoy!');
        } else {
          GreenColor('Too much!');
        }
      };
  
      var RedColor = function(message) {
        $scope.message                   = message;
        $scope.FontColorOfMessage          = 'red';
        $scope.BorderColorOfInput = 'red-border';
      };
  
      var GreenColor = function(message) {
        $scope.message                   = message;
        $scope.FontColorOfMessage          = 'green';
        $scope.BorderColorOfInput = 'green-border';
      };
    };
  
  })();
  