import React, { Component } from 'react';
import '../../styles/Candidates.css';
import '../../styles/Tabs.css';
import { Link } from 'react-router-dom'
import Jobstable from "../Common/AllJobsTable"

class Jobs extends Component {
    render() {
        return (
            <div>
                {/* <div className="row page-white-block" >
                    <div className="page-white-block-header">
                    </div>
                </div> */}

                <div className="candidates">
                    <div className="candidates-main">
                        <div className="candidates-main-header row">
                            <div className="col-md-6">
                                <h3>All Jobs </h3>
                            </div>
                            <div className="col-md-6">
                                <Link to="/addnewjob" type="button" className="btn btn-primary float-right">Add New Job</Link>
                                <input className="form-control mr-sm-4 col-md-4 float-right" type="text" placeholder="Search" aria-label="Search"></input>
                            </div>
                        </div>
                        <Jobstable />
                    </div>
                </div>
            </div >
        );
    }
}

export default Jobs;
