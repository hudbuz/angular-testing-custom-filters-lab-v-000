describe('removeAllVowels Filter', function () {
	var $controller;

	beforeEach(module('app'));

	beforeEach(inject(function ($injector) {
		$filter = $injector.get('$filter');
    remove = $filter('removeAllVowels')
    var hud = 'hudson'

    it('should remove all vowels', function () {

      expect(remove(hud)).toEqual('hdsn')
    })
	}));

});
