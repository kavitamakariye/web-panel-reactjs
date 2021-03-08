import React from 'react'
import { Dropdown } from 'react-bootstrap';

function DropdownComponent({ onkeySelect }) {

    return (
        <div style={{ padding: 30 }}>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Dropdown Button
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item eventKey='1' onSelect={(e) => onkeySelect(e)}>1</Dropdown.Item>
                    <Dropdown.Item eventKey='2' onSelect={(e) => onkeySelect(e)}>2</Dropdown.Item>
                    <Dropdown.Item eventKey='3' onSelect={(e) => onkeySelect(e)}>3</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}

export default DropdownComponent
