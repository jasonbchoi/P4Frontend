import React from 'react';
import { Form, Button} from 'react-bootstrap'


function AddForm(props) {
    return (
        <div>
            
            <Form inline className='AddFeature'>
                Add Features
                <Form.Control
                    className="mb-2 mr-sm-2"
                    id="inlineFormInputName2"
                    placeholder="Feature"
                />

                
                <Button type="submit" className="mb-2" id="AddButton" >
                    +
                    </Button>
                <Form.Text className="text-muted">
                    **Abbreviate Features**
    </Form.Text>
            </Form>
        </div>
    );
}

export default AddForm;