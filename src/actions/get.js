/* FIXME:
*
* export a function that gets a single element from the store.
*
* Rules:
* - you must use the functions from "../store"
*
*/

const {getState} = require('../store');

const get = (elmt) => {
  if (elmt === undefined)
    return null
  const tmp = [...getState().pictures];
  var res = null
  tmp.forEach(x => {
    if (x.title === elmt)
    {
      res = x;
      return
    }
  })
  return res;
};

module.exports = {
  get
};
