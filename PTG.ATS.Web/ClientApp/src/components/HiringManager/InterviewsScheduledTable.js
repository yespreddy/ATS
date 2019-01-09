import React from "react";
import { Table } from 'reactstrap';
import { Link } from "react-router-dom";

class InterviewsScheduledTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            InterviewsScheduledData: [
                { CandidateName: "Aneel Kaushik", Location: "Hyderabad, India", Position: "UX Designer", Status: "Scheduled", Time: "10:00 AM - 11:00 AM IST", InterviewStage: "Second Round", ModeOfInterview: "In Person", Comments: "No Comments", FollowUp: "0" },
                { CandidateName: "Shiva Krishn", Location: "Hyderabad, India", Position: "UI Developer", Status: "Scheduled", Time: "11:30 AM - 12:30 PM IST", InterviewStage: "Third Round", ModeOfInterview: "In Person", Comments: "No Comments", FollowUp: "0" },
                { CandidateName: "Rakesh Repala", Location: "Hyderabad, India", Position: "UI Designer", Status: "Scheduled", Time: "1:00 PM - 2:00 PM IST", InterviewStage: "First Round", ModeOfInterview: "Telephonic", Comments: "No Comments", FollowUp: "0" },
                { CandidateName: "Chenna Krishna", Location: "Hyderabad, India", Position: "Xamarian", Status: "Scheduled", Time: "3:00 PM - 4:00 PM IST", InterviewStage: "First Round", ModeOfInterview: "Telephonic", Comments: "No Comments", FollowUp: "0" }
            ]
        }
    }

    render() {
        return (
            <Table className="interviewScheduleTable">
                <thead>
                    <tr>
                        <th className="dashboardth">Candidate Name</th>
                        <th className="dashboardth">Position</th>
                        <th className="dashboardth">Status</th>
                        <th className="dashboardth">Time</th>
                        <th className="dashboardth">Interview Stage</th>
                        <th className="dashboardth">Mode of Interview</th>
                        <th className="dashboardth">Comments</th>
                        <th className="dashboardth">Follow up</th>
                        <th className="dashboardth">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.InterviewsScheduledData.map((scheduled, index) => (
                        <tr key={index}>
                            <td>
                                <div className="bluetext"><Link to="/candidatesdetailed">{scheduled.CandidateName}</Link></div>
                                <div className="smalltext">{scheduled.Pocation}</div>
                            </td>
                            <td><Link to="/jobdetailed">{scheduled.Position}</Link></td>
                            <td><div className="status">{scheduled.Status}</div></td>
                            <td>{scheduled.Time}</td>
                            <td>{scheduled.InterviewStage}</td>
                            <td>{scheduled.ModeOfInterview}</td>
                            <td>{scheduled.Comments}</td>
                            <td>{scheduled.FollowUp}</td>
                            <td>{scheduled.Actions}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        );
    }
}

export default InterviewsScheduledTable;