import { useState } from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import "./SideBar.css"
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
    <div className="button-group">
      <h3 className="side-title">Product Category</h3>
        {buttons.map((radio, idx) => (
          <div className="toggle-button-container">
          <ToggleButton
            
            key={idx}
            id={`radio-${idx}`}
            type="radio"
            variant={'outline-primary'}
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