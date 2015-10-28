# Any Equals

Deeply compare any JavaScript data-type

# Installation
```
$ npm i --save any-equals
```

# Usage
```
var equals = require('./lib');

equals(
  ['foo', 'bar'],
  ['bar', 'foo']
); // => true

equals(
  {foo: [[{}], 'foo', 'bar']},
  {foo: ['bar', 'foo', [{}]]}
); // => true

equals(
  {foo: 2, bar: 3},
  {foo: 2, bar: 3, baz: 3}
); => false
```

# License

This code is released under
[CC0](http://creativecommons.org/publicdomain/zero/1.0/) (Public Domain)
