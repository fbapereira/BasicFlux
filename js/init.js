$(document).ready(function () {
  $('.button-collapse').sideNav();
  $(".dropdown-button").dropdown();
  $("#menuDesk").dropdown();
});

var myApp = angular.module('myApp', ["ngRoute"])
  .config(function ($routeProvider) {
    $routeProvider
      .when("/", {
        templateUrl: "controller/main.html"
      })
      .when("/servicosdigitais", {
        templateUrl: "controller/servicosdigitais.html"
      })
      .when("/inovacao", {
        templateUrl: "controller/inovacao.html"
      })
      .when("/sistematizacao", {
        templateUrl: "controller/sistematizacao.html"
      })
      .when("/financeiro", {
        templateUrl: "controller/financeiro.html"
      })
      .when("/portifolio", {
        templateUrl: "controller/portifolio.html"
      })

      .when("/app", {
        templateUrl: "controller/app.html"
      })
      .when("/contato", {
        templateUrl: "controller/contato.html"
      })

  });