import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import '../../../node_modules/react-tabs/style/react-tabs.css';
import '../../styles/Candidates.css';
import '../../styles/Tabs.css';
import AllCandidatesTable from "../Common/AllCandidatesTable"
import InnerNav from '../Common/innernav';
import { Link } from 'react-router-dom'


class JobsdetailedCandidate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tabIndex: 0,
        }
    }

    render() {
        return (
            <div>
                <div className="row innermenu">
                    <div className="innermenu-head">
                        <i className="fa fa-chevron-left"></i>
                        UX Designer
                    </div>
                    <div className="innermenu-nav">
                        <InnerNav />
                    </div>
                    <div className="innermenu-actions">
                        <button className="btn btn-primary">Edit Job</button>
                    </div>
                </div>

                <div className="candidates">
                    <div className="candidates-main">
                        <div className="candidates-main-header">
                            <div className="col-md-6">
                                <h3>Candidates for this Job</h3>
                            </div>
                            <div className="col-md-6">
                                <Link to="/addcandidate" type="button" className="btn btn-primary float-right">Add Candidate</Link>
                                <input className="form-control mr-sm-4 col-md-4 float-right" type="text" placeholder="Search" aria-label="Search"></input>
                            </div>
                        </div>

                        <Tabs selectedIndex={this.state.tabIndex} onSelect={tabIndex => this.setState({ tabIndex })}>
                            <TabList>
                                <Tab>A11(140)</Tab>
                                <Tab>New(10)</Tab>
                                <Tab>Active(100)</Tab>
                                <Tab>Hired(5)</Tab>
                                <Tab>Not Hired (25)</Tab>
                            </TabList>
                            <TabPanel><AllCandidatesTable /></TabPanel>
                            <TabPanel> <AllCandidatesTable /></TabPanel>
                            <TabPanel> <AllCandidatesTable /></TabPanel>
                            <TabPanel> <AllCandidatesTable /></TabPanel>
                            <TabPanel> <AllCandidatesTable /></TabPanel>
                        </Tabs>
                    </div>
                </div>
            </div >
        );
    }
}

export default JobsdetailedCandidate;
