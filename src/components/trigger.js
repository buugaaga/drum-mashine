import React from 'react';
import {ToggleButton, ToggleButtonGroup, } from 'react-bootstrap';

const Trigger = (props) => (
  <div>
    <ToggleButtonGroup type="radio" name="soundBanks" defaultValue={[1]}>
      <ToggleButton value={1}> 1 </ToggleButton>
      <ToggleButton value={2}> 2 </ToggleButton>
    </ToggleButtonGroup>
    
  </div>
)

export default Trigger;