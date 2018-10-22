---
id: 'ui-abbreviation'
title: 'Abbreviation'
---
You can use this component to wrap a label in abbreviation tags if a valid tooltip is provided.
We differentiate the abbr style depending on the type passed in so that the dotted
line is shown properly on the metric labels.

Here is an example with moment that would renders a tooltip in ISO 8601 format whereas the
abbreviation would contain the time from.

```javascript
import moment from 'moment';
import { Abbreviation } from 'bandit-pouch';

export default () => {
  const date = moment().subtract(3, 'm');

  return (
    <div>
      <p>
        This example was shown
        &nbsp;
        <Abbreviation
          label={date.fromNow()}
          tooltip={date.format('YYYY-MM-DD H:mm:ss')}
        />
      </p>
    </div>
  );
};
```
