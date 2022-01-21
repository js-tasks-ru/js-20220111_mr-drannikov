/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {
  if (string.length === 0 || size === 0) {
    return '';
  }
  if (!Boolean(size)) {
    return string;
  }
  let startSubString = 0;

  return string.split('')
    .reduce((acc, item, i, letters) => {
      if (letters[i] !== letters[i + 1]) {
        const subString = string.slice(startSubString, i + 1);
        startSubString = i + 1;
        acc.push(subString);
      }
      return acc;
    }, []).map((item) => (
      item.length > size
        ? item.slice(0, size)
        : item
    )).join('');
}
