import React, { Component } from 'react';
import Icon from '@mdi/react';
import { mdiAccount } from '@mdi/js';
import './style.css';
export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <Icon
        path={mdiAccount}
        title="User Profile"
        size={1}
        horizontal
        vertical
        rotate={90}
        color="red"
        spin
      />
    </div>
  );
}
