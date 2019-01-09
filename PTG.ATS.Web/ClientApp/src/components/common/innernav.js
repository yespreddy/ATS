import React from 'react';
import { Nav, NavLink } from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';

export default class Innernav extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Nav>                
                    <NavLink tag={RRNavLink} className="nav-link" activeClassName="active" to="/jobdetailed-overview">Overview</NavLink>
                    <NavLink tag={RRNavLink} className="nav-link" activeClassName="active" to="/jobdetailed-candidate">Candidates</NavLink>
                    <NavLink>Pipeline</NavLink>
                    <NavLink>Job Boards</NavLink>
                    <NavLink>Refer</NavLink>
                </Nav>
            </React.Fragment>
        );
    }
}