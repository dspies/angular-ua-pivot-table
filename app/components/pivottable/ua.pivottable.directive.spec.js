(function () {
  'use strict';

  describe('ua.pivottable.directive', function () {

    var $rootScope, $compile, scope;

    beforeEach(function () {
      module('ua.pivottable');

      inject(function (_$rootScope_, _$compile_) {
        $rootScope = _$rootScope_;
        $compile = _$compile_;
      });

      scope = $rootScope.$new();

      // Sample Test data
      scope.testData = [
        {'firstName': 'Tom', lastName: 'Smith', age: 12},
        {'firstName': 'Bob', lastName: 'Smith', age: 45},
        {'firstName': 'Gary', lastName: 'Smith', age: 23}
      ];
      scope.testRows = ['firstName'];
      scope.testCols = ['lastName'];
      scope.testVals = ['age'];
      scope.testAggregatorName = 'Average';
      scope.testRendererName = 'Heatmap';
    });

    afterEach(function () {
      scope = undefined;
    });

    function validateTableData(directiveHtml){
      expect(directiveHtml).not.toBe('');
      expect(directiveHtml).toContain('firstName');
      expect(directiveHtml).toContain('lastName');
      expect(directiveHtml).toContain('Bob');
      expect(directiveHtml).toContain('Smith');
      expect(directiveHtml).toContain('age');
      expect(directiveHtml).toContain('45');
    }

    it('element is empty if no pivot-data is not specified', function () {
      var element = $compile('<pivot-table></pivot-table>')(scope);
      scope.$digest();
      expect(element.html()).toBe('');
    });

    it('element contains the data properties if pivot-data attr is specified', function () {
      var element = $compile('<pivot-table pivot-data="testData"></pivot-table>')(scope);
      scope.$digest();

      var directiveHtml = element.html();
      validateTableData(directiveHtml);
    });

    it('element contains correct attributes when specified', function () {
      var htmlElement = '<pivot-table pivot-data="testData" rows="testRows" cols="testCols" aggregator-name="testAggregatorName" vals="testVals" renderer-name="testRendererName" ></pivot-table>';

      var element = $compile(htmlElement)(scope);
      scope.$digest();

      var directiveHtml = element.html();
      validateTableData(directiveHtml);

      expect(element[0].querySelector('.pvtRows').innerHTML).toContain('firstName');
      expect(element[0].querySelector('.pvtCols').innerHTML).toContain('lastName');
    });
  });

}());
