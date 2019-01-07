import React, { Component } from 'react';
import '../../styles/candidates.css';
import 'react-accessible-accordion/dist/fancy-example.css';
import { Accordion, AccordionItem, AccordionItemTitle, AccordionItemBody, } from 'react-accessible-accordion';
import { Form, TextField, SelectField, TextareaField } from 'react-components-form';
import Breadcrumbs from "../common/breadcrumb";

const options = [
    { label: "Option 1", value: "opt1" },
    { label: "Option 2", value: "opt2" },
    { label: "Option 3", value: "opt3" },
];

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
                            <div className="col-md-4 form-group">
                                <label>Job Requisition </label>
                                <SelectField className="form-control" name="category" options={options} />
                            </div>
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
                                            <div className="col-md-4 form-group">
                                                <label>Name  </label>
                                                <TextField className="form-control" name="name" />
                                            </div>
                                            <div className="col-md-4 form-group">
                                                <label>Email  </label>
                                                <TextField className="form-control" name="Email" />
                                            </div>
                                            <div className="col-md-4 form-group">
                                                <label>Phone  </label>
                                                <TextField className="form-control" name="Phone" />
                                            </div>
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
                                            <div className="col-md-8 form-group">
                                                <label>Address  </label>
                                                <TextField className="form-control" name="name" />
                                            </div>
                                            <div className="col-md-4 form-group">
                                                <label>State </label>
                                                <SelectField className="form-control" name="category" options={options} />
                                            </div>
                                            <div className="col-md-4 form-group">
                                                <label>City </label>
                                                <SelectField className="form-control" name="category" options={options} />
                                            </div>
                                            <div className="col-md-4 form-group">
                                                <label>City </label>
                                                <SelectField className="form-control" name="category" options={options} />
                                            </div>
                                            <div className="col-md-4 form-group">
                                                <label>Postal Code </label>
                                                <TextField className="form-control" name="Phone" />
                                            </div>
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
                                            <div className="col-md-12 form-group">
                                                <label>Summary/Description  </label>
                                                <TextareaField className="form-control" name="description" />
                                            </div>
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
                                            <div className="col-md-4 form-group">
                                                <label>Highest Degree </label>
                                                <SelectField className="form-control" name="category" options={options} />
                                            </div>
                                            <div className="col-md-4 form-group">
                                                <label>Specialization </label>
                                                <TextField className="form-control" name="Phone" />
                                            </div>
                                            <div className="col-md-2 form-group">
                                                <label> Year of Passing </label>
                                                <SelectField className="form-control" name="category" options={options} />
                                            </div>
                                            <div className="col-md-2 form-group">
                                                <label>&nbsp; </label>
                                                <SelectField className="form-control" name="category" options={options} />
                                            </div>
                                            <div className="col-md-4 form-group">
                                                <label>Highest Degree </label>
                                                <SelectField className="form-control" name="category" options={options} />
                                            </div>
                                            <div className="col-md-4 form-group">
                                                <label>Specialization </label>
                                                <TextField className="form-control" name="Phone" />
                                            </div>
                                            <div className="col-md-2 form-group">
                                                <label> Year of Passing </label>
                                                <SelectField className="form-control" name="category" options={options} />
                                            </div>
                                            <div className="col-md-2 form-group">
                                                <label>&nbsp; </label>
                                                <SelectField className="form-control" name="category" options={options} />
                                            </div>

                                            <div className="col-md-2">
                                                <a href="#"> + Add </a>
                                            </div>
                                        </Form>
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
                                            <div className="col-md-2 form-group">
                                                <label> From </label>
                                                <SelectField className="form-control" name="category" options={options} />
                                            </div>
                                            <div className="col-md-2 form-group">
                                                <label>To </label>
                                                <SelectField className="form-control" name="category" options={options} />
                                            </div>
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
                                            <div className="col-md-4 form-group">
                                                <label> Nationality </label>
                                                <SelectField className="form-control" name="category" options={options} />
                                            </div>
                                            <div className="col-md-4 form-group">
                                                <label> Work Status for </label>
                                                <TextField className="form-control" name="Phone" />
                                            </div>
                                            <div className="col-md-4 form-group">
                                                <label> Work Permit for </label>
                                                <TextField className="form-control" name="Phone" />
                                            </div>
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
                                            <div className="col-md-4 form-group">
                                                <label> Source of Candidate  </label>
                                                <TextField className="form-control" name="Phone" />
                                            </div>
                                            <div className="col-md-4 form-group">
                                                <label> LinkedIn Profile URL</label>
                                                <TextField className="form-control" name="Phone" />
                                            </div>
                                            <div className="col-md-4 form-group">
                                                <label> Who reffered to the position </label>
                                                <TextField className="form-control" name="Phone" />
                                            </div>
                                            <div className="col-md-4 form-group">
                                                <label> Website, Blog or Portfolio </label>
                                                <TextField className="form-control" name="Phone" />
                                            </div>
                                            <div className="col-md-4 form-group">
                                                <label> Earliest start date</label>
                                                <TextField className="form-control" name="Phone" />
                                            </div> <div className="col-md-4 form-group">
                                                <label> Willing to relocate</label>
                                                <TextField className="form-control" name="Phone" />
                                            </div>
                                        </Form>
                                    </div>
                                </AccordionItemBody>
                            </AccordionItem>
                        </Accordion>
                        <div className="col-md-12">
                            <div className="float-right">
                                <button class="btn btn-secondary mr10 pull-right">Cancel</button>
                                <button class="btn btn-primary pull-right">Submit Candidate</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddCandidate;
