import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap'
class AddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            feature: '',
            features: []
        };
    }

    handleChange = (event) =>
        this.setState({
            feature: event.target.value,
            
        });
    addFeature = (event) => {
        event.preventDefault()
        this.setState({features:this.state.feature})
    };

    render() {
        return (
            <div className='AddForm'>
                Add Feature
                <ul className='featureList'>{this.state.features}</ul>
                <Form inline className='AddFeature' onSubmit={this.addFeature}>


                    <Form.Control
                        
                        className="mb-2 mr-sm-2"
                        id="inlineFormInputName2"
                        placeholder="Feature"
                        type='text'
                        name='searchString'
                        required
                        onChange={this.handleChange}
                        value={this.state.feature}
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
}

export default AddForm;
