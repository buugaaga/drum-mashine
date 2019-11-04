import React from 'react';
import {ToggleButton, ToggleButtonGroup, } from 'react-bootstrap';

const Trigger = (props) => (
  <div>
    <ToggleButtonGroup type="radio" name="soundBanks" defaultValue={[1]}>
      <ToggleButton value={1} />
      <ToggleButton value={2} />
    </ToggleButtonGroup>
    
  </div>
)

export default Trigger;