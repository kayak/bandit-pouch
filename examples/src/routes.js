import React from 'react';
import { Route } from 'react-router-dom';

const UI = () => (<p>UI page</p>);
const Redux = () => (<p>Redux</p>);
const Forms = () => (<p>Forms</p>);
const Utils = () => (<p>Utils</p>);

export default function Routes() {
  return (
    <div>
      <Route exact path="/" name="ui" component={UI} />
      <Route path="/redux" name="redux" component={Redux} />
      <Route path="/forms" name="forms" component={Forms} />
      <Route path="/utils" name="utils" component={Utils} />
    </div>
  );
}
