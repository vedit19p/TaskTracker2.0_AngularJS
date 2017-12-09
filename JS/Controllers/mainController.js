
app.controller('mainController', function($scope, $http){
    $http.get('JS/data.json')
        .success(function(data){
        $scope.myData = data;

        $scope.onSubmit = function () {

            $scope.myData.push ($scope.formModel);

            $scope.formModel = '';

            //$scope.name = '';
            //$scope.date = '';
            //$scope.assigned = '';
        };
    });

});

//});

//app.controller('mainController', function($scope, $http){
  //  $scope.formModel = {};

    //$scope.onSubmit = function (){
     // console.log("Hey I am woking");
       // console.log($scope.formModel);

      //  $http.myData.push ({'name' : $scope.name, 'date' : $scope.date, 'assigned' : $scope.assigned});

        //$scope.name= '';
        //$scope.date='';
        //$scope.assigned='';
        //.success(function(data){
          //  console.log(":)")
        //})
        //.error(function(data){
          //  console.log(":(")
        //});
    //};

//});

