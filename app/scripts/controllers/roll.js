angular.module("controllers").controller("RollController", function ($scope, RollService) {
    $scope.roll = function () {
        var roll = [
            Math.floor(Math.random() * 6) + 1,
            Math.floor(Math.random() * 6) + 1,
            Math.floor(Math.random() * 6) + 1
        ];

        RollService.addRoll(roll);
    }

    chrome.identity.getAuthToken({interactive: true}, function (token) {
        chrome.identity.getProfileUserInfo(function(userInfo) {
            $scope.user = userInfo;
        })
    })
});
