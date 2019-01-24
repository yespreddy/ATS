import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Col, Row, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import '../../styles/Modal.css'; 

class CreateTask extends Component {
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
            
            <Modal isOpen={this.state.modal} toggle={this.toggle} className="modal-wrapper" size="lg">
              <ModalHeader toggle={this.toggle}>Create Task</ModalHeader>
              <ModalBody>                    
                  
                    <Form className="">
                    <Row form>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="taskName">Task Name</Label>
                                    <Input type="text" name="task-name" id="taskName" placeholder="Enter Task Name" />
                                    </FormGroup>
                            </Col>  
                                               
                        </Row>
                        <FormGroup>
                            <Label for="taskDesc">Task Description</Label>
                            <Input type="textarea" name="taskdesc" id="taskDesc" placeholder="Enter Task Description"/>
                        </FormGroup>
                        <Row form>
                            <Col md={5}>
                                <FormGroup>
                                <Label for="whosThisTaskFor">Who's this task for?</Label>
                                    <Input type="select" name="taskfor" id="whosThisTaskFor" >
                                        <option>Select Username</option>
                                        <option>User 1</option>
                                        <option>User 3</option>
                                        <option>User 4</option>
                                        <option>User 5</option>
                                    </Input>  
                                </FormGroup>
                            </Col>
                            <Col md={3}>
                                <FormGroup>
                                <Label for="dueDate">State</Label>
                                <Input type="date" name="duedate" id="dueDate"/>
                                </FormGroup>
                            </Col>
                        </Row>
                        <FormGroup className="mb-3">
                            <Label for="attachFiles">Attach Files</Label>
                            <div className="drop-files">
                                <h6>Drag Files Here</h6>
                                    <h6>Or</h6>
                                    <div class="browse-btn-wrapper">
                                        <button class="btn btn-primary">Browse from Computer</button>
                                        <input type="file" name="myfile" />
                                    </div>
                            </div>
                        </FormGroup>
                    </Form>
              </ModalBody>
              <ModalFooter>
                
                <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                <Button color="primary" onClick={this.toggle}>Create Task</Button>{' '}
              </ModalFooter>
            </Modal>
          </div>
         );
    }
}
 
export default CreateTask;