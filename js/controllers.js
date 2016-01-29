app.controller('teabagController', ['dataService', teabagController]);
// Change Me

function teabagController(dataService) {
  var vm = this;
  // vm.title = 'Angular Template';
  vm.title = 'Stuff';
  vm.teaCollection = dataService;
  vm.bag = [];
  vm.bagItem = {};

  vm.teaBag = function(item, num) {
    var counter = 0;
    item.num = num;
    for (var i = 0; i < vm.bag.length; i++) {
      if (vm.bag[i].name == item.name) {
        vm.bag[i].num = num;
        counter++;
      }
    }
    if (counter === 0) {
      vm.bag.push(item);
    }
  };
}


app.controller('shoppingController', [shoppingController]);

function shoppingController() {
  var vm = this;

  vm.category = '';
  vm.nameSearch = '';
  vm.priceOrder = '';
  vm.num = 1;

}
