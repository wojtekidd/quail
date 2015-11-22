/**
 * A simple test case that determines if elements, specified by a selector,
 * exist or not.
 *
 * The test fails for elements that are found and a case is created for each
 * one. The test passes is the selector finds no matching elements.
 */
'use strict';

var Case = require('Case');

var FormHasSubmitButton = function FormHasSubmitButton(test) {

  var selector = 'input[type=submit], button[type=submit]';

  this.get('$scope').each(function () {
    var candidates = $(this).find('form');

    if (candidates.length === 0) {
      test.add(Case({
        element: this,
        status: 'inapplicable'
      }));
    } else {
      candidates.each(function () {
        var submitButton = $(this).find(selector);

        var status = submitButton.length === 1 ? 'passed' : 'failed';

        test.add(Case({
          element: this,
          status: status
        }));
      });
    }
  });
};
module.exports = FormHasSubmitButton;