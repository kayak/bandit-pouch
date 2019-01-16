/* eslint-disable react/prop-types */
import React from 'react';
import { Overlay } from 'react-bootstrap';

export const DatePickerPopover = ({ children }) => (
  <div
    style={{
      zIndex: 10000,
      position: 'absolute',
      backgroundColor: 'white',
      boxShadow: '0 5px 10px rgba(0, 0, 0, 0.2)',
      border: '1px solid #CCC',
      borderRadius: 3,
      marginLeft: -5,
      marginTop: 5,
      padding: 10,
    }}
  >
    {children}
  </div>
);

const DatePickerOverlay = ({ children, ...props }) => (
  <Overlay
    rootClose
    trigger="click"
    animation={false}
    {...props}
  >
    <DatePickerPopover>
      {children}
    </DatePickerPopover>
  </Overlay>
);

export default DatePickerOverlay;
