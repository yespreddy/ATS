import React, { Component } from 'react';
import '../../styles/Candidates.css';
import 'react-accessible-accordion/dist/fancy-example.css';
import { Accordion, AccordionItem, AccordionItemTitle, AccordionItemBody, } from 'react-accessible-accordion';
import Breadcrumbs from "../Common/breadcrumb";
import { Form, Button, FormGroup, Label, Input} from 'reactstrap';
// eslint-disable-next-line

class AdvanceSearch extends Component { 
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
                            <h3>Advance Search</h3>
                        </div>
                    </div>
                </div>
                <div className="addcandidates col-md-12">
                  
                    <h2>Job Information </h2>
                    <div className="row">
                   
                    </div>
                    
                    <div className="row">
                    
                    <Accordion>
                    <AccordionItem expanded="true">
                                <AccordionItemTitle>
                                    <h3>Skills / Keywords</h3>
                                </AccordionItemTitle>
                                <AccordionItemBody>
                                    <div className="row">
                                     <Form>
                                    <FormGroup className="col-md-4">
                                    <Label for="Name">Required Skills / Keywords</Label>
                                    <Input type="text" id="Name" placeholder="" />
                                    </FormGroup>
                                    <FormGroup  className="col-md-4">
                                    <Label for="Email">Optional Skills / Keywords</Label>
                                    <Input type="Email"  id="Email" placeholder="" />
                                    </FormGroup> 
                                    <FormGroup  className="col-md-4">
                                    <Label for="Phone">Excluded Skills / Keywords</Label>
                                    <Input type="tel" id="Phone" placeholder="" />
                                    </FormGroup> 
                                    </Form>



                                    </div>
                                </AccordionItemBody>
                            </AccordionItem>
                            <AccordionItem expanded="true">
                                <AccordionItemTitle>
                                    <h3>Experience</h3>
                                </AccordionItemTitle>
                                <AccordionItemBody>
                                    <div className="row">
                                     <Form>

                                     <FormGroup  className="col-md-2">
                                    <Label for="postalcode">Total Experience </Label>
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

                                 
                                    <FormGroup  className="col-md-4">
                                    <Label for="Email">Functional Area</Label>
                                    <Input type="Email"  id="Email" placeholder="" />
                                    </FormGroup> 
                                    <FormGroup  className="col-md-4">
                                    <Label for="Phone">Industry</Label>
                                    <Input type="tel" id="Phone" placeholder="" />
                                    </FormGroup> 
                                    </Form>

                                    <Form>

<FormGroup  className="col-md-2">
<Label for="postalcode">Salary  </Label>
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


<FormGroup  className="col-md-4">
<Label for="Email">Title of Last Job</Label>
<Input type="Email"  id="Email" placeholder="" />
</FormGroup> 
<FormGroup  className="col-md-4">
<Label for="Phone">Title of any Job</Label>
<Input type="tel" id="Phone" placeholder="" />
</FormGroup> 
</Form>



                                    </div>
                                </AccordionItemBody>
                            </AccordionItem>
                            <AccordionItem expanded="true">
                                <AccordionItemTitle>
                                    <h3>Location</h3>
                                </AccordionItemTitle>
                                <AccordionItemBody>
                                    <div className="row">

                                    <Form>
                                    <FormGroup className="col-md-4">
                                    <Label for="Name">Current Location</Label>
                                    <Input type="text" id="Name" placeholder="" />
                                    </FormGroup>

                                    <FormGroup className="col-md-4">
                                    <Label for="Name">Preferred Location</Label>
                                    <Input type="text" id="Name" placeholder="" />
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
                                    <h3>Company</h3>
                                </AccordionItemTitle>
                                <AccordionItemBody>
                                    <div className="row">
                                        <Form>
                                        <FormGroup  className="col-md-4">
                                    <Label for="postalcode">Current Company</Label>
                                    <Input type="tel" id="Phone" placeholder="" />                    
                                            
                                        </FormGroup> 

                                           <FormGroup  className="col-md-4">
                                    <Label for="postalcode">Excludes Companies</Label>
                                    <Input type="tel" id="Phone" placeholder="" />                    
                                            
                                        </FormGroup>                                        
                                        <FormGroup  className="col-md-4">
                                    <Label for="postalcode">Notice Period</Label>
                                    <Input type="tel" id="Phone" placeholder="" />                    
                                            
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
                                    <h3>Additional Crieria</h3>
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
                            <Button className="btn btn-secondary  pull-right">Clear All</Button>
                                <Button className="btn btn-primary m-r-10 pull-right">Search</Button>                              
                            </div>
                        </div>
                    </div>
                     </div>



            </div>
        );
    }
}

export default AdvanceSearch;
