describe('Favorite Food Filter', function () {
	var $controller;

	beforeEach(module('app'));

	beforeEach(inject(function ($injector) {
		$filter = $injector.get('$filter');
    FavoriteFood  = $filter('favoriteFood')
    var foods = {1 : {'favoriteFood': 'apple'}, 2: {'favoriteFood': 'pear'}, 3: {'favoriteFood': 'apple'}} 

    it('should return a users favorite food', function() {
      expect(FavoriteFood(foods, 'apple')).length.toEqual(2)
    })
	}));

	
});
