import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Link } from 'react-router-dom';
import { Nav, Grid, Navbar, NavItem } from 'react-bootstrap';
import Routes from './routes';

import 'bootstrap/dist/css/bootstrap.css';

const App = () => (
  <BrowserRouter>
    <div>
      <Navbar fluid>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Bandit</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>

        <Navbar.Collapse>
          <Nav>
            <li>
              <Link to="/redux">Redux</Link>
            </li>
            <li>
              <Link to="/forms">Forms</Link>
            </li>
            <li>
              <Link to="/utils">Utils</Link>
            </li>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Grid>
        <Routes />
      </Grid>
      <Grid>
        <footer>
          Copyright Kayak.
        </footer>
      </Grid>
    </div>
  </BrowserRouter>
);
render(<App />, document.getElementById('root'));
