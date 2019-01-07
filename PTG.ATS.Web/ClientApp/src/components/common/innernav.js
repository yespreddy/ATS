import React from 'react';
import { Nav, NavLink } from 'reactstrap';

export default class Innernav extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Nav>
                    <NavLink href="#">Overview</NavLink>
                    <NavLink href="#">Candidates</NavLink>
                    <NavLink href="#">Pipeline</NavLink>
                    <NavLink href="#">Job Boards</NavLink>
                    <NavLink href="#">Refer</NavLink>
                </Nav>
            </React.Fragment>
        );
    }
}