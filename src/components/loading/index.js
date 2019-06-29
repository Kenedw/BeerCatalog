import React from 'react';

import './style.sass';

export default function Loading() {
  return (
    <div className="loading">
      <div className="loading__loader"/>
      <span className="loading__title">Loading...</span>
    </div>
  );
}
