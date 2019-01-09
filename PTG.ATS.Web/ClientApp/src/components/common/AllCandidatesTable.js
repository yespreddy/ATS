import React from "react";
import { Table } from 'reactstrap';
import { Link } from "react-router-dom";
import { Form, CheckboxField } from 'react-components-form';
import SegmentedProgressbar from './SegmentedProgressbar';

class Candidatestable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            CandidatesData: [
                { name: "Aneel Kaushik", location: "Hyderabad", contact: "9700078025", source: "Linkedin", profilematch: "05", status: "New", rating: "N/A", receivedon: "21/12/2018" },
                { name: "Sudhir Manne", location: "Redmond", contact: "9848012345", source: "Monster", profilematch: "01", status: "Active", rating: "2", receivedon: "24/1/2019" },
                { name: "Shiva Krishna", location: "Bangalore", contact: "9977881234", source: "Naukri", profilematch: "03", status: "New", rating: "N/A", receivedon: "14/1/2019" },
                { name: "Srikanth Rallabandi", location: "Hyderabad", contact: "8686213456", source: "Indeed", profilematch: "05", status: "New", rating: "1", receivedon: "21/12/2018" },
                { name: "Rakesh Repala", location: "Redmond", contact: "7799123456", source: "Monster", profilematch: "01", status: "Not Hired", rating: "1", receivedon: "24/1/2019" },
                { name: "Sampath Kumar", location: "Bangalore", contact: "9989654321", source: "Linkedin", profilematch: "03", status: "Active", rating: "2", receivedon: "14/1/2019" }
            ]
        }
    }

    render() {
        const percentage = 66;
        return (
            <Table className="thetable candtable">
                <thead>
                    <tr>
                        <th className="innertableth">
                            <Form>
                                <CheckboxField name="selectallcandidates" />
                            </Form>
                        </th>
                        <th className="innertableth">&nbsp;</th>
                        <th className="innertableth">Name</th>
                        <th className="innertableth">Received On</th>
                        <th className="innertableth">Source</th>
                        <th className="innertableth">Profile Match</th>
                        <th className="innertableth">Status</th>
                        <th className="innertableth">Rating</th>
                        <th className="innertableth">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.CandidatesData.map((candidate, index) => (
                        <tr key={index}>
                            <td>
                                <Form>
                                    <CheckboxField name="selectallcandidates" />
                                </Form>
                            </td>
                            <td><i className="fa fa-eye"></i></td>
                            <td>
                                <div className="bluetext"><Link to="/candidatesDetailed">{candidate.name}</Link></div>
                                <div className="smalltext">{candidate.location} - <i className="fa fa-phone"></i> {candidate.contact}</div>
                            </td>
                            <td>{candidate.receivedon}</td>
                            <td>{candidate.source}</td>
                            <td>
                                <div style={{ width: '40px', height: '40px' }}>
                                    <SegmentedProgressbar percentage={percentage} />
                                </div>
                            </td>
                            <td>{candidate.status}</td>
                            <td>{candidate.rating}</td>
                            <td><i className=""></i></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        );
    }
}

export default Candidatestable;