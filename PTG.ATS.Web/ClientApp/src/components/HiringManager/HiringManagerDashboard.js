import React from "react";
import { Link } from 'react-router-dom'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import '../../styles/HiringManager.css';
import '../../styles/Tabs.css';
import InterviewsScheduledTable from "../HiringManager/InterviewsScheduledTable";

class HiringManagerDashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tabIndex: 0,
        }
    }

    render() {
        return (
            <div className="hiringdashboard">
                <div className="hiringdashboard-headtitle">
                    <div className="hiringdashboard-headtitle-left">Welcome Aneel! Clouds are clearing today in Hyderabad City. Enjoy the Sunshine!</div>
                    <div className="hiringdashboard-headtitle-right"><Link to="/NewRequisition"><i className="fa fa-plus"></i> Create New Requisition</Link></div>
                </div>

                <div className="row">
                    <div className="col-md-8 hiringdashboard-left">
                        <div className="hiringdashboard-headtiles">
                            <div className="hiringdashboard-headtiles-each">
                                <h3>My Candidate Pipeline</h3>
                                <div className="hiringdashboard-headtiles-each-sub">
                                    <h1>15</h1>
                                    <h4>Submitted</h4>
                                </div>
                                <div className="hiringdashboard-headtiles-each-sub">
                                    <h1>3</h1>
                                    <h4>Scheduled</h4>
                                </div>
                            </div>
                            <div className="hiringdashboard-headtiles-each">
                                <h3>My Requisitions</h3>
                                <div className="hiringdashboard-headtiles-each-sub">
                                    <h1>2</h1>
                                    <h4>Today</h4>
                                </div>
                                <div className="hiringdashboard-headtiles-each-sub">
                                    <h1>5</h1>
                                    <h4>This Week</h4>
                                </div>
                            </div>
                            <div className="hiringdashboard-headtiles-each">
                                <h3>New Joiners</h3>
                                <div className="hiringdashboard-headtiles-each-sub">
                                    <h1>2</h1>
                                    <h4>This Week</h4>
                                </div>
                                <div className="hiringdashboard-headtiles-each-sub">
                                    <h1>12</h1>
                                    <h4>This Month</h4>
                                </div>
                            </div>
                        </div>
                        <div className="tabhead">
                            <h3>Interviews Scheduled <Link to="/jobs">Past Interviews (25)</Link> <Link to="/jobs" className="m-r-10">View My Calendar</Link>  </h3>
                        </div>
                        <Tabs selectedIndex={this.state.tabIndex} onSelect={tabIndex => this.setState({ tabIndex })}>
                            <TabList>
                                <Tab>Today (14)</Tab>
                                <Tab>This Week (05)</Tab>
                                <Tab>This Month (30)</Tab>
                            </TabList>
                            <TabPanel> <InterviewsScheduledTable /> </TabPanel>
                            <TabPanel> <InterviewsScheduledTable /> </TabPanel>
                            <TabPanel> <InterviewsScheduledTable /> </TabPanel>
                        </Tabs>
                    </div>

                    <div className="col-md-4 hiringdashboard-right">
                        <div className="snippets flex100 mytasks">
                            <h3>My Tasks <Link to="/mytasks">View all</Link></h3>
                            <h5>Today 21 Aug, 2018 </h5>
                            <div className="mytasks-each">
                                <Link to="/mytask:id">Discuss with Recruitment Manager</Link>
                                <p>02:00 PM - 3:00 PM IST</p>
                            </div>
                            <div className="mytasks-each">
                                <Link to="/mytask:id">Followup with CEO on the budget</Link>
                                <p>03:00 PM - 4:00 PM IST</p>
                            </div>
                        </div>

                        <div className="snippets flex100 actlogs">
                            <h3>Activity Logs <Link to="/actlogs">View all</Link></h3>
                            <div className="actlogs-each">
                                <p className="logtext"><span>Harish,</span> changed Srilalitha candidate status from "Screening" to "Technical Interview".</p>
                                <p>1 minute ago</p>
                            </div>
                            <div className="actlogs-each">
                                <p className="logtext"><span>Aneel,</span> changed Nikhil candidate status from "Screening" to "Technical Interview".</p>
                                <p>1 minute ago</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HiringManagerDashboard;