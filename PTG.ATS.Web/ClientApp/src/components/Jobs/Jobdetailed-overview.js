import React, { Component } from 'react';
import '../../styles/Candidates.css';
import Innernav from '../Common/InnerNav';
import { Link } from 'react-router-dom';
import "../../styles/Jobs.css";
import { Button } from 'reactstrap';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Pie } from 'react-d3-pie';


class JobsdetailedOverview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tabIndex: 0,
        }
    }

    render() {
        const acceptencedata = [
            { name: 'Accepted', value: 1 },
            { name: 'Rejected', value: 1 },
            { name: 'Hired', value: 1 },
            { name: 'NotHired', value: 2 }
        ];
        return (
            <React.Fragment>
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
                        {/* <div className="candidates-main-header">
                            <div className="col-md-6">
                                <h3>Candidates for this Job</h3>
                            </div>
                            <div className="col-md-6">
                                <Link to="/addcandidate" type="button" className="btn btn-primary float-right">Add Candidate</Link>
                                <input className="form-control mr-sm-4 col-md-4 float-right" type="text" placeholder="Search" aria-label="Search"></input>
                            </div>
                        </div> */}

                    <div className="candidate-overview bg-white">
                        <div className="candidates-main-header">
                            <div className="col-md-6">
                                <h3 className="mb-0">Job ID - PTG1014154</h3>
                            </div>
                            <div className="col-md-6">                                
                                <Link to="/addcandidate" type="button" className="btn btn-primary float-right">Add Candidate</Link>                                
                                <Button outline color="primary" className="float-right mr-3"><i className="fa fa-share-square-o"></i> Social Share</Button>
                            </div>
                        </div>
                        <div className="activeRow">
                            <Button className="btn btnActive">Active</Button>
                        </div>
                        <div className="d-flex jobDetail">
                            <p>Posted on <span>01/08/2018</span></p>
                            <p>Due on <span>30/08/2018</span></p>
                            <p>Hiring manager: <span>Srinivas Rao Desai</span></p>
                            <p>Recruiter: <span>Anil</span></p>
                            <p><i className="fa fa-globe"></i> <span className="ml-1">Hyderabad, India</span></p>
                            <p><i className="fa fa-users"></i> <span className="ml-1">MSIT</span></p>
                        </div>
                        <div className="candidateSummary p-3">
                            <h6>Candidates Summary</h6>
                            <div className="d-flex candidateGrid">
                                <div className="candidateGrid-each">
                                    <h5>Total Candidates</h5>
                                    <p>140</p>
                                </div>
                                <span>|</span>
                                <div className="candidateGrid-each">
                                    <h5>New</h5>
                                    <p>10</p>
                                </div>
                                <span>|</span>
                                <div className="candidateGrid-each">
                                    <h5>Active</h5>
                                    <p>100</p>
                                </div>
                                <span>|</span>
                                <div className="candidateGrid-each">
                                    <h5>Hired</h5>
                                    <p>05</p>
                                </div>
                                <span>|</span>
                                <div className="candidateGrid-each">
                                    <h5>Not Hired/Rejected</h5>
                                    <p>25</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="candidate-review pb-4">
                            <div className="row m-0">
                                <div className="col-md-4">
                                <h6>Candidates by Source</h6>
                                <div className="d-flex justify-content-center pieBorder">
                                    <Pie width={300}
                                    height={300}
                                    data={acceptencedata}
                                    colors={['darkblue', 'skyblue', 'orange', 'green']}
                                    innerRadius={0.4}
                                    outerRadius={0.8}
                                    />
                                </div>
                                </div>
                                <div className="col-md-4 topCandidate">
                                <h6>Top Candidates</h6>
                                <ul className="list-group">
                                    <li className="list-group-item">
                                    <div className="row">
                                        <div className="col-md-9">
                                            <h6>Dheerendra Sathyanarayana</h6>
                                            <p><span>Hyderabad, India</span> <i className="fa fa-phone" aria-hidden="true"></i> <span>+91 99894 14134</span></p>
                                        </div>
                                        <div className="col-md-3">
                                        <div className="rating">
                                            <input type="radio" id="star10" name="rating" value="10" /><label htmlFor="star10" title="Rocks!">5 stars</label>
                                            <input type="radio" id="star9" name="rating" value="9" /><label htmlFor="star9" title="Rocks!">4 stars</label>
                                            <input type="radio" id="star8" name="rating" value="8" /><label htmlFor="star8" title="Pretty good">3 stars</label>
                                            <input type="radio" id="star7" name="rating" value="7" /><label htmlFor="star7" title="Pretty good">2 stars</label>
                                            <input type="radio" id="star6" name="rating" value="6" /><label htmlFor="star6" title="Meh">1 star</label>
                                        </div>
                                        </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                    <div className="row">
                                        <div className="col-md-9">
                                            <h6>Mehboob Mihir</h6>
                                            <p><span>Hyderabad, India</span> <i className="fa fa-phone" aria-hidden="true"></i> <span>+91 99894 14134</span></p>
                                        </div>
                                        <div className="col-md-3">
                                        <div className="rating">
                                            <input type="radio" id="star10" name="rating" value="10" /><label htmlFor="star10" title="Rocks!">5 stars</label>
                                            <input type="radio" id="star9" name="rating" value="9" /><label htmlFor="star9" title="Rocks!">4 stars</label>
                                            <input type="radio" id="star8" name="rating" value="8" /><label htmlFor="star8" title="Pretty good">3 stars</label>
                                            <input type="radio" id="star7" name="rating" value="7" /><label htmlFor="star7" title="Pretty good">2 stars</label>
                                            <input type="radio" id="star6" name="rating" value="6" /><label htmlFor="star6" title="Meh">1 star</label>
                                        </div>
                                        </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                    <div className="row">
                                        <div className="col-md-9">
                                            <h6>Hema Desai</h6>
                                            <p><span>Hyderabad, India</span> <i className="fa fa-phone" aria-hidden="true"></i> <span>+91 99894 14134</span></p>
                                        </div>
                                        <div className="col-md-3">
                                        <div className="rating">
                                            <input type="radio" id="star10" name="rating" value="10" /><label htmlFor="star10" title="Rocks!">5 stars</label>
                                            <input type="radio" id="star9" name="rating" value="9" /><label htmlFor="star9" title="Rocks!">4 stars</label>
                                            <input type="radio" id="star8" name="rating" value="8" /><label htmlFor="star8" title="Pretty good">3 stars</label>
                                            <input type="radio" id="star7" name="rating" value="7" /><label htmlFor="star7" title="Pretty good">2 stars</label>
                                            <input type="radio" id="star6" name="rating" value="6" /><label htmlFor="star6" title="Meh">1 star</label>
                                        </div>
                                        </div>
                                        </div>
                                    </li>
                                </ul>
                                </div>
                                <div className="col-md-4 upcomingCandidate">
                                <h6>Upoming Interviews</h6>
                                <ul className="list-group">
                                    <li className="list-group-item">
                                        <h6>Mehboob Mihir F2F Technical discussion with Srinivas Rao Desai</h6>
                                        <p> on <span>24/08/2018</span> at <span>02:00 PM</span> - <span>3:00 PM</span> <span>IST</span></p>
                                    </li>
                                    <li className="list-group-item">
                                    <h6>Hema Desai Telephonic Interview with Srinivas Rao Desai and Anil</h6>
                                        <p> on <span>25/08/2018</span> at <span>02:30 PM</span> - <span>3:00 PM</span> <span>IST</span></p>
                                    </li>
                                </ul>
                                </div>
                            </div>
                        </div>
                    </div>    


                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default JobsdetailedOverview;
