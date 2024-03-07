import { useState } from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

function SideButtons(props) {
  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState('1');
 
  let buttons = [
    { name: '..', value: '1' }

  ];
  
  if(!props.isLoading) {
    buttons = props.categoryList.map((category, index) => ({
      name: category,
      value: (index + 1).toString() 
  }));
  }

  return (
       <div>
        {buttons.map((radio, idx) => (
          <div>
          <ToggleButton
            key={idx}
            id={`radio-${idx}`}
            type="radio"
            variant={idx % 2 ? 'outline-success' : 'outline-danger'}
            name="radio"
            value={radio.value}
            checked={radioValue === radio.value}
            onChange={(e) => setRadioValue(e.currentTarget.value)}
            onClick = {()=> {props.handleFilterClick(radio.name)}}
          >
            {radio.name}
          </ToggleButton>
            </div>
        ))}
    </div>

  );
}

export default SideButtons;