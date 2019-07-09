var app = angular.module('myApp', []);
app.controller('controller', function($scope) {
  $scope.pokemonList = [];

  $scope.getPokemon = function(){
    var pokemonName = $('#getPokemonInput').val();
    var urlP = "https://pokeapi.co/api/v2/pokemon/" + pokemonName
    $.ajax({
      url: urlP,
      success: function(response) {
        $scope.pokemonList.push(response);
        $scope.$apply();
        $('#getPokemonInput').val('');
      },
      error: function() {
          alert("Pokemon not found");
      }
    });
  }
});
