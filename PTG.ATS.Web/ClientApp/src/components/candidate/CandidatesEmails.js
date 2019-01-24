import React from "react";
import '../../styles/Candidates.css';
import { Table, Button } from 'reactstrap';
// import { Link } from "react-router-dom";

class Candidatesemails extends React.Component {

    render() {
        return (
            <div className="candidates-email">
                <div className="candidates-email-header clearfix">
                    <h4 className="float-left">Emails</h4>
                    <div className="float-right">
                        <Button className="btn primary-btn">New Email</Button>{' '}
                    </div>
                </div>
                <Table className="thetable">
                <thead>
                    <tr>
                        <th className="innertableth">To</th>
                        <th className="innertableth">From</th>
                        <th className="innertableth">Subject</th>
                        <th className="innertableth">Date & Time</th>
                    </tr>
                </thead>
                <tbody>
                        <tr>
                            <td>Dheerendra Sathyanarayana</td>
                            <td>Pratikhya</td>
                            <td>Phone Interview - Srinivas Rao Desai</td>
                            <td>September 12, 2018 - 2:00 PM</td>
                        </tr>
                        <tr>
                            <td>Dheerendra Sathyanarayana</td>
                            <td>Pratikhya</td>
                            <td>Phone Interview - Srinivas Rao Desai</td>
                            <td>September 12, 2018 - 2:00 PM</td>
                        </tr>
                        <tr>
                            <td>Dheerendra Sathyanarayana</td>
                            <td>Pratikhya</td>
                            <td>Phone Interview - Srinivas Rao Desai</td>
                            <td>September 12, 2018 - 2:00 PM</td>
                        </tr>
                        <tr>
                            <td>Dheerendra Sathyanarayana</td>
                            <td>Pratikhya</td>
                            <td>Phone Interview - Srinivas Rao Desai</td>
                            <td>September 12, 2018 - 2:00 PM</td>
                        </tr>                  
                </tbody>
            </Table>
            </div>
        );
    }
}

export default Candidatesemails;