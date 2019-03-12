import React, { Component } from 'react';
import '../../styles/NewRequisition.css';
import 'react-accessible-accordion/dist/fancy-example.css';
import { Form, TextField, SelectField, TextareaField, CheckboxField } from 'react-components-form';
import Breadcrumbs from "../Common/breadcrumb";
import { Link } from "react-router-dom";
import { Table } from 'reactstrap';


const options = [
    { label: "UX Designer (0-3 Years)", value: "opt1" },
    { label: "UX Designer (3-5 Years)", value: "opt2" },
    { label: "UX Designer (5-10 Years)", value: "opt3" },
];

class InterviewPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tabIndex: 0
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
                    <div className="Step active">
						<span>4</span>
						<p>Interview Panel</p>
                    </div>
                </div>

                <div className="new-requisition col-md-12">
                    <div className="row">                        
                            <div className="col-md-12">
                                <h4>Interview Panel</h4>
                                <p>Technical team who can help filling the position</p>
                            </div>                            
                    </div>
                    <div className="row interview-panel-table">
                        <div className="col-md-12">
                        <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Designation</th>
            <th>Location</th>
            <th>Mode of interview</th>
            <th>Choose Round</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
            <Form>                                           
                <div className="form-group">
                <TextField className="form-control" name="" />
                </div>
                </Form>
            </td>
            <td> 
                <Form>                                           
                <div className="form-group">
                    <SelectField className="form-control" name="category" options={options} />
                </div>
                </Form>
            </td>
            <td> <Form>                                           
                <div className="form-group">
                    <SelectField className="form-control" name="category" options={options} />
                </div>
                </Form></td>
            <td>
                <Form>                                           
                    <div className="form-group">
                        <SelectField className="form-control" name="category" options={options} />
                    </div>
                </Form>
            </td>
            <td>
            <Form>                                           
                    <div className="form-group">
                        <SelectField className="form-control" name="category" options={options} />
                    </div>
                </Form>
            </td>
            <td>
                <a href="">ADD</a>
            </td>
          </tr>
          <tr>
            <td><a href="">Rambabu Gorantla</a></td>
            <td>Sr.Web Developer</td>
            <td>Hyderabad</td>
            <td>Telephonic</td>
            <td><span className="first">First round technical</span></td>
            <td><a href=""><i class="fa fa-trash"></i></a></td>
          </tr>
          <tr>
          <td><a href="">Daniel Gotla</a></td>
            <td>Sr.Manager</td>
            <td>Hyderabad</td>
            <td>Telephonic</td>
            <td><span className="second">Second round technical</span></td>
            <td><a href=""><i class="fa fa-trash"></i></a></td>
          </tr>
          <tr>
          <td><a href="">Sukumar Nayani</a></td>
            <td>Web Developer</td>
            <td>Hyderabad</td>
            <td>F2F</td>
            <td><span className="first">First round technical</span></td>
            <td><a href=""><i class="fa fa-trash"></i></a></td>
          </tr>
        </tbody>
      </Table>
                        </div>

                    </div>
<div className="border"></div>
                    
                    <div className="row m-50">
                    <div className="col-md-12">
                    <h6>Share With</h6>
                    <p>Only the member you have chosen below can be accessed.</p>
                    
                    <div className="interview-panel-form">
                    <Form>
                                            <div className="flexy">
                                                <div className="col-md-3 form-group">
                                                   <input type="checkbox" />
                                                    <label>Recruiting Manager  </label>
                                                    <TextField className="form-control" name="" />
                                                </div>
                                                <div className="col-md-3 form-group">
                                                    <input type="checkbox" />   
                                                    <label>Recruiter </label>
                                                    <TextField className="form-control" name="department" />
                                                </div>
                                                <div className="col-md-6 form-group">
                                                        <input type="checkbox" />
                                                         <label>Invite others (Uxe commas "," to invite multiple people) </label>
                                                        <TextField className="form-control" name="department" />   
                                                </div>
                                            </div>
                                            <div className="flexy">
                                                <div className="col-md-3 form-group">
                                                   <input type="checkbox" />
                                                    <label>HR Manager  </label>
                                                    <TextField className="form-control" name="" />
                                                </div>
                                                
                                            </div>

                                        </Form>
                                        </div>
                                        </div>
                                        <div className="col-md-12">
                    <h6>Approval</h6>
                    
                    <div className="interview-panel-form">
                    <Form>
                                            <div className="flexy">
                                                <div className="col-md-3 form-group">
                                                   <input type="checkbox" />
                                                    <label>  Director </label>
                                                    <TextField className="form-control" name="" />
                                                </div>
                                                <div className="col-md-3 form-group">
                                                    <input type="checkbox" />   
                                                    <label>CEO </label>
                                                    <TextField className="form-control" name="department" />
                                                </div>
                                                
                                            </div>
                                            

                                        </Form>
                                        </div>
 
                    </div>

                                               
                                               
                                               <div className="col-md-12">
                            <div className="float-right">
                            <Link to="/Workflow" className="btn btn-outline-primary mr-3">Previous</Link>
                                    <Link to="" className="btn primary-btn">Submit</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default InterviewPanel;
