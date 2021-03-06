/**
 * Success Criterion 3.2.1: On focus
 *
 * @see http://www.w3.org/WAI/WCAG20/quickref/#qr-consistent-behavior-receive-focus
 */
var SuccessCriteria = require('SuccessCriteria');

var SuccessCriteriaP3G2C1 = (function () {

  /**
   * Determines if this Success Criteria applies to the document.
   */
  function preEvaluator () {
    return true;
  }

  // Create a new SuccessCriteria and pass it the evaluation callbacks.
  var sc = SuccessCriteria({
    name: 'wcag:3.2.1',
    preEvaluator: preEvaluator
  });

  // Techniques
  sc.techniques = {
    G107: 'Using "activate" rather than "focus" as a trigger for changes of context'
  };

  // Failures
  sc.failures = {
    F52: 'Opening a new window as soon as a new page is loaded',
    F55: 'Using script to remove focus when focus is received'
  };

  return sc;
}());

module.exports = SuccessCriteriaP3G2C1;
