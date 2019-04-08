import React, { Component } from 'react';
import '../../styles/Candidates.css';
import 'react-accessible-accordion/dist/fancy-example.css';
import { Accordion, AccordionItem, AccordionItemTitle, AccordionItemBody, } from 'react-accessible-accordion';
import Breadcrumbs from "../Common/breadcrumb";
import { Form, Button, FormGroup, Label, Input} from 'reactstrap';

class AddCandidate extends Component { 
    constructor(props) {
        super(props);
        this.state = {
            tabIndex: 0,
        }
    }

    render() {
        return (
            <div>
               <div className="page-title">
                    <Breadcrumbs />
                    <div className="page-title-header row">
                        <div className="col-md-12">
                            <h3>Add Candidate</h3>
                        </div>
                    </div>
                </div>
                <div className="addcandidates col-md-12">
                    <p> You can add candidate resume with the form below.</p>
                    <p>'*' marked fields are mandatory</p>
                    <h2>Job Information </h2>
                    <div className="row">
                        <Form>

                        <FormGroup  className="col-md-4">
                                    <Label for="State">Job Requisition</Label>
                                    <Input type="select" name="select" id="State">
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </Input>                        
                                            
                                        </FormGroup> 

                         
                        </Form>
                    </div>
                    
                    <div className="row">
                    
                    <Accordion>
                            <AccordionItem expanded="true">
                                <AccordionItemTitle>
                                    <h3>Candidate details</h3>
                                </AccordionItemTitle>
                                <AccordionItemBody>
                                    <div className="row">
                                     <Form>
                                    <FormGroup className="col-md-4">
                                    <Label for="Name">Name</Label>
                                    <Input type="text" id="Name" placeholder="" />
                                    </FormGroup>
                                    <FormGroup  className="col-md-4">
                                    <Label for="Email">Email</Label>
                                    <Input type="Email"  id="Email" placeholder="" />
                                    </FormGroup> 
                                    <FormGroup  className="col-md-4">
                                    <Label for="Phone">Phone</Label>
                                    <Input type="tel" id="Phone" placeholder="" />
                                    </FormGroup> 
                                    </Form>



                                    </div>
                                </AccordionItemBody>
                            </AccordionItem>
                            <AccordionItem expanded="true">
                                <AccordionItemTitle>
                                    <h3>Address</h3>
                                </AccordionItemTitle>
                                <AccordionItemBody>
                                    <div className="row">

                                    <Form>
                                    <FormGroup className="col-md-8">
                                    <Label for="Address">Address</Label>
                                    <Input type="textarea" name="text" id="Address" />

                                    </FormGroup>
                                    <FormGroup  className="col-md-4">
                                    <Label for="State">State</Label>
                                    <Input type="select" name="select" id="State">
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </Input>                        
                                            
                                        </FormGroup> 

                                        <FormGroup  className="col-md-4">
                                    <Label for="City">City</Label>
                                    <Input type="select" name="select" id="City">
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </Input>                        
                                            
                                        </FormGroup> 

                                        <FormGroup  className="col-md-4">
                                    <Label for="City">City</Label>
                                    <Input type="select" name="select" id="City">
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </Input>                        
                                            
                                        </FormGroup> 
                                        <FormGroup  className="col-md-4">
                                    <Label for="postalcode">Postal Code</Label>
                                    <Input type="select" name="select" id="postalcode">
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </Input>                        
                                            
                                        </FormGroup> 
                                    </Form>
                                    
                                    </div>
                                </AccordionItemBody>
                            </AccordionItem>


                            
                            <AccordionItem expanded="true">
                                <AccordionItemTitle>
                                    <h3>Cover Letter</h3>
                                </AccordionItemTitle>
                                <AccordionItemBody>
                                    <div className="row">
                                    <Form>
                                    <FormGroup className="col-md-12">
                                    <Label for="description">Summary/Description</Label>
                                    <Input type="textarea" name="description" id="description" />

                                    </FormGroup>
                                    </Form>
                                     
                                    </div>
                                </AccordionItemBody>
                            </AccordionItem>


                            
                            <AccordionItem expanded="true">
                                <AccordionItemTitle>
                                    <h3>Education</h3>
                                </AccordionItemTitle>
                                <AccordionItemBody>
                                    <div className="row">
                                        <Form>
                                        <FormGroup  className="col-md-4">
                                    <Label for="postalcode">Highest Degree </Label>
                                    <Input type="select" name="select" id="postalcode">
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </Input>                        
                                            
                                        </FormGroup> 
                                        <FormGroup  className="col-md-4">
                                    <Label for="Phone">Specialization</Label>
                                    <Input type="tel" id="Phone" placeholder="" />
                                    </FormGroup> 
                                    <FormGroup  className="col-md-2">
                                    <Label for="postalcode">Year of Passing </Label>
                                    <Input type="select" name="select" id="postalcode">
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </Input>                        
                                            
                                        </FormGroup> 

                                        <FormGroup  className="col-md-2">
                                    <Label for="postalcode">&nbsp;  </Label>
                                    <Input type="select" name="select" id="postalcode">
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </Input>                        
                                            
                                        </FormGroup> 
                                        </Form>
                                        <Form>
                                        <FormGroup  className="col-md-4">
                                    <Label for="postalcode">Highest Degree </Label>
                                    <Input type="select" name="select" id="postalcode">
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </Input>                        
                                            
                                        </FormGroup> 
                                        <FormGroup  className="col-md-4">
                                    <Label for="Phone">Specialization</Label>
                                    <Input type="tel" id="Phone" placeholder="" />
                                    </FormGroup> 
                                    <FormGroup  className="col-md-2">
                                    <Label for="postalcode">Year of Passing </Label>
                                    <Input type="select" name="select" id="postalcode">
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </Input>                        
                                            
                                        </FormGroup> 

                                        <FormGroup  className="col-md-2">
                                    <Label for="postalcode">&nbsp;  </Label>
                                    <Input type="select" name="select" id="postalcode">
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </Input>                        
                                            
                                        </FormGroup> 
                                        </Form>
                                            
                                            <div className="col-md-2">
                                              Add 
                                            </div>
                                       
                                    </div>
                                </AccordionItemBody>
                            </AccordionItem>

                            

                            <AccordionItem expanded="true">
                                <AccordionItemTitle>
                                    <h3>Expected Salary</h3>
                                </AccordionItemTitle>
                                <AccordionItemBody>
                                    <div className="row">
                                        <Form>
                                        <FormGroup  className="col-md-2">
                                    <Label for="postalcode">From  </Label>
                                    <Input type="select" name="select" id="postalcode">
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </Input>                        
                                            
                                        </FormGroup> 

                                        <FormGroup  className="col-md-2">
                                    <Label for="postalcode">To  </Label>
                                    <Input type="select" name="select" id="postalcode">
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </Input>                        
                                            
                                        </FormGroup> 
                                        </Form>
                                            
                                    </div>
                                </AccordionItemBody>
                            </AccordionItem>

                            <AccordionItem expanded="true">
                                <AccordionItemTitle>
                                    <h3>Nationality</h3>
                                </AccordionItemTitle>
                                <AccordionItemBody>
                                    <div className="row">
                                        <Form>
                                        <FormGroup  className="col-md-4">
                                    <Label for="postalcode">Nationality  </Label>
                                    <Input type="select" name="select" id="postalcode">
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </Input>                        
                                            
                                        </FormGroup> 
                                        <FormGroup  className="col-md-4">
                                    <Label for="postalcode">Work Status for  </Label>
                                    <Input type="tel" id="Phone" placeholder="" />
                       
                                            
                                        </FormGroup> 
                                        <FormGroup  className="col-md-4">
                                    <Label for="postalcode">Work Permit for  </Label>
                                    <Input type="tel" id="Phone" placeholder="" />
                      
                                            
                                        </FormGroup> 


                                         
                                        </Form>
                                    </div>
                                </AccordionItemBody>
                            </AccordionItem>

                            <AccordionItem expanded="true">
                                <AccordionItemTitle>
                                    <h3>More information</h3>
                                </AccordionItemTitle>
                                <AccordionItemBody>
                                    <div className="row">
                                        <Form>
                                        <FormGroup  className="col-md-4">
                                    <Label for="postalcode">Source of Candidate  </Label>
                                    <Input type="tel" id="Phone" placeholder="" />
                      
                                            
                                        </FormGroup> 
                                        <FormGroup  className="col-md-4">
                                    <Label for="postalcode">LinkedIn Profile URL  </Label>
                                    <Input type="tel" id="Phone" placeholder="" />
                      
                                            
                                        </FormGroup> 
                                        <FormGroup  className="col-md-4">
                                    <Label for="postalcode">Who reffered to the position </Label>
                                    <Input type="tel" id="Phone" placeholder="" />
                      
                                            
                                        </FormGroup> 

                                        <FormGroup  className="col-md-4">
                                    <Label for="postalcode">Website, Blog or Portfolio </Label>
                                    <Input type="tel" id="Phone" placeholder="" />
                      
                                            
                                        </FormGroup>   <FormGroup  className="col-md-4">
                                    <Label for="postalcode">Earliest start date </Label>
                                    <Input type="tel" id="Phone" placeholder="" />
                      
                                            
                                        </FormGroup>   <FormGroup  className="col-md-4">
                                    <Label for="postalcode">Willing to relocate </Label>
                                    <Input type="tel" id="Phone" placeholder="" />
                      
                                            
                                        </FormGroup> 

                                          
                                        </Form>
                                    </div>
                                </AccordionItemBody>
                            </AccordionItem>
                            
                            
                             </Accordion>

                             <div className="col-md-12">
                            <div className="float-right">
                            <Button className="btn btn-secondary  pull-right">Cancel</Button>
                                <Button className="btn btn-primary m-r-10 pull-right">Submit Candidate</Button>                              
                            </div>
                        </div>
                    </div>
                     </div>



            </div>
        );
    }
}

export default AddCandidate;
