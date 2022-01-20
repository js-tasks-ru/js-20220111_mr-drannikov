/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
export function createGetter(path) {
  const arrKeys = path.split('.');
  let count = 0;

  const getter = (obj) => {
    if (typeof obj !== 'object') {
      return obj;
    }
    const key = arrKeys[count];
    const newObj = obj[key];
    count += 1;
    return getter(newObj);
  };

  return getter;
}
