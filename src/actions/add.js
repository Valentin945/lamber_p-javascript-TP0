/* FIXME:
*
* export a function that adds a new element to the store.
*
* Rules:
* - add must be able to take either a single element
* or an array of new elements
* - you must use the functions from "../store"
*
*/
const  {getState, setState} = require('../store')


const add = (elmts) => {
  var tmp = {}
  if (Array.isArray(elmts))
     tmp.pictures = [...getState().pictures, ...elmts]
  else
     tmp.pictures = [...getState().pictures, elmts]
  setState(tmp)
};

module.exports = {
  add
};
