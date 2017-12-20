$(document).ready(function () {
  $('.button-collapse').sideNav();

  $(".dropdown-button").dropdown();
  $("#menuDesk").dropdown();
});

var myApp = angular.module('myApp', ["ngRoute"])
  .config(function ($routeProvider) {
    $routeProvider
    .when("/servicosdigitais",{
      templateUrl: "controller/servicosdigitais.html"
    })
    .when("/inovacao",{
      templateUrl: "controller/inovacao.html"
    })
    .when("/sistematizacao",{
      templateUrl: "controller/sistematizacao.html"
    })
    .when("/financeiro",{
      templateUrl: "controller/financeiro.html"
    })
      .when("/", {
        templateUrl: "controller/main.html"
      })
      .when("/portifolio", {
        templateUrl: "controller/portifolio.html"
      })
      .when("/green", {
        templateUrl: "green.htm"
      })
      .when("/blue", {
        templateUrl: "blue.htm"
      });
  });