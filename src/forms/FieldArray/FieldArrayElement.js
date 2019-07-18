import React, { Component } from 'react';
import {
  Card,
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tooltip from '../../ui/Tooltip';
import IconButton from '../../ui/IconButton';

const TOOLBAR_BUTTON_STYLE = { marginRight: 10, fontSize: 15 };

class FieldArrayElement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      minimized: props.minimizable && props.initiallyMinimized,
    };

    this.switchMinimizationState = this.switchMinimizationState.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { label, minimized } = this.state;

    return label !== nextProps.label || nextState.minimized === false || minimized !== nextState.minimized;
  }

  switchMinimizationState() {
    this.setState(prevState => ({
      ...prevState,
      minimized: !prevState.minimized,
    }));
  }

  render() {
    const {
      label,
      variant,
      dragHandleProps,
      minimizable,
      duplicable,
      children,
      onRemove,
      onDuplicate,
    } = this.props;

    const {
      minimized,
    } = this.state;

    const style = {
      height: 'auto',
      transition: 'all 2s ease-in, overflow 0s 2s',
    };

    if (minimized) {
      style.height = 0;
      style.overflow = 'hidden';
    }

    const headerLabel = (
      <h4
        style={{ display: 'inline' }}
        className={variant ? `text-${variant}` : undefined}
      >
        {minimizable ? (label || <i>Unnamed</i>) : label}
      </h4>
    );

    return (
      <Card variant={variant}>
        <Card.Body>
          <div>
            {dragHandleProps && (
              <FontAwesomeIcon
                icon="arrows"
                style={{
                  fontSize: 16,
                  marginRight: 6,
                }}
                {...dragHandleProps}
              />
            )}

            {minimizable ? (
              <button
                type="button"
                style={{
                  border: 0, padding: 0, cursor: 'pointer', backgroundColor: 'inherit',
                }}
                onClick={this.switchMinimizationState}
              >
                {headerLabel}
              </button>
            ) : headerLabel}

            {onRemove && (
              <Tooltip text="Remove" placement="top">
                <IconButton
                  icon="times"
                  size="sm"
                  variant="link"
                  onClick={onRemove}
                  className="float-right close"
                  style={TOOLBAR_BUTTON_STYLE}
                />
              </Tooltip>
            )}

            {minimizable && (
              <Tooltip text={minimized ? 'Maximize' : 'Minimize'} placement="top">
                <IconButton
                  size="sm"
                  variant="link"
                  style={TOOLBAR_BUTTON_STYLE}
                  className="float-right close"
                  icon={minimized ? 'plus' : 'minus'}
                  onClick={this.switchMinimizationState}
                />
              </Tooltip>
            )}

            {duplicable && (
              <Tooltip text="Duplicate" placement="top">
                <IconButton
                  icon="copy"
                  size="sm"
                  variant="link"
                  onClick={onDuplicate}
                  className="float-right close"
                  style={TOOLBAR_BUTTON_STYLE}
                />
              </Tooltip>
            )}
          </div>

          <div style={{ marginTop: minimized ? 0 : 10 }}>
            <div style={style}>
              {children}
            </div>
          </div>
        </Card.Body>
      </Card>
    );
  }
}

export default FieldArrayElement;
