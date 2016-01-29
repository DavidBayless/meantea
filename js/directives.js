app.directive('teaItem', [teaDirective]);

function teaDirective() {
  return {
    templateUrl: '../views/teaItem.html'
  };
}

app.directive('bagOut', [bagDirective]);

function bagDirective() {
  return {
    templateUrl: '../views/checkoutItem.html'
  };
}
