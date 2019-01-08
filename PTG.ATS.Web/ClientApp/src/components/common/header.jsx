import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../images/ATSlogo.png";

const Header = () => {
    return (
        <nav className="header navbar navbar-expand-lg">
            <div className="navbar-brand">
                <Link to="/"> <img src={Logo} /></Link>
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
                        <i className="fa fa-tachometer"></i> Dashboard
                    </NavLink>
                    <NavLink className="nav-item nav-link" to="/jobs">
                    <i className="fa fa-suitcase"></i> Jobs
                    </NavLink>
					<NavLink className="nav-item nav-link" to="/newRequisition">
                    <i className="fa fa-user-o"></i> Jobs Requisitions
                    </NavLink>
                    <NavLink className="nav-item nav-link" to="/candidates">
                    <i className="fa fa-user-o"></i> Candidates
                     </NavLink>
                    <NavLink className="nav-item nav-link" to="/pipeline">
                    <i className="fa fa-user-o"></i>  Pipeline
                     </NavLink>
                    <NavLink className="nav-item nav-link" to="/reports">
                    <i className="fa fa-user-o"></i>  Reports
                     </NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Header;
