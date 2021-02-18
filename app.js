(function(){

angular.module('firstAssignment',[])

.controller('doAssignment',function($scope){


  $scope.showValues=function(){
    $scope.food="";

    var foodItems= document.getElementById('getFoodValues').value;
    foodItems=foodItems.split(',');
    if(foodItems.length - 1 == 0){
      $scope.food="Please enter data first";
    }
    else if (foodItems.length>0 && foodItems.length <=3) {
      $scope.food="Enjoy!";
    }
    else  {
        $scope.food="Too much!";
    }
    console.log(foodItems.length);
  };
});

})();
