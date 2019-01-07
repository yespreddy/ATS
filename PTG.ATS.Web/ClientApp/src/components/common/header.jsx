import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
    return (
        <nav className="header navbar navbar-expand-lg">
            <div className="navbar-brand">
                <Link to="/">ATS</Link>
            </div> 
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <NavLink className="nav-item nav-link" to="/recruiterdashboard">
                        Dashboard
                    </NavLink>
                    <NavLink className="nav-item nav-link" to="/jobs">
                        Jobs
                    </NavLink>
					<NavLink className="nav-item nav-link" to="/newRequisition">
                        Jobs Requisitions
                    </NavLink>
                    <NavLink className="nav-item nav-link" to="/candidates">
                        Candidates
                     </NavLink>
                    <NavLink className="nav-item nav-link" to="/pipeline">
                        Pipeline
                     </NavLink>
                    <NavLink className="nav-item nav-link" to="/reports">
                        Reports
                     </NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Header;
