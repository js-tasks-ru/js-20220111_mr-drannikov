/**
 * uniq - returns array of uniq values:
 * @param {*[]} arr - the array of primitive values
 * @returns {*[]} - the new array with uniq values
 */
export function uniq(arr) {
  if (!arr || arr.length === 0) {
    return [];
  }
  return arr.reduce((acc, item) => (acc.includes(item)
    ? [...acc]
    : [...acc, item]
  ), []);
}
