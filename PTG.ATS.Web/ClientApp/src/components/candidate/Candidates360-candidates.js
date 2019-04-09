import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Innernav from '../Common/innernav';
import { Button } from 'reactstrap';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import '../../../node_modules/react-tabs/style/react-tabs.css';
import '../../styles/Candidates.css';
import '../../styles/Tabs.css';
import '../../styles/Popover.css';
import AllCandidatesTable from "../Common/AllCandidatesTable";
import Profile from "../Candidate/Profile";
import Interviews from "../Candidate/Interviews";
import CandidatesQuestionnaires from "./CandidatesQuestionnaires";
import CandidatesDiscussion from "./CandidatesDiscussion";
import CandidatesEmails from "./CandidatesEmails";
import CandidatesAssessment from "./CandidatesAssessment";
import Documents from "./Documents";
import ShareCandidate from "../Common/ShareCandidatePopOver";
import { Link } from 'react-router-dom';
import AddKeywords from '../Common/AddKeywords';
import CreateTask from '../Common/CreateTaskPopup';

class Candidates360Candidates extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tabIndex: 0
        }
    }

    render() {
        return (
            <div>
                {/* <div className="row page-white-block" >
                    <div className="page-white-block-header">
                    </div>
                </div> */}

                <div className="row innermenu">
                    <div className="innermenu-head">
                        <i className="fa fa-chevron-left"></i>
                        UX Designer
                    </div>
                    <div className="innermenu-nav">
                        <Innernav />
                    </div>
                    <div className="innermenu-actions ml-auto d-flex">
                        {/* <button className="btn btn-primary">Edit Job</button> */}
                        <div className="ml-auto">
                        <Button outline color="primary">Edit Job</Button>
                        </div>
                        <div className="ml-3">
                        <UncontrolledDropdown>
                        <DropdownToggle caret outline color="primary">
                            More Actions
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem header>Header</DropdownItem>
                            <DropdownItem disabled>Action</DropdownItem>
                            <DropdownItem>Another Action</DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>Another Action</DropdownItem>
                        </DropdownMenu>
                        </UncontrolledDropdown></div>
                    </div>
                </div>


                <div className="candidates pb-3">
                    <div className="candidates-main">
                        <div className="candidates-main-header row mb-0 marginRL">
                            <div className="row m-0 col-md-12 p-0 candetails">
                            <div className="col-md-6">
                                <h4>Candidates > <span>Dheerendra Sathyanarayana</span></h4>
                            </div>
                            <div className="col-md-6">
                            <div className="float-right candidateChevron">
                            <Link to="#"><i className="fa fa-chevron-left" aria-hidden="true"></i></Link>
                            <Link to="#" className="ml-3"><i className="fa fa-chevron-right" aria-hidden="true"></i></Link>
                                </div>
                            </div>
                            </div>
                            <div className="row m-0 mt-3 col-md-12 p-0">
                            <div className="col-md-6">
                                <h3>Dheerendra Sathyanarayana</h3>
                            </div>
                            <div className="col-md-6 candidates-action-btns d-flex justify-content-end align-items-center">
                            <a href="javascript:void(0)" id="Popover1" onClick={()=>{this.refs.sharepopup.toggle();}}> 
                            <i className="fa fa-share-square-o" aria-hidden="true"></i> Share Candidate</a>
                            {/* <button type="button" className="btn btn-primary"  onClick={()=>{this.refs.keywords.toggle();}}>Add Keywords</button>
                            <button className="btn btn-primary" onClick={()=>{this.refs.createTask.toggle();}}>Create Task</button> */}
                            <div className="dropdown ml-5">
                            <Link className="btn btn-danger dropdown-toggle" to="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span>2.</span> Interview
                            </Link>

                            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                            </div>
                            <ShareCandidate ref="sharepopup"></ShareCandidate>
                            <AddKeywords ref="keywords"/>
                            <CreateTask ref="createTask"></CreateTask>
                        </div>
                        </div>
                        <div className="col-md-12 mt-2">
                            <Button className="btn btnActive">Active Candidate</Button>
                        </div>
                        <div className="d-flex candidateList mt-3 mb-2">
                            <p>Received on <span>01/08/2018</span></p>
                            <p><i className="fa fa-globe"></i> <span className="ml-1">Hyderabad, India</span></p>
                            <p><i className="fa fa-phone" aria-hidden="true"></i><span className="ml-1">+91 99894 14134</span></p>                            
                            <p><i className="fa fa-envelope-o" aria-hidden="true"></i><span className="ml-1">dheerendrasnarayana@gmail.com</span></p>                            
                            <p><i className="fa fa-globe" aria-hidden="true"></i><span className="ml-1">Referral</span></p>                            
                        </div>
                        </div>
                        {/* <div className="createTask-addkeywords-btns m-b-20"></div> */}
                        <div className="row borderTop marginRL">
                        <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9 col-xs-12 p-0 borderRight">
                        <Tabs selectedIndex={this.state.tabIndex} onSelect={tabIndex => this.setState({ tabIndex })}>
                            <TabList>
                                <Tab>Profile</Tab>
                                <Tab>Interviews</Tab>
                                <Tab>Questionnaires</Tab>
                                <Tab>Discussions</Tab>
                                <Tab>Assessments</Tab>
                                <Tab>Emails</Tab>
                                <Tab>Documents</Tab>
                            </TabList>
                            <TabPanel><Profile /></TabPanel>
                            <TabPanel><Interviews /></TabPanel>
                            <TabPanel><CandidatesQuestionnaires /></TabPanel>
                            <TabPanel><CandidatesDiscussion /></TabPanel>
                            <TabPanel><CandidatesAssessment /></TabPanel>
                            <TabPanel><CandidatesEmails /></TabPanel>
                            <TabPanel><Documents /></TabPanel>
                        </Tabs>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-3 bg-white">
                            <div className="taskContainer d-flex mb-3 borderBottom">
                                <div className="mr-auto p-3">
                                    <h4>Task</h4>
                                </div>
                                <div className="ml-auto p-3 align-items-center d-flex">
                                    <a onClick={()=>{this.refs.createTask.toggle();}}><i className="fa fa-plus fa-2" aria-hidden="true"></i></a>
                                </div>
                            </div>

                            <div className="d-flex taskSection">
                            <div className="list-group">
                                <a href="#" className="list-group-item list-group-item-action">
                                    <div className="d-flex w-100 justify-content-between">
                                        <h6 className="mb-1">Schedule Face to Face Interview with Technical Team</h6>
                                    </div>
                                    <p className="mb-1">Assign to Jegadeesh Selva</p>
                                    <p>Due September 14, 2018</p>
                                </a>
                                <a href="#" className="list-group-item list-group-item-action">
                                <div className="d-flex w-100 justify-content-between">
                                        <h6 className="mb-1">Review Candidate task and provide feedback</h6>
                                </div>
                                    <p className="mb-1">Assign to Jegadeesh Selva</p>
                                    <p>Due September 14, 2018</p>
                                </a>
                            </div>
                            </div>
                            <div className="taskContainer d-flex mb-3 borderBottom">
                                <div className="mr-auto p-3">
                                    <h4>Notes</h4>
                                </div>
                                <div className="ml-auto p-3 align-items-center d-flex">
                                    <a ><i className="fa fa-plus fa-2" aria-hidden="true"></i></a>
                                </div>
                            </div>
                            <div>
                                <div className="noNotes">
                                    <p>There are no Notes.</p>
                                </div>
                            </div>

                            <div className="taskContainer d-flex mb-3 borderBottom">
                                <div className="mr-auto p-3">
                                    <h4>Keywords</h4>
                                </div>
                                <div className="ml-auto p-3 align-items-center d-flex">
                                    <a onClick={()=>{this.refs.keywords.toggle();}}><i className="fa fa-plus fa-2" aria-hidden="true"></i></a>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Candidates360Candidates;
