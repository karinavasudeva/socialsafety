import React from 'react';

export const Alert = ({ children, className, ...props }) => (
  <div role="alert" className={className} {...props}>
    {children}
  </div>
);

export const AlertTitle = ({ children, className, ...props }) => (
  <h5 className={className} {...props}>
    {children}
  </h5>
);