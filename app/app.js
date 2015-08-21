'use strict';

angular.module('example-app', ['ua.pivottable'])
  .controller('PivotController', PivotController);

function PivotController() {
  var vm = this;

  vm.testData = [
    {firstName: 'Tom', lastName: 'Smith', age: 12},
    {firstName: 'Bill', lastName: 'Smith', age: 33},
    {firstName: 'Gary', lastName: 'Smith', age: 22}
  ];

  vm.testRows = ['firstName'];
  vm.testCols = ['lastName'];
  vm.testAggregatorName = 'Average';
  vm.testVals = ['age'];
  vm.testRendererName = 'Heatmap';
}
