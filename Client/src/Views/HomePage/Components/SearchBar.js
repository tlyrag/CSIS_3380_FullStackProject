import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import "./SearchBar.css"
import React, { useState } from 'react';

function SearchBar(props) {
    const [InputValue, setInputValue] = useState("");

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
      };
  return (
    <>
      <InputGroup className="mb-1">
        <Form.Control
          placeholder="Enter Item"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          value={InputValue}
          onChange={handleInputChange}
        />
        <Button variant="secondary" onClick={()=> {props.handleSearchClick(InputValue)}}>Search</Button>{' '}
      </InputGroup>

    </>
  );
}

export default SearchBar;