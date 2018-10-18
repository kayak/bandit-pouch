---
id: 'utils-react'
title: 'React'
---
There are two helper methods that can be used to render Bootstrap components in your app.

 - [Popover](https://react-bootstrap.github.io/components/popovers/)
 - [Tooltip](https://react-bootstrap.github.io/components/tooltips/)

#### Example
```javascript
import { tooltip, popover } from 'bandit-pouch';
import { Button, OverlayTrigger } from 'react-bootstrap';

export default () => (
  <div>
    <OverlayTrigger placement="top" overlay={tooltip('Tooltip text')}>
      <Button>Show tooltip!</Button>
    </OverlayTrigger>
    
    <OverlayTrigger trigger="click" placement="right" overlay={popover('Popover title', 'Popover text')}>
      <Button>Show Popover!</Button>
    </OverlayTrigger>
  </div>
);
```
