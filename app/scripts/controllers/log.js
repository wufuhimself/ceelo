angular.module("controllers").controller("LogController", function ($scope, RollService) {
    $scope.rolls = RollService.getRolls();
});
