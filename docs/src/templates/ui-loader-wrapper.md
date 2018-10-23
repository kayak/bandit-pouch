---
id: 'ui-loading-wrapper'
title: 'Loading Wrapper'
---
When you need to display a page or a component that depends on remote data you want to show a loading
indicator while fetching the required resources.

Using this component you can also display errors when the remote call returns an error response. 

### Example usage
```javascript
import { LoadingWrapper } from 'bandit-pouch';

const Page = ({ model }) => (
  <div>
      <h1>List page</h1>
      <ul>
        {model.map(({ id, title }) => (
          <li key={id}>
            <p>{title}</p>
          </li>
        ))}
      </ul>
  </div>
);

export default () => (
    <LoadingWrapper
      component={Page}
      loading={loading}
      error={error}
      model={model}
    />
);
```
