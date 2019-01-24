import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Col, Row, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import '../../styles/Modal.css'; 


class AddDocument  extends Component {
    constructor(props) {
        super(props);
        this.state = {
          modal: false
        };
    
        this.toggle = this.toggle.bind(this);
      }
    
      toggle() {
        this.setState({
          modal: !this.state.modal
        });
      }
      render() {
        return (
          <div>
          {/*}  <Button color="primary" onClick={this.toggle}>Add Document</Button>*/}
            <Modal isOpen={this.state.modal} toggle={this.toggle} className="modal-wrapper"  size="lg">
              <ModalHeader toggle={this.toggle}>Add Document</ModalHeader>
              <ModalBody>
                    <p>Choose a document to upload</p>
                    <input type="file" id="myFile" />
                  
                    <Form className="mt-5">
                        <Row form>
                            <Col md={5}>
                                <FormGroup>
                                    <Label for="docTitle">Document Title</Label>
                                    <Input type="text" name="doc-title" id="docTitle" placeholder="Document Title" />
                                    </FormGroup>
                            </Col>
                            <Col md={3}>
                                <FormGroup>
                                    <Label for="visibilityPermissions">Visibility/Permissions</Label>
                                    <Input type="select" name="visibility" id="visibilityPermissions">
                                        <option>Select</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Input>                              
                              </FormGroup>
                            </Col>
                        </Row>
                    </Form>
              </ModalBody>
              <ModalFooter>
                
                <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                <Button color="primary" onClick={this.toggle}>Upload Document</Button>{' '}
              </ModalFooter>
            </Modal>
          </div>
        );
      }
}
 

export default AddDocument;