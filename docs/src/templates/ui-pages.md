---
id: 'ui-pages'
title: 'Error pages'
---

```javascript
import {
  ErrorPage,
  PageNotFound,
} from 'bandit-pouch';


const AppLayout = () => (
  <>
    <ErrorPage icon="exclamation" className="text-danger">
      <p>An error message</p>
    </ErrorPage>
    <PageNotFound />
  </>
)

```
