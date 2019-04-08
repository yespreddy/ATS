import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Innernav from '../Common/InnerNav';
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


                <div className="candidates">
                    <div className="candidates-main">
                        <div className="candidates-main-header row mb-0 marginRL">
                            <div className="col-md-6">
                                <h3>Candidates > <span>Dheerendra Sathyanarayana</span></h3>
                            </div>
                            <div className="col-md-6">
                            <div className=" float-right candidateChevron">
                            <Link to="#"><i className="fa fa-chevron-left" aria-hidden="true"></i></Link>
                            <Link to="#"><i className="fa fa-chevron-right" aria-hidden="true"></i></Link>
                                </div>
                            </div>
                            <div className="clearfix"></div>
                            <div className="col-md-6">
                                <h3>Dheerendra Sathyanarayana</h3>
                            </div>
                            <div className="col-md-6 candidates-action-btns">
                            <a href="javascript:void(0)" id="Popover1" onClick={()=>{this.refs.sharepopup.toggle();}}>Share Candidate</a>

                             <button type="button" className="btn btn-primary"  onClick={()=>{this.refs.keywords.toggle();}} >Add Keywords</button>

                            <button className="btn btn-primary" onClick={()=>{this.refs.createTask.toggle();}}>Create Task</button>
                            <ShareCandidate ref="sharepopup"></ShareCandidate>
                            <AddKeywords ref="keywords"/>
                            <CreateTask ref="createTask"></CreateTask>
                        </div>
                        </div>
                        <div className="createTask-addkeywords-btns m-b-20">


                        </div>
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
                        <a href=""><i className="fa fa-plus fa-2" aria-hidden="true"></i></a>
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
                        <a href=""><i className="fa fa-plus fa-2" aria-hidden="true"></i></a>
                        </div>
                        </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default Candidates360Candidates;
