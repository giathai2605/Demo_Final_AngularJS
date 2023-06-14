window.ProductUpdateController = function (
  $scope,
  $http,
  $location,
  $routeParams
) {
  $scope.categoryName = "";
  $scope.productName = "";
  $scope.productPrice = "";

  var id = $routeParams.id;

  if (id) {
    $http.get(`${productAPI}/${id}`).then(
      function (response) {
        if (response.status === 200) {
          $scope.categoryName = response.data.categoryName;
          $scope.productName = response.data.name;
          $scope.productPrice = response.data.price;
        }
      },
      function (errors) {
        console.log(errors);
      }
    );
  }

  $scope.onSubmit = function () {
    if (id) {
      return $http
        .put(`${productAPI}/${id}`, {
          categoryName: $scope.categoryName,
          name: $scope.productName,
          price: $scope.productPrice,
        })
        .then(
          function (response) {
            if (response.status === 200) {
              $location.path("");
            }
          },
          function (errors) {
            console.log(errors);
          }
        );
    }
  };
};
