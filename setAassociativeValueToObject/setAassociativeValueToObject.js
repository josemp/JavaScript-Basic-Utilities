/**
 * function setAssociativeValueToObject (dataObject,asociativeName,value)
 *
 * Assign values to an object referenced associatively. Creating properties with non-basic types
 * Arrays are referenced with numeric names
 *
 * EXAMPLE: "ped.name" 	is the associative name of the "name" property of the "ped" property that is an object of the root object.
 *          			If the ped object is not created, the function creates it.
 *          "names.1" is the associative name of the second component the "names" property which is an Array of the root object.
 *          			If the names Array is not created, the function creates it.
 *
 * NOTE: Not tested with array of objects
 *
 * USING : 
 *          var myObject = {};
 *          setAssociativeValueToObjet(myObject,"client.name","John");
 *
 * @param[in,out]  {Object} dataObject	 	- Initial Object (Not undefined and not null)
 * @param[in]      {string} asociativeName 	- The associative name of an object property. Is a dotted string
 * @param[in]      {string} value 		- Value assigned to object property
 * @return {Object}                 The Object modified
 */
function setAassociativeValueToObject (dataObject,asociativeName,value)
{
  var dotSplit=asociativeName.split(".");		  	  	  
  var objPointer=dataObject; 
  for (i=0;i<dotSplit.length - 1;i++)
  {
	if (objPointer[dotSplit[i]] === undefined)				     
	 if ( isNaN(dotSplit[i+1] ))
	   objPointer[dotSplit[i]] = {};	   
	 else    
        objPointer[dotSplit[i]] = [];
		
	 objPointer=objPointer[dotSplit[i]]; 
  }
  objPointer[dotSplit[dotSplit.length-1]] = value;
  return dataObject;
}

