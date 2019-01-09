import React, { Component } from 'react';
import '../../styles/Candidates.css';
import Candidatestable from "../Common/AllCandidatesTable";
import 'react-accessible-accordion/dist/fancy-example.css';
import { Accordion, AccordionItem, AccordionItemTitle, AccordionItemBody, } from 'react-accessible-accordion';
import { Link } from "react-router-dom";
import Breadcrumbs from "../Common/Breadcrumb";
import {Form, FormGroup, Label, Input } from 'reactstrap';

class Candidates extends Component {
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
                        <div className="col-md-6">
                            <Breadcrumbs />
                            <h3>Candidates</h3>
                        </div>
                        <div className="col-md-6 page-title-header-right">
                            <input className="form-control mr-sm-4 col-md-4 float-right" type="text" placeholder="Search" aria-label="Search"></input>
                            <Link type="button" to="/addCandidate" className="btn btn-primary float-right">Add Candidate</Link>
                        </div>
                    </div>
                </div>

                <div className="candidates row">
                    <div className="candidates-left col-md-3">
                        <div className="candidates-left-inner">
                            <h2>Filters </h2>
                            <Accordion>
                                <AccordionItem expanded="true">
                                    <AccordionItemTitle>
                                        <h3>By Job</h3>
                                    </AccordionItemTitle>
                                    <AccordionItemBody>
                                        <div className="filter">
                                            <div className="filter-each">
                                                <Form>
                                                    <FormGroup check>
                                                        <Label check>
                                                            <Input type="checkbox" />{' '}
                                                            ASP .Net
                                                                                        </Label>
                                                        <span className="badge">5</span>
                                                    </FormGroup>
                                                    <FormGroup check>
                                                        <Label check>
                                                            <Input type="checkbox" />{' '}
                                                            React
                                                                                        </Label>
                                                        <span className="badge">10</span>
                                                    </FormGroup>
                                                    <FormGroup check>
                                                        <Label check>
                                                            <Input type="checkbox" />{' '}
                                                            Java
                                                                                        </Label>
                                                        <span className="badge">15</span>
                                                    </FormGroup>
                                                </Form>

                                            </div>



                                        </div>

                                    </AccordionItemBody>
                                </AccordionItem>

                                <AccordionItem expanded="true">
                                    <AccordionItemTitle>
                                        <h3>By Stage</h3>
                                    </AccordionItemTitle>
                                    <AccordionItemBody>
                                        <div className="filter">
                                            <div className="filter-each">
                                                <Form>
                                                    <FormGroup check>
                                                        <Label check>
                                                            <Input type="checkbox" />{' '}
                                                          Applied
                                                                                        </Label>
                                                        <span className="badge">5</span>
                                                    </FormGroup>
                                                    <FormGroup check>
                                                        <Label check>
                                                            <Input type="checkbox" />{' '}
                                                            Sourced
                                                                                        </Label>
                                                        <span className="badge">10</span>
                                                    </FormGroup>
                                                    <FormGroup check>
                                                        <Label check>
                                                            <Input type="checkbox" />{' '}
                                                            New
                                                                                        </Label>
                                                        <span className="badge">15</span>
                                                    </FormGroup>
                                                </Form>

                                            </div>



                                        </div>

                                    </AccordionItemBody>
                                </AccordionItem>
                                <AccordionItem expanded="true">
                                    <AccordionItemTitle>
                                        <h3>By Consideration</h3>
                                    </AccordionItemTitle>
                                    <AccordionItemBody>
                                        <div className="filter">
                                            <div className="filter-each">
                                                <Form>
                                                    <FormGroup check>
                                                        <Label check>
                                                            <Input type="checkbox" />{' '}
                                                            ASP .Net
                                                                                        </Label>
                                                        <span className="badge">5</span>
                                                    </FormGroup>
                                                    <FormGroup check>
                                                        <Label check>
                                                            <Input type="checkbox" />{' '}
                                                            React
                                                                                        </Label>
                                                        <span className="badge">10</span>
                                                    </FormGroup>
                                                    <FormGroup check>
                                                        <Label check>
                                                            <Input type="checkbox" />{' '}
                                                            Java
                                                                                        </Label>
                                                        <span className="badge">15</span>
                                                    </FormGroup>
                                                </Form>

                                            </div>



                                        </div>

                                    </AccordionItemBody>
                                </AccordionItem>

                                <AccordionItem expanded="true">
                                    <AccordionItemTitle>
                                        <h3>By Application Date</h3>
                                    </AccordionItemTitle>
                                    <AccordionItemBody>
                                        <div className="filter">
                                            <div className="filter-each">
                                                <Form>
                                                    <FormGroup check>
                                                        <Label check>
                                                            <Input type="checkbox" />{' '}
                                                            ASP .Net
                                                                                        </Label>
                                                        <span className="badge">5</span>
                                                    </FormGroup>
                                                    <FormGroup check>
                                                        <Label check>
                                                            <Input type="checkbox" />{' '}
                                                            React
                                                                                        </Label>
                                                        <span className="badge">10</span>
                                                    </FormGroup>
                                                    <FormGroup check>
                                                        <Label check>
                                                            <Input type="checkbox" />{' '}
                                                            Java
                                                                                        </Label>
                                                        <span className="badge">15</span>
                                                    </FormGroup>
                                                </Form>

                                            </div>



                                        </div>

                                    </AccordionItemBody>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </div>
                    <div className="candidates-right  col-md-9">
                        <Candidatestable />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Candidates;
