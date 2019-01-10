import React, { Component } from 'react';
import '../../styles/Candidates.css';
import 'react-accessible-accordion/dist/fancy-example.css';
import { Accordion, AccordionItem, AccordionItemTitle, AccordionItemBody, } from 'react-accessible-accordion';
import { Form, TextField, SelectField, TextareaField, CheckboxField } from 'react-components-form';
import Breadcrumbs from "../Common/Breadcrumb";
import { Link } from "react-router-dom";

const options = [
    { label: "Option 1", value: "opt1" },
    { label: "Option 2", value: "opt2" },
    { label: "Option 3", value: "opt3" },
];

class NewRequisition extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tabIndex: 0,
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="page-title">
                    <div className="page-title-header row">
                        <div className="col-md-12">
                            <Breadcrumbs />
                            <h3>New Requisition</h3>
                        </div>
                    </div>
                </div>

                <div className="processStage">
                    <div className="Step active">
                        <span>1</span>
                    </div>
                    <div className="Step">
                        <span>2</span>
                    </div>
                    <div className="Step">
                        <span>3</span>
                    </div>
                    <div className="Step">
                        <span>4</span>
                    </div>
                </div>

                <div className="addcandidates col-md-12">
                    <p>'*' marked fields are mandatory</p>
                    <div className="row">
                        <Form>
                            <div className="col-md-4 form-group">
                                <label>Requisition Template </label>
                                <SelectField className="form-control" name="category" options={options} />
                            </div>
                        </Form>
                    </div>

                    <div className="row">
                        <Accordion>
                            <AccordionItem expanded="true">
                                <AccordionItemTitle>
                                    <h3>Location details</h3>
                                    <div className="accordion__arrow" role="presentation"></div>
                                </AccordionItemTitle>
                                <AccordionItemBody>
                                    <div className="row">
                                        <Form>
                                            <div className="flexy">
                                                <div className="col-md-4 form-group">
                                                    <label>Country <sup>*</sup>  </label>
                                                    <SelectField className="form-control" name="category" options={options} />
                                                </div>
                                                <div className="col-md-4 form-group">
                                                    <label>State <sup>*</sup>  </label>
                                                    <SelectField className="form-control" name="category" options={options} />
                                                </div>
                                            </div>
                                            <div className="flexy">
                                                <div className="col-md-4 form-group">
                                                    <label>City <sup>*</sup>  </label>
                                                    <SelectField className="form-control" name="category" options={options} />
                                                </div>
                                                <div className="col-md-4 form-group">
                                                    <label>Postal Code <sup>*</sup>	   </label>
                                                    <SelectField className="form-control" name="category" options={options} />
                                                </div>
                                            </div>
                                        </Form>
                                    </div>
                                </AccordionItemBody>
                            </AccordionItem>
                            <AccordionItem expanded="true">
                                <AccordionItemTitle>
                                    <h3>Job details</h3>
                                    <div className="accordion__arrow" role="presentation"></div>
                                </AccordionItemTitle>
                                <AccordionItemBody>
                                    <div className="row">
                                        <Form>
                                            <div className="flexy">
                                                <div className="col-md-4 form-group">
                                                    <label>Choose Job Title <sup>*</sup></label>
                                                    <SelectField className="form-control" name="category" options={options} />
                                                </div>
                                                <div className="col-md-4 form-group">
                                                    <label>No.of Positions <sup>*</sup>	   </label>
                                                    <SelectField className="form-control" name="category" options={options} />
                                                </div>
                                            </div>
                                            <div className="flexy">
                                                <div className="col-md-4 form-group">
                                                    <label>Employment Type<sup>*</sup>	   </label>
                                                    <SelectField className="form-control" name="category" options={options} />
                                                </div>
                                                <div className="col-md-4 form-group">
                                                    <label>Department <sup>*</sup>	   </label>
                                                    <TextField className="form-control" name="department" />
                                                </div>
                                            </div>
                                            <div className="flexy">
                                                <div className="col-md-4 form-group">
                                                    <label>Experience <sup>*</sup> </label>
                                                    <SelectField className="form-control" name="category" options={options} />
                                                </div>
                                                <div className="col-md-4 form-group">
                                                    <label>Reporting Manager <sup>*</sup> </label>
                                                    <SelectField className="form-control" name="category" options={options} />
                                                </div>
                                            </div>
                                            <div className="col-md-8 form-group">
                                                <label>Job Description <sup>*</sup></label>
                                                <TextareaField className="form-control" name="Phone" />
                                            </div>
                                        </Form>
                                    </div>
                                </AccordionItemBody>
                            </AccordionItem>
                            <AccordionItem expanded="true">
                                <AccordionItemTitle>
                                    <h3>Cover Letter</h3>
                                    <div className="accordion__arrow" role="presentation"></div>
                                </AccordionItemTitle>
                                <AccordionItemBody>
                                    <div className="row">
                                        <Form>
                                            <div className="col-md-4 form-group">
                                                <label>Hiring Close By  <sup>*</sup></label>
                                                <TextField className="form-control" name="description" />
                                            </div>
                                        </Form>
                                    </div>
                                </AccordionItemBody>
                            </AccordionItem>
                            <AccordionItem expanded="true">
                                <AccordionItemTitle>
                                    <h3>Job Requirement Justification</h3>
                                    <div className="accordion__arrow" role="presentation"></div>
                                </AccordionItemTitle>
                                <AccordionItemBody>
                                    <div className="row">
                                        <Form>
                                            <div className="col-md-4 form-group">
                                                <label>Why does the position need to be filled? <sup>*</sup></label>
                                                <SelectField className="form-control" name="category" options={options} />
                                            </div>
                                            <div className="flexy">
                                                <div className="col-md-8 form-group">
                                                    <label>Write your comment </label>
                                                    <TextareaField className="form-control" name="Phone" />
                                                </div>
                                            </div>
                                        </Form>
                                    </div>
                                </AccordionItemBody>
                            </AccordionItem>
                            <AccordionItem expanded="true">
                                <AccordionItemTitle>
                                    <h3> Salary Range</h3>
                                    <div className="accordion__arrow" role="presentation"></div>
                                </AccordionItemTitle>
                                <AccordionItemBody>
                                    <div className="row">
                                        <Form>
                                            <div className="col-md-2 form-group">
                                                <label> From </label>
                                                <TextField className="form-control" name="description" />
                                            </div>
                                            <div className="col-md-2 form-group">
                                                <label>To </label>
                                                <TextField className="form-control" name="description" />
                                            </div>
                                        </Form>
                                    </div>
                                </AccordionItemBody>
                            </AccordionItem>
                            <AccordionItem expanded="true">
                                <AccordionItemTitle>
                                    <h3>Approval  &amp; Visibility</h3>
                                    <div className="accordion__arrow" role="presentation"></div>
                                </AccordionItemTitle>
                                <AccordionItemBody>
                                    <div className="row">
                                        <Form>
                                            <div className="col-md-4 form-group">
                                                <label> Approver  </label>
                                                <SelectField className="form-control" name="category" options={options} />
                                            </div>
                                            <div className="flexy">
                                                <div className="col-md-4 form-group">
                                                    <label>For Visibility</label>
                                                    <CheckboxField label="Recruitment Head" name="Recruitment Head" id="recruitmentHead" />
                                                    <CheckboxField label="HR Manager" name="HR Manager" id="hrManager" />
                                                </div>
                                            </div>
                                        </Form>
                                    </div>
                                </AccordionItemBody>
                            </AccordionItem>
                        </Accordion>
                        <div className="col-md-12">
                            <div className="float-right">
                                <button className="btn secondary-btn m-r-10">Cancel</button>
                                <Link to="/Preliminary" className="btn primary-btn">Submit Candidate</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default NewRequisition;
