describe('about', function () {

  beforeEach(module('angularSeedApp'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    $controller = _$controller_;
  }));

  describe('controller', function () {
		it('should have msg property', function () {
			var $scope = {};
			var controller = $controller('AboutController', { $scope: $scope });
			expect($scope.data.msg).toBe('About');
		});	
	});

});