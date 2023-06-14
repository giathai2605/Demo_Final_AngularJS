window.ProductController = function ($scope, $http) {
    $scope.products = [];
    $http.get(productAPI).then(
      function (response) {
        if (response.statusText == "OK") {
          $scope.products = response.data;
        }
      },
      function (errors) {
        console.log(errors);
      }
    );
  };
  
