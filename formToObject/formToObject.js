/**
 * Retrieves input data from a form and returns it as a object.
 * El formato del objeto es dado por los atributos "name" de las etiquetas "input" del formulario.
 * Los atributos name en formato punteado generan el objeto como se explica en la funcion setAssociativeValueToObject
 *
 * Copied initially from https://code.lengstorf.com/get-form-values-as-json/#a-really-simple-example-of-reducing-an-array
 * DEPENDENCE : function setAssociativeValueToObject
 * NOTE : does not support all input fields for now
 * USING : 
        var formGeneral = document.getElementById('formGeneral');        
        var generalObject={};			
		var jsonForm=formToObject(formGeneral.elements,generalObject);

 * @param  {HTMLFormControlsCollection} elements  - the form elements (DOM). The object keys are the names of the form inputs
 * @param  {Object} initialObject  - the form elements (DOM)
 * @return {Object}  form data as an object literal
 */
function formToObject(elements, initialObject) {
  return [].reduce.call(elements, function (data, element) {

    // Make sure the element has the required properties and should be added.
    if (isValidElement(element) && isValidValue(element)) {

      /*
       * Some fields allow for more than one value, so we need to check if this
       * is one of those fields and, if so, store the values as an array.
       */
      if (isCheckbox(element)) {
		// Todavía no se como hacer los checkboxes  
        ;//data[element.name] = (data[element.name] || []).concat(element.value);
      } else if (isMultiSelect(element)) {
        //estos tampoco los conozco
        //data[element.name] = getSelectValues(element);
      } else {
		     setAssociativeValueToObject (data,element.name,element.value)
      }
    } // if is Valid
    return data;
  }, initialObject);
};
/**
 * Checks that an element has a non-empty `name` and `value` property.
 * @param  {Element} element  the element to check
 * @return {Bool}             true if the element is an input, false if not
 */
var isValidElement = function isValidElement(element) {
  return element.name && element.value;
};

/**
 * Checks if an element’s value can be saved (e.g. not an unselected checkbox).
 * @param  {Element} element  the element to check
 * @return {Boolean}          true if the value should be added, false if not
 */
var isValidValue = function isValidValue(element) {
  return !['checkbox', 'radio'].includes(element.type) || element.checked;
};
/**
 * Checks if an input is a checkbox, because checkboxes allow multiple values.
 * @param  {Element} element  the element to check
 * @return {Boolean}          true if the element is a checkbox, false if not
 */
var isCheckbox = function isCheckbox(element) {
  return element.type === 'checkbox';
};

/**
 * Checks if an input is a `select` with the `multiple` attribute.
 * @param  {Element} element  the element to check
 * @return {Boolean}          true if the element is a multiselect, false if not
 */
var isMultiSelect = function isMultiSelect(element) {
  return element.options && element.multiple;
};


