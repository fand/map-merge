/**
 * Map values into objects and merge them.
 * @param {Array<T>} array
 * @param {function(elem: T): Object} transform
 * @return {Object}
 */
function mapMerge (array, transform) {
  return Object.assign({}, ...array.map(transform));
}

export default mapMerge;
