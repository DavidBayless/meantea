app.controller('teabagController', ['dataService', teabagController]);
// Change Me

function teabagController(dataService) {
  var vm = this;
  // vm.title = 'Angular Template';
  vm.title = 'Stuff';
  vm.teaCollection = dataService;
  vm.bag = [];
  vm.bagItem = {};
  vm.bagItem.num = 1;
}


app.controller('shoppingController', [shoppingController]);

function shoppingController() {
  var vm = this;

  vm.category = '';
  vm.nameSearch = '';
  vm.priceOrder = '';
}
