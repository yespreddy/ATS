import React, { Component } from 'react';
import '../../styles/NewRequisition.css';
import 'react-accessible-accordion/dist/fancy-example.css';
import { Accordion, AccordionItem, AccordionItemTitle, AccordionItemBody, } from 'react-accessible-accordion';
import { Form, TextField, SelectField, TextareaField, CheckboxField } from 'react-components-form';
import Breadcrumbs from "../common/breadcrumb";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem, Button } from 'reactstrap';

const options = [
    { label: "UX Designer (0-3 Years)", value: "opt1" },
    { label: "UX Designer (3-5 Years)", value: "opt2" },
    { label: "UX Designer (5-10 Years)", value: "opt3" },
];

class WorkFlow extends Component {
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
						<p>New Requisition</p>
                    </div>
                    <div className="Step active">
						<span>2</span>
						<p>Preliminary Questionnaire</p>
                    </div>
                    <div className="Step active">
						<span>3</span>
						<p>Workflow</p>
                    </div>
                    <div className="Step">
						<span>4</span>
						<p>Interview Panel</p>
                    </div>
                </div>

                <div className="new-requisition col-md-12">
                    <div className="row">
                        
                            <div className="col-md-6">
                                <h4>Hiring Stages Workflow</h4>
                                <p>To add, delete, rename or re-order stages, you must edit the template</p>
                            </div>
                            <div className="col-md-6 form-group">
                                <div className="float-right">
                                    <Link to="/NewRequisition" className="btn btn-outline-primary mr-3">Previous</Link>
                                    <Link to="/InterviewPanel" className="btn primary-btn">Next</Link>
                                </div>
                            </div>
                        <Form>
                            <div className="col-md-4 form-group choose-template">
                                <label>Choose Requisition Template </label>
                                <SelectField className="form-control" name="category" options={options} />
                                <a href="">Create New Template</a>
                            </div>
                        </Form>
                    </div>
                    <div className="m-b-20">
                    <a href="">Create New Stage</a>
                    </div>
                    <div className="row">
                        <Accordion>
                            <AccordionItem expanded="true">
                                <AccordionItemTitle>
                                    <h3>Untitled Stage</h3>
                                    <div className="accordion__arrow" role="presentation"></div>
                                </AccordionItemTitle>
                                <AccordionItemBody>
                                    <ListGroup className="clearfix">
                                        <ListGroupItem>
                                            <div className="list-group-item-content">
                                                Preliminary Application - Send preliminary application to the candidates to gather basic information
                                            </div>
                                            <div className="list-group-item-icons">
                                                <i className="fa fa-edit"></i><i className="fa fa-trash"></i>
                                            </div>
                                        </ListGroupItem>
                                        <ListGroupItem>
                                            <div className="list-group-item-content">
                                                Preliminary Screening - Call to the candidate and verify whether candidate is right fit for the position
                                            </div>
                                            <div className="list-group-item-icons">
                                                <i className="fa fa-edit"></i><i className="fa fa-trash"></i>
                                            </div>
                                            </ListGroupItem>
                                    </ListGroup>
                                </AccordionItemBody>
                            </AccordionItem>
                            <AccordionItem expanded="true">
                                <AccordionItemTitle>
                                    <h3>Interview</h3>
                                    <div className="accordion__arrow" role="presentation"></div>
                                </AccordionItemTitle>
                                <AccordionItemBody>
                                    <ListGroup className="clearfix">
                                        <ListGroupItem>
                                            <div className="list-group-item-content">
                                                Preliminary Application - Send preliminary application to the candidates to gather basic information
                                            </div>
                                            <div className="list-group-item-icons">
                                                <i className="fa fa-edit"></i><i className="fa fa-trash"></i>
                                            </div>
                                        </ListGroupItem>
                                        <ListGroupItem>
                                            <div className="list-group-item-content">
                                                Preliminary Screening - Call to the candidate and verify whether candidate is right fit for the position
                                            </div>
                                            <div className="list-group-item-icons">
                                                <i className="fa fa-edit"></i><i className="fa fa-trash"></i>
                                            </div>
                                        </ListGroupItem>
                                    </ListGroup>
                                </AccordionItemBody>
                            </AccordionItem>
                            <AccordionItem expanded="true">
                                <AccordionItemTitle>
                                    <h3>Consider</h3>
                                    <div className="accordion__arrow" role="presentation"></div>
                                </AccordionItemTitle>
                                <AccordionItemBody>
                                    <ListGroup className="clearfix">
                                        <ListGroupItem>
                                            <div className="list-group-item-content">
                                                Preliminary Application - Send preliminary application to the candidates to gather basic information
                                            </div>
                                            <div className="list-group-item-icons">
                                                <i className="fa fa-edit"></i><i className="fa fa-trash"></i>
                                            </div>
                                        </ListGroupItem>
                                        <ListGroupItem>
                                            <div className="list-group-item-content">
                                                Preliminary Screening - Call to the candidate and verify whether candidate is right fit for the position
                                            </div>
                                            <div className="list-group-item-icons">
                                                <i className="fa fa-edit"></i><i className="fa fa-trash"></i>
                                            </div>
                                        </ListGroupItem>
                                    </ListGroup>
                                </AccordionItemBody>
                            </AccordionItem>
                            <AccordionItem expanded="true">
                                <AccordionItemTitle>
                                    <h3>Offer</h3>
                                    <div className="accordion__arrow" role="presentation"></div>
                                </AccordionItemTitle>
                                <AccordionItemBody>
                                    <ListGroup className="clearfix">
                                        <ListGroupItem>
                                            <div className="list-group-item-content">
                                                Preliminary Application - Send preliminary application to the candidates to gather basic information
                                            </div>
                                            <div className="list-group-item-icons">
                                                <i className="fa fa-edit"></i><i className="fa fa-trash"></i>
                                            </div>
                                        </ListGroupItem>
                                        <ListGroupItem>
                                            <div className="list-group-item-content">
                                                Preliminary Screening - Call to the candidate and verify whether candidate is right fit for the position
                                            </div>
                                            <div className="list-group-item-icons">
                                                <i className="fa fa-edit"></i><i className="fa fa-trash"></i>
                                            </div>
                                        </ListGroupItem>
                                    </ListGroup>
                                </AccordionItemBody>
                            </AccordionItem>
                        </Accordion>
                        <div className="col-md-12">
                            <div className="float-right">
                                <Link to="/InterviewPanel" className="btn primary-btn">Next</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default WorkFlow;
