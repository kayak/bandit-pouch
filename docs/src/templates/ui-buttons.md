---
id: 'ui-buttons'
title: 'Buttons'
---
You can use the IconButton component to render Bootstrap Buttons with a Font Awesome icons.
If a tooltip text parameter is provided the Button would be show a Tooltip overlay on hover.

```javascript
import { IconButton } from 'bandit-pouch';

const ButtonsExample = () => (
    <div>
        <IconButton icon="play" bsStyle="primary" />
        <IconButton icon="stop" label="Stahp!" bsStyle="danger" />
        <IconButton icon="pause" tooltip="Pause the player" />
    </div>
);
```
