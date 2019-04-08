import React, { Component } from 'react';
import '../../styles/Candidates.css';
import 'react-accessible-accordion/dist/fancy-example.css';
import { Accordion, AccordionItem, AccordionItemTitle, AccordionItemBody, } from 'react-accessible-accordion';
import { Form, TextField, SelectField, TextareaField, CheckboxField } from 'react-components-form';
import Breadcrumbs from "../Common/breadcrumb";
import { Link } from "react-router-dom";
import axios from 'axios';

const options = [
    { label: "Option 1", value: "opt1" },
    { label: "Option 2", value: "opt2" },
    { label: "Option 3", value: "opt3" },
];

const nopostions = [
    { label: "01", value: "01" },
    { label: "02", value: "02" },
    { label: "03", value: "03" },
    { label: "04", value: "04" },
    { label: "05", value: "05" },
    { label: "06", value: "06" }
];

class NewRequisition extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tabIndex: 0,
            reqtemplate: [],
            jobtitle: [],
            employmenttype: [],
            getdepartment:[],
            getcountry:[],
            getStates:[],
            getCity:[],         
            selectedCityId : 0 
        }
        this.handleCountryChange = this.handleCountryChange.bind(this);
        this.handleStateChange = this.handleStateChange.bind(this);   
        this.handleCityChange = this.handleCityChange.bind(this);   
             
    }

    componentDidMount() {
        axios.get('http://localhost:1165/api/JobRequisition/GetRequisitionTemplates')
            .then((response) => {
                console.log(response);
                this.setState({
                    reqtemplate: response.data
                });
            })
            .catch((error) => {
                console.log(error);
            });

            axios.get('http://localhost:1165/api/JobRequisition/GetJobTitle')
            .then((response) => {
                console.log(response);
                this.setState({
                    jobtitle: response.data
                });
            })
            .catch((error) => {
                console.log(error);
            });

            axios.get('http://localhost:1165/api/JobRequisition/GetEmploymentType')
            .then((response) => {
                console.log(response);
                this.setState({
                    employmenttype: response.data
                });
            })
            .catch((error) => {
                console.log(error);
            });

            axios.get('http://localhost:1165/api/JobRequisition/GetDepartment')
            .then((response) => {
                console.log(response);
                this.setState({
                    getdepartment: response.data
                });
            })
            .catch((error) => {
                console.log(error);
            });
            axios.get('http://localhost:1165/GetCountries')
            .then((response) => {
                console.log(response);
                this.setState({
                    getcountry: response.data
                });
            })
            .catch((error) => {
                console.log(error);
            });
           
    }

    handleCountryChange(event) {
        this.setState({value: event.target.value});
        let selectedCountryId = event.target.value;
       // console.log(event.target.value);
        axios.get('http://localhost:1165/GetStates?CountryId='+selectedCountryId )
            .then((response) => {
                //console.log(response);
                this.setState({
                    getStates: response.data
                });
            })
            .catch((error) => {
                console.log(error);
            });           
      }

      handleStateChange(event) {
        this.setState({value: event.target.value});
        let selectedStateId = event.target.value;
       // console.log(event.target.value);
        axios.get('http://localhost:1165/GetCities?StateId='+selectedStateId )
            .then((response) => {
                //console.log(response);
                this.setState({
                    getCity: response.data
                });
            })
            .catch((error) => {
                console.log(error);
            });           
      }
      handleCityChange(event){
          this.setState({value : event.target.value});
          let selectedCityId = event.target.value;
          console.log(selectedCityId);
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
                    <div className="Step">
                        <span>2</span>
                        <p>Preliminary Questionnaire</p>
                    </div>
                    <div className="Step">
                        <span>3</span>
                        <p>Workflow</p>
                    </div>
                    <div className="Step">
                        <span>4</span>
                        <p>Interview Panel</p>
                    </div>
                </div>

                <div className="addcandidates col-md-12">
                    <p>'*' marked fields are mandatory</p>
                    <div className="row">
                        <Form>
                            <div className="col-md-4 form-group">
                                <label>Requisition Template </label>
                                <select className="form-control">
                                    {this.state.reqtemplate.map(reqtemp => <option key={reqtemp.requisitionTemplateId} value="{reqtemp.requisitionTemplateName}">{reqtemp.requisitionTemplateName}</option>)}
                                </select>
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
                                                  
                                                    <select className="form-control" onChange={this.handleCountryChange}>
                                    {this.state.getcountry.map(getcou => <option key={getcou.countryId} value={getcou.countryId}>{getcou.name}</option>)}
                                </select>

                                                </div>
                                                <div className="col-md-4 form-group">
                                                    <label>State <sup>*</sup>  </label>
                                                    <select className="form-control"  onChange={this.handleStateChange}>
                                    {this.state.getStates.map(getstate => <option key={getstate.stateId} value={getstate.stateId}>{getstate.name}</option>)}
                                </select>
                                                </div>
                                            </div>
                                            <div className="flexy">
                                                <div className="col-md-4 form-group">
                                                    <label>City <sup>*</sup>  </label>
                                                    <select className="form-control" onChange={this.handleCityChange}>
                                    {this.state.getCity.map(getcity => <option key={getcity.cityId} value={getcity.cityId}>{getcity.name}</option>)}
                                </select>
                                                </div>
                                                <div className="col-md-4 form-group">
                                                    <label>Postal Code <sup>*</sup>	   </label>
                                                    <TextField className="form-control" name="department" />
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
                                                    <select className="form-control">
                                    {this.state.jobtitle.map(jobtit => <option key={jobtit.jobTitleId} value="{jobtit.jobTitleName}">{jobtit.jobTitleName}</option>)}
                                </select>


                                                </div>
                                                <div className="col-md-4 form-group">
                                                    <label>No.of Positions <sup>*</sup>	   </label>
                                                    <SelectField className="form-control" name="category" options={nopostions} />
                                                </div>
                                            </div>
                                            <div className="flexy">
                                                <div className="col-md-4 form-group">
                                                    <label>Employment Type<sup>*</sup>	   </label>
                                                    <select className="form-control">
                                    {this.state.employmenttype.map(emptype => <option key={emptype.employmentTypeId} value="{emptype.employmentTypeName}">{emptype.employmentTypeName}</option>)}
                                </select>


                                                </div>
                                                <div className="col-md-4 form-group">
                                                    <label>Department <sup>*</sup>	   </label>
                                                    
                                                    <select className="form-control">
                                    {this.state.getdepartment.map(getdep => <option key={getdep.departmentId} value="{getdep.departmentName}">{getdep.departmentName}</option>)}
                                </select>

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
                                <Link to="/WorkFlow" className="btn primary-btn">Next</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default NewRequisition;
