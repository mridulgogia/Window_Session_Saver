import React , {useState} from 'react';

import {Button} from 'react-bootstrap';
import {Form}  from 'react-bootstrap';
import {FormGroup}  from 'react-bootstrap';

export default (props) => {
    const {onClickAdd} = props;

    const [sessionName, updateSessionName] = useState('');

    const onChangeSessionName = (event) => {
        const {value} = event.target;
        updateSessionName(value);
    }
    return (
        <div className="popup_header">
                <div className="popup_logo"></div>
                <h2 className="popup_title">Session Saver</h2>

             
                <FormGroup 
                    controlId="sessionForm"
                    className="popup_input"    
                >
                    <Form.Control 
                        type="text" 
                        placeholder="Session name" 
                        name="sessionName" 
                        value={sessionName} 
                        onChange = {(event)=>onChangeSessionName(event)}
                        className="popup_input-form"
                    />
                </FormGroup>
                <Button 
                    variant="dark"
                    className="popup_btn"
                    onClick = {onClickAdd}
                >Add</Button>
             </div>
    )
}