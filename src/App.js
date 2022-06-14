import React, { Component } from 'react';
import Icon from '@mdi/react';
import {
  mdiAccountFilter,
  mdiAlarmBell,
  mdiAirballoon,
  mdiAccessPointNetwork,
} from '@mdi/js';

import './style.css';
export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <Icon path={mdiAccountFilter} title="User Profile" size={1} color="red" />
      &nbsp;
      <Icon
        path={mdiAccessPointNetwork}
        title="User Profile"
        size={1}
        color="black"
      />
      <Icon path={mdiAlarmBell} title="User Profile" size={1} color="red" />
      &nbsp;
      <Icon path={mdiAirballoon} title="User Profile" size={1} color="black" />
    </div>
  );
}
