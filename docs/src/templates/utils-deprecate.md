---
id: 'utils-deprecate'
title: 'Deprecate'
---
Display a deprecation warning with the provided message and a stack trace
(Chrome and Firefox only) when the assigned method is called.

Calls to this function are removed from production builds, so they can be
freely added for documentation and debugging purposes without worries of
incurring any performance penalty.

#### Example
```javascript
import { deprecate } from 'bandit-pouch';

const get = deprecate('Deprecation warning', (obj, path) => obj[path])
const result = get({ foo: 1 }, 'foo');
// prints the Deprecation warning message and a stack trace
console.log(result)
// prints out 1
```
