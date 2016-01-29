app.directive('teaItem', [pokemonDirective]);

function pokemonDirective() {
  return {
    templateUrl: '../views/pokemon.html'
  };
}
