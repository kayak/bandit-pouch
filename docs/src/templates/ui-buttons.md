---
id: 'ui-buttons'
title: 'Buttons'
---
You can use the IconButton component to render Bootstrap Buttons with a Font Awesome icons.
If a tooltip text parameter is provided the Button would be show a Tooltip overlay on hover.

```javascript
import { IconButton, Popover, Tooltip } from 'bandit-pouch';

export default () => (
  <div>
    <IconButton icon="play" bsStyle="primary" />
    <IconButton icon="stop" label="Stahp!" bsStyle="danger" />
    <Popover title="Login" text="Enter your credentials">
      <IconButton icon="user" />
    </Popover>
    <Tooltip text="Pause the player">
      <IconButton icon="pause" />
    </Tooltip>
  </div>
);
```
