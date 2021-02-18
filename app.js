(function(){

angular.module('firstAssignment',[])

.controller('doAssignment',function($scope){


  $scope.showValues=function(){
    $scope.food="";

    var foodItems= document.getElementById('getFoodValues').value;

    foodItems=foodItems.split(',');

    if(foodItems.length<=3)
      $scope.food="Enjoy!";
    else  {
        $scope.food="Too much!";
    }
    console.log($scope.food);
  };

});

})();
