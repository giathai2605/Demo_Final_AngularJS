var app = angular.module("my-app", ["ngRoute"]);
app.config(function ($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix("");
  $routeProvider
    .when("/home", {
      templateUrl: "./pages/home.html",
      controller: ProductController
    })
    .when("/products/delete/:id", {
      templateUrl: "./pages/home.html",
      controller: ProductDeleteController,
    })
    .when("/products/edit/:id", {
      templateUrl: "./pages/product-create.html",
      controller: ProductUpdateController,
    })
        .when("/products/create", {
      templateUrl: "./pages/product-create.html",
      controller: ProductCreateController,
    })
    .otherwise({
      redirectTo: "/home",
    });
});
