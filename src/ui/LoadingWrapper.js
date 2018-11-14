import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import ErrorPage from './ErrorPage';
import PageNotFound from './PageNotFound';
import { CenteredLoader } from './Loaders';

/**
 * Component that can be used to show specific components depending on the current state.
 *
 * If the state is currently loading, the Loading component, if specified, should be shown.
 * In case of an error or that data could not be found, an Error page is displayed.
 * When the state is not loading and there are no errors, the specified component is rendered.
 */
const LoadingWrapper = ({
  component: Child,
  loader: Loader,
  loading,
  error,
  found,
  ...props
}) => {
  if (loading) {
    return <Loader />;
  }

  if (!found) {
    return <PageNotFound />;
  }

  if (error) {
    if (_.isFunction(error)) {
      const Error = error;
      return <Error />;
    }
    if (_.isPlainObject(error)) {
      return <ErrorPage {...error} />;
    }
    return <ErrorPage message={error} />;
  }

  return <Child {...props} />;
};


LoadingWrapper.propTypes = {
  /**
   * React component that should be rendered inside this wrapper
   */
  component: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.func,
  ]).isRequired,
  /**
   * React component that should be shown when `loading` is set to `true`
   */
  loader: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.func,
  ]),
  /**
   * When this prop is `true`, the Loader component is shown
   */
  loading: PropTypes.bool,
  /**
   * When this prop is `false`, the `PageNotFound` component is shown
   */
  found: PropTypes.bool,
  /**
   * Error message that should be show. The message is shown using the `ErrorPage` component.
   * You can pass a component function or a simple message as a string.
   */
  error: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.object,
    PropTypes.string,
  ]),
};

LoadingWrapper.defaultProps = {
  loader: CenteredLoader,
  loading: false,
  error: null,
  found: true,
};

export default LoadingWrapper;
