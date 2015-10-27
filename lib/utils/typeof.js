module.exports = function(duck) {
  if (Array.isArray(duck)) {
    return 'array';
  }
  return typeof duck;
};
