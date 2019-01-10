import React, { Component } from 'react';
import '../../styles/Candidates.css';
import Breadcrumbs from "../Common/Breadcrumb";
// import logger from 'logging-library';
// import FileViewer from 'react-file-viewer';
// import { CustomErrorComponent } from 'custom-error';

// const file = 'http://insight.dev.schoolwires.com/HelpAssets/C2Assets/C2Files/C2ImportCalEventSample.csv'
// const type = 'csv'

class Preliminary extends Component {
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
                    <div className="Step active">
                        <span>1</span>
                    </div>
                    <div className="Step">
                        <span>2</span>
                    </div>
                    <div className="Step">
                        <span>3</span>
                    </div>
                    <div className="Step">
                        <span>4</span>
                    </div>
                </div>

                <div className="addcandidates col-md-12">
                    {/* <FileViewer
                        fileType={type}
                        filePath={file}
                        errorComponent={CustomErrorComponent}
                        onError={this.onError}/> */}

                </div>
            </React.Fragment>
        );

        // onError(e) {
        //     logger.logError(e, 'error in file-viewer');
        // }
    }
}

export default Preliminary;
