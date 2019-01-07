import React from "react";
import { Table } from 'reactstrap';
import { Link } from "react-router-dom";

class Jobstable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            jobData: [
                { role: "UX Designer", location: "Hyderabad", manager: "Kutumba Rao", new: "35", screening: "05", interview: "14", bcheck: "0", offers: "2", duedate: "21/12/2018" },
                { role: "UI Developer", location: "Redmond", manager: "Ramnath", new: "21", screening: "01", interview: "08", bcheck: "0", offers: "2", duedate: "24/1/2019" },
                { role: "Java Developer", location: "Bangalore", manager: "Mandar", new: "12", screening: "03", interview: "18", bcheck: "1", offers: "4", duedate: "14/1/2019" },
                { role: "UX Designer", location: "Hyderabad", manager: "Kutumba Rao", new: "35", screening: "05", interview: "14", bcheck: "0", offers: "2", duedate: "21/12/2018" },
                { role: "UI Developer", location: "Redmond", manager: "Ramnath", new: "21", screening: "01", interview: "08", bcheck: "0", offers: "2", duedate: "24/1/2019" },
                { role: "Java Developer", location: "Bangalore", manager: "Mandar", new: "12", screening: "03", interview: "18", bcheck: "1", offers: "4", duedate: "14/1/2019" }
            ]
        }
    }

    render() {
        return (
            <Table className="thetable">
                <thead>
                    <tr>
                        <th className="dashboardth">Job Location &amp; Role</th>
                        <th className="dashboardth">Hiring Manager</th>
                        <th className="dashboardth">New</th>
                        <th className="dashboardth">Screening</th>
                        <th className="dashboardth">Interview</th>
                        <th className="dashboardth">Background Check</th>
                        <th className="dashboardth">Offer Released</th>
                        <th className="dashboardth">Due Date</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.jobData.map((job, index) => (
                        <tr key={index}>
                            <td>
                                <div className="bluetext"><Link to="/jobdetailed">{job.role}</Link></div>
                                <div className="smalltext">{job.location}</div>
                            </td>
                            <td>{job.manager}</td>
                            <td>{job.new}</td>
                            <td>{job.screening}</td>
                            <td>{job.interview}</td>
                            <td>{job.bcheck}</td>
                            <td>{job.offers}</td>
                            <td>{job.duedate}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        );
    }
}

export default Jobstable;