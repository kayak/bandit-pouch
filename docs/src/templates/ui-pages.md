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
    <ErrorPage
      status="503"
      icon="exclamation-circle"
      className="text-danger"
      message="An error message"
    />
    <PageNotFound />
  </>
)

```
