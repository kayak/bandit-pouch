import React, { Component } from 'react';
import {
  Glyphicon,
  OverlayTrigger,
  Panel,
} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import { Utils } from '../..';

class FieldArrayElement extends Component {
  constructor({ initiallyMinimized }) {
    super();
    this.state = {
      minimized: initiallyMinimized,
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
      bsStyle,
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

    return (
      <Panel bsStyle={bsStyle}>
        <Panel.Body>
          <div>
            {dragHandleProps && (
              <FontAwesome
                name="arrows"
                style={{
                  fontSize: '150%',
                  marginRight: 6,
                }}
                {...dragHandleProps}
              />
            )}

            <button
              type="button"
              style={{
                border: 0, padding: 0, cursor: 'pointer', backgroundColor: 'inherit',
              }}
              onClick={this.switchMinimizationState}
            >
              <h4
                style={{ display: 'inline' }}
                className={bsStyle ? `text-${bsStyle}` : undefined}
              >
                {label || <i>Unnamed</i>}
              </h4>
            </button>

            {onRemove && (
              <OverlayTrigger
                placement="top"
                overlay={Utils.tooltip('Remove')}
              >
                <button
                  type="button"
                  className="pull-right close"
                  aria-label="Remove"
                  style={{ marginRight: 10, fontSize: 15 }}
                  onClick={onRemove}
                >
                  <Glyphicon glyph="remove" />
                </button>
              </OverlayTrigger>
            )}

            {minimizable && (
              <OverlayTrigger
                placement="top"
                overlay={Utils.tooltip(minimized ? 'Maximize' : 'Minimize')}
              >
                <button
                  type="button"
                  className="pull-right close"
                  aria-label="Minimize"
                  style={{ marginRight: 10, fontSize: 15 }}
                  onClick={this.switchMinimizationState}
                >
                  <span aria-hidden={minimized}>
                    <Glyphicon glyph={minimized ? 'plus' : 'minus'} />
                  </span>
                </button>
              </OverlayTrigger>
            )}

            {duplicable && (
              <OverlayTrigger
                placement="top"
                overlay={Utils.tooltip('Duplicate')}
              >
                <button
                  type="button"
                  className="pull-right close"
                  aria-label="Duplicate"
                  style={{ marginRight: 10, fontSize: 15 }}
                  onClick={onDuplicate}
                >
                  <Glyphicon glyph="duplicate" />
                </button>
              </OverlayTrigger>
            )}
          </div>

          <div style={{ marginTop: minimized ? 0 : 10 }}>
            <div style={style}>
              {children}
            </div>
          </div>
        </Panel.Body>
      </Panel>
    );
  }
}

export default FieldArrayElement;
