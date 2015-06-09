angular.module("services").factory("RollService", function ($firebaseArray) {
    var rollsRef = new Firebase("https://ceelo.firebaseio.com/rolls");
    var rolls = $firebaseArray(rollsRef);
    
    return {
        getRolls: function () { return rolls; },     
        addRoll: function (roll) {rolls.$add(roll);}
    };
});
