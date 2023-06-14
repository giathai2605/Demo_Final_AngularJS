window.ProductCreateController = function ($scope, $http, $location) {
  $scope.categoryName = "";
  $scope.productName = "";
  $scope.productPrice = "";

  $scope.onSubmit = function () {
    $http
      .post(productAPI, {
        categoryName: $scope.categoryName,
        name: $scope.productName,
        price: $scope.productPrice,
      })
      .then(
        function (response) {
          console.log(response);
          if (response.status === 201) {
            $location.path("products");
            alert("Successful Add");
          }
        },
        function (errors) {
          console.log(errors);
        }
      );
  };
};
