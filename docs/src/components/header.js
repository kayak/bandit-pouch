/* global __IS_DEV__ */
import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Nav, Navbar } from 'react-bootstrap';

const NavigationLink = ({
  active,
  disabled,
  className,
  to,
  useATag=false,
  ...props
}) => {
  // These are injected down by `<Nav>` for building `<SubNav>`s.
  delete props.onSelect;
  delete props.eventKey;
  delete props.activeKey;
  delete props.activeHref;

  return (
    <li
      role="presentation"
      className={classNames(className, { active, disabled })}
    >
      {useATag ? (
        <a {...props} href={to} />

      ) : (
        <Link
          {...props}
          to={to}
          disabled={disabled}
        />
      )}
    </li>
  );
};

const Header = ({ siteTitle }) => (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to="/">{siteTitle}</Link>
      </Navbar.Brand>
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavigationLink to="/ui">UI components</NavigationLink>
        <NavigationLink to="/forms">Form</NavigationLink>
        <NavigationLink to="/redux">Redux</NavigationLink>
        <NavigationLink to="/utils">Utilities</NavigationLink>
        <NavigationLink to="/api">API</NavigationLink>
        <NavigationLink to={__IS_DEV__ ? 'http://localhost:6006/' : '/bandit-pouch/storybook'} useATag>
          Storybook
        </NavigationLink>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

Header.propTypes = {
  siteTitle: PropTypes.string.isRequired,
};

export default Header;
