import React from 'react';

import Button from 'react-bootstrap/Button';
import Form  from 'react-bootstrap/Form';
import FormGroup  from 'react-bootstrap/FormGroup';

export default () => {
    let sessionName;
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
                        className="popup_input-form"
                    />
                </FormGroup>
                <Button 
                    variant="dark"
                    className="popup_btn"
                >Add</Button>
             </div>
    )
}