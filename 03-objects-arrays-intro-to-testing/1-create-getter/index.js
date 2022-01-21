/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
export function createGetter(path) {
  const arrKeys = path.split('.');

  const getter = (obj, count = 0) => {
    if (typeof obj !== 'object') {
      return obj;
    }
    const key = arrKeys[count];
    const newObj = obj[key];
    return getter(newObj, count + 1);
  };

  return getter;
}
