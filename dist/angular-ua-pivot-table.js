/**
 * Angular Directive to create pivot tables wrapping Nicolas Kruchten's pivottable.js for Angular
 * @link https://github.com/dspies/angular-ua-pivot-table
 * @author David Spies
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */

(function () {
  'use strict';

  angular.module('ua.pivottable', [])
    .directive('pivotTable', pivotTableDirective);

  function pivotTableDirective() {
    return {
      restrict: 'E',
      link: function (scope, element, attrs) {
        var derivers = $.pivotUtilities.derivers;

        function updatePivotTable(newValue) {
          if (newValue) {

            var pivotData = scope.$eval(attrs.pivotData);

            if (pivotData) {
              var pivotAttrs = $.extend({}, {
                rows: attrs.rows ? scope.$eval(attrs.rows) : undefined,
                cols: attrs.cols ? scope.$eval(attrs.cols) : undefined,
                aggregatorName: attrs.aggregatorName ? scope.$eval(attrs.aggregatorName) : undefined,
                vals: attrs.vals ? scope.$eval(attrs.vals) : undefined,
                rendererName: attrs.rendererName ? scope.$eval(attrs.rendererName) : undefined,
                derivedAttributes: attrs.derivedAttributes ? scope.$eval(attrs.derivedAttributes) : undefined
              });

              angular.element(element)
                .pivotUI(pivotData, pivotAttrs);
            }
          }
        }

        scope.$watchGroup([
          attrs.pivotData,
          attrs.rows,
          attrs.cols,
          attrs.aggregatorName,
          attrs.vals,
          attrs.rendererName,
          attrs.derivedAttributes
        ], updatePivotTable, true);
      }
    };
  }

}());
