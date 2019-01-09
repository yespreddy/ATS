import React, { Component } from 'react';
import '../../styles/Candidates.css';
import Innernav from '../Common/InnerNav';
import { Link } from 'react-router-dom';
import "../../styles/Jobs.css";
import { Button } from 'reactstrap';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


class JobsdetailedOverview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tabIndex: 0,
        }
    }

    render() {
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
                    <div className="innermenu-actions">
                        {/* <button className="btn btn-primary">Edit Job</button> */}
                        <div className="float-right ml-3">
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
                        <div className="float-right">
                        <Button outline color="primary">Edit Job</Button>
                        </div>                        
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
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default JobsdetailedOverview;
