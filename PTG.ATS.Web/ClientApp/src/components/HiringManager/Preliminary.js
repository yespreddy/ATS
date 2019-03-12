import React, { Component } from 'react';
import '../../styles/Candidates.css';
import Breadcrumbs from "../Common/Breadcrumb";
import logger from 'redux-logger'
import FileViewer from 'react-file-viewer';
import { Nav, NavLink } from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';

// import logger from 'logging-library';
// import FileViewer from 'react-file-viewer';
// import { CustomErrorComponent } from 'custom-error';

// const file = 'http://insight.dev.schoolwires.com/HelpAssets/C2Assets/C2Files/C2ImportCalEventSample.csv'
// const type = 'csv'

const file = 'https://www.pexels.com/photo/bird-wildlife-no-person-nature-110812/'
const type = 'jpeg'

class Preliminary extends Component {
	constructor(props) {
		super(props);
		this.state = { isToggleOn: true };

		// This binding is necessary to make `this` work in the callback
		//this.questionnaire = this.questionnaire.bind(this);
	}

	questionnaire() {
		//this.setState(state => ({
		//	isToggleOn: !state.isToggleOn
		//}));
		alert('questionnaire');
	}

    render() {
        return (
            <React.Fragment>
                <div className="page-title">
                    <div className="page-title-header row">
                        <div className="col-md-12">
                            <Breadcrumbs />
                            <h3>New Requisition</h3>
                        </div>
                    </div>
                </div>

                <div className="processStage">
					<div className="Step completed">
						<span>1</span>
						<p>New Requisition</p>
					</div>
					<div className="Step active">
						<span>2</span>
						<p>Preliminary Questionnaire</p>
					</div>
					<div className="Step">
						<span>3</span>
						<p>Workflow</p>
					</div>
					<div className="Step">
						<span>4</span>
						<p>Interview Panel</p>
					</div>
                </div>
				
				{/*	<Nav>
					<NavLink className="nav-link" activeClassName="active" onClick={this.toggleBox}>Questionnaire</NavLink>
						<NavLink className="nav-link" activeClassName="active" >Preliminary Application</NavLink>
					</Nav>
					<div className=""></div>*/}

				<div className="questionnaire" onClick={this.questionnaire()}>Questionnaire</div>
				<div className="preliminary-app" onclick="preliminaryApp()">Preliminary Application</div>
				<div className="questionnaire-content" >questionnaire content</div>
				<div className="preliminary-app-content">preliminary-app content</div>

                <div className="addcandidates col-md-12">
					{/* <FileViewer
                        fileType={type}
                        filePath={file}
                        onError={this.onError}/> */}

                </div>
            </React.Fragment>
        );
	}
	onError(e) {
		logger.logError(e, 'error in file-viewer');
	}
}

export default Preliminary;
