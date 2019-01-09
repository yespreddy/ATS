﻿import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Recruiterdashboard from "./components/Recruiter/Recruiterdashboard";
import Candidates from "./components/Candidate/Candidates";
import Jobs from "./components/Jobs/Jobs";
import Header from "./components/Common/Header";
import JobsdetailedCandidate from "./components/Jobs/Jobdetailed-candidates";
import JobdetailedOverview from "./components/Jobs/Jobdetailed-overview";
import AddCandidate from "./components/Candidate/AddCandidate";
import Candidates360Candidates from "./components/Candidate/Candidates360-candidates";
import HiringManagerDashboard from "./components/HiringManager/HiringManagerDashboard";
import NewRequisition from "./components/HiringManager/NewRequisition";

class App extends Component {
	render() {
		return (
		  <React.Fragment>
			<Header />
			<main className="container-fluid wrapper">
			  <Switch>
				<Route path="/recruiterdashboard" component={Recruiterdashboard} activeClassName='active' />
				<Route path="/candidates" component={Candidates} activeClassName='active' />
				<Route path="/candidates360-candidates" component={Candidates360Candidates} activeClassName='active' />
				<Route path="/Jobs" component={Jobs} activeClassName='active' />
				<Route path="/jobdetailed-candidate" component={JobsdetailedCandidate} activeClassName='active' />
				<Route path="/Jobdetailed-overview" component={JobdetailedOverview} activeClassName='active' />
				<Route path="/addcandidate" component={AddCandidate} activeClassName='active' />
				<Route path="/hiringmanagerdashboard" component={HiringManagerDashboard} activeClassName='active' />
				<Route path="/NewRequisition" component={NewRequisition} activeClassName='active' />
				<Redirect from="/" exact to="/hiringmanagerdashboard" activeClassName='active' />
			  </Switch>
			</main>
		  </React.Fragment>
	  );
	}
}

export default App;
