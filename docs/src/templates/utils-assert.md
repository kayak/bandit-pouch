---
id: 'utils-assert'
title: 'Assert'
---
Verify that a certain expectation is met, or throw a exception otherwise.

This is useful for communicating assumptions in the code to other human
readers as well as catching bugs that accidentally violates these
expectations.

Assertions are removed from production builds, so they can be freely added
for documentation and debugging purposes without worries of incurring any
performance penalty. However, because of that, they should not be used for
checks that could reasonably fail during normal usage. Furthermore, care
should be taken to avoid accidentally relying on side-effects produced from
evaluating the condition itself, since the code will not run in production.

#### Example
```javascript
import { assert } from 'bandit-pouch';

export default function get(obj, path) {
  assert(typeof obj === 'object', 'Object must be a Object');
  assert(typeof path === 'string', 'Path must be a string');
  return obj[path];
}
```
