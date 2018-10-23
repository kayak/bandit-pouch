---
id: 'ui-loaders'
title: 'Loaders'
---
This library uses [react-loaders](https://github.com/jonjaques/react-loaders) and 
[loaders.css](https://github.com/ConnorAtherton/loaders.css) to render loading components with
nice animations.

### Example usage
```javascript
import { Loader, CenteredLoader } from 'bandit-pouch';


export default () => (
    <div>
      <p>Simple loader wrapper inside a `div` container</p>
      <Loader type="ball-spin-fade-loader" />
      
      <p>Vertically and Horizontally centered loader</p>
      <CenteredLoader type="line-scale-pulse-out" />
    </div>
);
```
