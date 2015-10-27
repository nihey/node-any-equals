var typeOf = require('./utils/typeof');

var arrayContains = function(a, b) {
  return a.every(function(aItem) {
    return b.some(function(bItem) {
      return equals(aItem, bItem);
    });
  });
};

var arrayEquals = function(a, b) {
  if (a.length !== b.length) {
    return false;
  }

  return arrayContains(a, b) && arrayContains(b, a);
};

var objectContains = function(a, b) {
  return Object.keys(b).every(function(key) {
    return equals(a[key], b[key]);
  });
};

var objectEquals = function(a, b) {
  return objectContains(a, b) && objectContains(b, a);
};

function equals(a, b) {
  if (typeOf(a) !== typeOf(b)) {
    return false;
  } else if (typeOf(a) === 'array') {
    return arrayEquals(a, b);
  } else if (typeOf(b) === 'object') {
    return objectEquals(a, b);
  }

  return a === b;
}

module.exports = equals;
