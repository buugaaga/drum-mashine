import React from 'react';
import {ToggleButton, ToggleButtonGroup, } from 'react-bootstrap';

const Trigger = ({ triggerHandle }) => (
  <div className="trigger">
    <ToggleButtonGroup className="btn-secondary" type="radio" name="soundBanks" onChange={triggerHandle} defaultValue={[1]}>
      <ToggleButton className="" value={1}> низкие  </ToggleButton>
      
      <ToggleButton value={2}> высокие </ToggleButton>
    </ToggleButtonGroup>
    
  </div>
)

export default Trigger;