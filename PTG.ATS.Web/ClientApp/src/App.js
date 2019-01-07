import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Recruiterdashboard from "./components/Recruiterdashboard";
import Candidates from "./components/candidate/Candidates";
import Jobs from "./components/Jobs";
import Header from "./components/common/header";
import Jobsdetailed from "./components/Jobdetailed";
import AddCandidate from "./components/candidate/Addcandidate";
import CandidatesDetailed from "./components/CandidatesDeatiled";
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
				<Route path="/candidatesdetailed" component={CandidatesDetailed} activeClassName='active' />
				<Route path="/jobs" component={Jobs} activeClassName='active' />
				<Route path="/jobdetailed" component={Jobsdetailed} activeClassName='active' />
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
