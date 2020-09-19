import React from 'react';

import './Loader.css';

const Loader: React.FC = () => (
  <div className="lds-ellipsis">
    <div />
    <div />
    <div />
    <div />
  </div>
);

export default Loader;
