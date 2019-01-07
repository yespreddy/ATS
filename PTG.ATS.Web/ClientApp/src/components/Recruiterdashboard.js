import React from "react";
import { Link } from 'react-router-dom'
import Jobstable from "../components/common/jobstable"
import { Pie } from 'react-d3-pie';

class Recruiterdashboard extends React.Component {
    render() {
        const acceptencedata = [
            { name: 'Accepted', value: 1 },
            { name: 'Rejected', value: 2 }
        ];
        return (
            <div className="dashboard">
                <div className="dashboard-headtitle">
                    Welcome Aneel! Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </div>

                <div className="dashboard-headtiles">
                    <div className="dashboard-headtiles-each">
                        <h3>Active Job Requisitions</h3>
                        <h1>05</h1>
                    </div>
                    <div className="dashboard-headtiles-each">
                        <h3>Total Applicants</h3>
                        <h1>110</h1>
                    </div>
                    <div className="dashboard-headtiles-each">
                        <h3>Interviews</h3>
                        <h1>06</h1>
                    </div>
                    <div className="dashboard-headtiles-each">
                        <h3>Offers Released</h3>
                        <h1>01</h1>
                    </div>
                    <div className="dashboard-headtiles-each">
                        <h3>Hires</h3>
                        <h1>02</h1>
                    </div>
                    <div className="dashboard-headtiles-each">
                        <h3>Closed Jobs</h3>
                        <h1>02</h1>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-8 dashboard-left">
                        <div className="tablehead">
                            <h3>Open Job Summary <Link to="/jobs">View all</Link></h3>
                        </div>
                        <Jobstable />
                    </div>
                    <div className="col-md-4 dashboard-right">
                        <div className="snippets">
                            <h3>Offer Acceptance</h3>
                            <Pie width={150}
                                height={150}
                                data={acceptencedata}
                                colors={['lightgreen', 'skyblue']}
                                innerRadius={0.4}
                                outerRadius={0.8}
                            />
                        </div>

                        <div className="snippets newjoiners">
                            <h3>New Joiners</h3>
                            <div className="row">
                                <div className="col-md-4">
                                    <h4>01</h4>
                                </div>
                                <div className="col-md-8 nopad">
                                    <p>Today</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4">
                                    <h4>04</h4>
                                </div>
                                <div className="col-md-8 nopad">
                                    <p>This week</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4">
                                    <h4>05</h4>
                                </div>
                                <div className="col-md-8 nopad">
                                    <p>This month</p>
                                </div>
                            </div>
                        </div>

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

export default Recruiterdashboard;