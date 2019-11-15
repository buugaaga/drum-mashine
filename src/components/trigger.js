import React from 'react';
import {ToggleButton, ToggleButtonGroup, } from 'react-bootstrap';

const Trigger = (props) => (
  <div className="trigger">
    <ToggleButtonGroup className="btn-secondary" type="radio" name="soundBanks" defaultValue={[1]}>
      <ToggleButton className="" value={1}> 1 </ToggleButton>
      <ToggleButton value={2}> 2 </ToggleButton>
    </ToggleButtonGroup>
    
  </div>
)

export default Trigger;