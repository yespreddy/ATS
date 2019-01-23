import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Innernav from '../Common/InnerNav';
import { Button } from 'reactstrap';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import '../../../node_modules/react-tabs/style/react-tabs.css';
import '../../styles/Candidates.css';
import '../../styles/Tabs.css';
import AllCandidatesTable from "../Common/AllCandidatesTable";
import CandidatesQuestionnaires from "./CandidatesQuestionnaires";
import CandidatesDiscussion from "./CandidatesDiscussion";
import CandidatesEmails from "./CandidatesEmails";
import CandidatesAssessment from "./CandidatesAssessment";
import { Link } from 'react-router-dom';

class Candidates360Candidates extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tabIndex: 0,
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
                        <div className="candidates-main-header row">
                            <div className="col-md-6">
                                <h3>Candidates > <span>Dheerendra Sathyanarayana</span></h3>
                            </div>
                            <div className="col-md-6">
                            <div className=" float-right candidateChevron">
                            <Link to="#"><i className="fa fa-chevron-left" aria-hidden="true"></i></Link>
                            <Link to="#"><i className="fa fa-chevron-right" aria-hidden="true"></i></Link>
                                </div>
                            </div>
                        </div>

                        <Tabs selectedIndex={this.state.tabIndex} onSelect={tabIndex => this.setState({ tabIndex })}>
                            <TabList>
                                <Tab>A11(140)</Tab>
                                <Tab>Questionnaires</Tab>
                                <Tab>Discussions</Tab>
                                <Tab>Assessments</Tab>
                                <Tab>Emails</Tab>
                                <Tab>Documents</Tab>
                            </TabList>
                            <TabPanel><AllCandidatesTable /></TabPanel>
                            <TabPanel><CandidatesQuestionnaires /></TabPanel>
                            <TabPanel><CandidatesDiscussion /></TabPanel>
                            <TabPanel><CandidatesAssessment /></TabPanel>
                            <TabPanel><CandidatesEmails /></TabPanel>
                            <TabPanel><AllCandidatesTable /></TabPanel>
                        </Tabs>
                    </div>
                </div>
            </div >
        );
    }
}

export default Candidates360Candidates;
