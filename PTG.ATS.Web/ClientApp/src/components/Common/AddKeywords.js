import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import TagsInput from 'react-tagsinput';
import 'react-tagsinput/react-tagsinput.css';
import '../../styles/Tags.css';


class AddKeywords extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false ,
      tags: []      
    };

    this.toggle = this.toggle.bind(this);        
  }
  handleChange=(tags) =>{
    this.setState({tags})
  }
  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
  render() { 

    return ( 
<div>
<Modal isOpen={this.state.modal} toggle={this.toggle} className="modal-wrapper" size="lg">
              <ModalHeader toggle={this.toggle}>Add Keywords</ModalHeader>
              <ModalBody>
              <label>Keywords <small>Multiple Tags should be seperated by comma (,)</small></label>                  
              <TagsInput value={this.state.tags} onChange={this.handleChange} />
              </ModalBody>
              <ModalFooter>
                
                <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                <Button color="primary" onClick={this.toggle}>Add Keywords</Button>{' '}
              </ModalFooter>
            </Modal>
</div>
     );
  }
}
 
export default AddKeywords;