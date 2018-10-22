---
id: 'utils-validators'
title: 'Validators'
---
This library comes with a list of common Form field validators.

#### required
The required validator validates that the value is defined.
This validator will probably the most used one, it corresponds to HTML5's required attribute.
```javascript
import React  from 'react';
import { Field } from 'redux-form';
import { Validators } from 'bandit-pouch';

const required = Validators.required('Field is required');

export default (props) => (
  <Field {...props} validate={required} />
)
```

#### regex
The format validator will validate a value against a regular expression of your chosing.
You can customize the error message to something more intuitive.
```javascript
import React  from 'react';
import { Field } from 'redux-form';
import { Validators } from 'bandit-pouch';

const zip = Validators.regex(/\d{5}(-\d{4})?/, 'Invalid ZIP code');

export default (props) => (
  <Field {...props} validate={zip} />
)
```

#### url
The URL validator ensures that the input is a valid URL
```javascript
import React  from 'react';
import { Field } from 'redux-form';
import { Validators } from 'bandit-pouch';

const url = Validators.url('Invalid URL');

export default (props) => (
  <Field {...props} validate={url} />
)
```

#### alpha
Validator ensures that the input contains alphanumeric characters plus empty space( ), dash(-) or underscore(_) 
```javascript
import React  from 'react';
import { Field } from 'redux-form';
import { Validators } from 'bandit-pouch';

const alpha = Validators.alpha('Invalid URL');

export default (props) => (
  <Field {...props} validate={alpha} />
)
```

#### containing
The containing validator is useful for validating input from a dropdown for example.
It checks that the given value exists in the list given by the within option.
```javascript
import React  from 'react';
import { Field } from 'redux-form';
import { Validators } from 'bandit-pouch';

const validSizes = Validators.containing(['small', 'medium', 'large']);

export default (props) => (
  <Field {...props} validate={validSizes} />
)
```

#### excluding
The excluding validator is useful for restriction certain values.
It checks that the given value is not in the list given by the within option.
```javascript
import React  from 'react';
import { Field } from 'redux-form';
import { Validators } from 'bandit-pouch';

const invalidSizes = Validators.excluding(['s', 'm', 'l']);

export default (props) => (
  <Field {...props} validate={invalidSizes} />
)
```

#### min
The length validator will check the length of a string, number, array or an object.
If the length, size or value is lower than the defined minimum, an error message is returned.
```javascript
import React  from 'react';
import { Field } from 'redux-form';
import { Validators } from 'bandit-pouch';

const minimumAge = Validators.min(18);

export default (props) => (
  <Field {...props} validate={minimumAge} />
)
```

#### max
The length validator will check the length of a string, number, array or an object.
If the length, size or value is higher than the defined maximum, an error message is returned.
```javascript
import React  from 'react';
import { Field } from 'redux-form';
import { Validators } from 'bandit-pouch';

const maximumHeight = Validators.min(5);

export default (props) => (
  <Field {...props} validate={maximumHeight} />
)
```

#### between
The length validator will check the length of a string, number, array or an object.
If the length, size or value is higher than the defined maximum or lower than the minimum value, an error message is returned.
```javascript
import React  from 'react';
import { Field } from 'redux-form';
import { Validators } from 'bandit-pouch';

const range = Validators.between(5, 10);

export default (props) => (
  <Field {...props} validate={range} />
)
```
