(function () {
  'use strict';

  describe('ua.pivottable', function () {

    var module;

    beforeEach(function () {
      module = angular.module('ua.pivottable');
    });

    it('it is registered', function(){
      expect(module).not.toBeUndefined();
    });

    it('has no dependencies', function () {
      var expectedDependencies = [];

      //Tests that the expected dependencies are present in the module
      expectedDependencies.forEach(function (dependency) {
        expect(module.requires.indexOf(dependency) != -1).toBe(true, dependency + ' should be present, but was not');
      });

      //Tests that the module does not already include modules that were not expected
      module.requires.forEach(function (existingDependency) {
        expect(expectedDependencies.indexOf(existingDependency) !== -1).toBe(true, existingDependency + ' is presented, but not expected');
      });

    });
  });

}());
