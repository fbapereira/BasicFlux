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