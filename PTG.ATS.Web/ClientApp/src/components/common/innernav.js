import React from 'react';
import { Nav, NavLink } from 'reactstrap';

export default class Innernav extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Nav>
                    <NavLink href="/jobdetailed-overview">Overview</NavLink>
                    <NavLink href="/jobdetailed-candidate">Candidates</NavLink>
                    <NavLink href="#">Pipeline</NavLink>
                    <NavLink href="#">Job Boards</NavLink>
                    <NavLink href="#">Refer</NavLink>
                </Nav>
            </React.Fragment>
        );
    }
}