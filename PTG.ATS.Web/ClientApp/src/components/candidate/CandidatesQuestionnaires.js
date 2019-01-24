import React from "react";
import '../../styles/Candidates.css';
import { ListGroup, ListGroupItem, Button } from 'reactstrap';
//import { Link } from "react-router-dom";

class Candidatesquestionnaire extends React.Component {

    render() {
        return (
            <div className="candidates-questionnaire">
                <div className="candidates-questionnaire-header clearfix">
                    <h4 className="float-left">Senior Java Developer & Architect wiht 5+ Years Experience</h4>
                    <div className="float-right">
                        <Button className="btn secondary-btn">Change Question Template</Button>{' '}
                        <Button className="btn primary-btn">Add Question</Button>{' '}
                    </div>
                </div>
                <ListGroup className="clearfix">
                    <ListGroupItem><i className="fa fa-list"></i>Question 1 - User Experience Design<i className="fa fa-edit float-right"></i></ListGroupItem>
                    <ListGroupItem><i className="fa fa-list"></i>Question 1 - User Experience Design<i className="fa fa-edit float-right"></i></ListGroupItem>
                    <ListGroupItem><i className="fa fa-list"></i>Question 1 - User Experience Design<i className="fa fa-edit float-right"></i></ListGroupItem>
                    <ListGroupItem><i className="fa fa-list"></i>Question 1 - User Experience Design<i className="fa fa-edit float-right"></i></ListGroupItem>
                    <ListGroupItem><i className="fa fa-list"></i>Question 1 - User Experience Design<i className="fa fa-edit float-right"></i></ListGroupItem>
                </ListGroup>
            </div>
        );
    }
}

export default Candidatesquestionnaire;