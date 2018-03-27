/* FIXME:
*
* export a function that removes a single element from the store.
*
* Rules:
* - you must use the functions from "../store"
*
*/

const {getState, setState} = require('../store')

const remove = (title) => {
  const res = {
    pictures: [...getState().pictures].filter( x => x.title !== title)
  }
  setState(res)
};

module.exports = {
  remove
};
