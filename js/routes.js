app.config(function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: './views/content.html',
    controller: 'shoppingController as SC'
  })
  .when('/blah', {
    templateUrl: './views/checkout.html',
    controller: ''
  });
});
