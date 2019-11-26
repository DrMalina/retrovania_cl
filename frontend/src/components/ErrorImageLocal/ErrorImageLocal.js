import React from 'react';
import './errorImageLocal.css';

const ErrorImageLocal = () => (
  <div className="error-image-local__container">
    <img src="/images/no-signal-image.png" />
    <span className="error-image-local__error-message">error</span>
  </div>
);

export { ErrorImageLocal };
