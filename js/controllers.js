app.controller('teabagController', ['dataService', teabagController]);
// Change Me

function teabagController(dataService) {
  var vm = this;
  // vm.title = 'Angular Template';
  vm.title = 'Stuff';
  vm.teaCollection = dataService;
  vm.bag = [];
  vm.bagItem = {};
  vm.total = 0;
  vm.subTotals = [];

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
    vm.subTotals[vm.bag.indexOf(item) - 1].num * vm.bag[vm.bag.length - 1].num

  };

  vm.unbag = function(item) {
    console.log(vm.bag.indexOf(item));
    vm.bag.splice(vm.bag.indexOf(item), 1);
  };

  vm.editChecker = function(num) {
    if (num <=0 || num > 10) {
      num = 1;
    }
  };

  vm.sumTotal = function(obj) {
    vm.total += (obj.price * obj.num);
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
