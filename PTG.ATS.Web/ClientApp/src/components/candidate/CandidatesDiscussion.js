import React from "react";
import '../../styles/Candidates.css';
import { Form, FormGroup, Input, ListGroup, ListGroupItem, Button } from 'reactstrap';
// import { Link } from "react-router-dom";

class Candidatesdiscussion extends React.Component {

    render() {
        return (
            <div className="candidates-discussion">
                <div className="no-gutters">
                    <div className="row">
                        <div className="col-12 clearfix">
                            <h4>Discussion</h4>
                            <Form>
                                <FormGroup>
                                    <Input type="textarea" name="text" id="exampleText" placeholder="Leave a comment. Use @ to mention a team member." />
                                </FormGroup>
                            </Form>
                            <div className="float-right">
                                <Button className="btn secondary-btn">Add Attachment</Button>{' '}
                                <Button className="btn primary-btn">Post Comment</Button>{' '}
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="user-comment">
                                <div className="user-comment-header clearfix">
                                    <h5 className="float-left">Commented by Srinivas Rao Desai</h5>
                                    <div className="float-right">
                                        <i className="fa fa-edit"></i>
                                        <i className="fa fa-trash"></i>
                                    </div>
                                </div>
                                <p>@Hari Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur libero nulla, lobortis at nibh nec, lacinia porttitor turpis. Etiam viverra mauris nulla, at blandit dolor sollicitudin et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur libero nulla, lobortis at nibh nec, lacinia porttitor turpis. Etiam viverra mauris nulla, at blandit dolor sollicitudin et.</p>
                            </div>
                        </div>
                        <div className="col-12 timeline">
                            <ListGroup>
                                <ListGroupItem>
                                    <h5>Timeline Title/Activity Title</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur libero nulla, lobortis at nibh nec, lacinia porttitor turpis. Etiam viverra mauris nulla, at blandit dolor sollicitudin et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur libero nulla, lobortis at nibh nec, lacinia porttitor turpis. Etiam viverra mauris nulla, at blandit dolor sollicitudin et.</p>
                                </ListGroupItem>
                                <ListGroupItem>
                                    <h5>Timeline Title/Activity Title</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur libero nulla, lobortis at nibh nec, lacinia porttitor turpis. Etiam viverra mauris nulla, at blandit dolor sollicitudin et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur libero nulla, lobortis at nibh nec, lacinia porttitor turpis. Etiam viverra mauris nulla, at blandit dolor sollicitudin et.</p>
                                </ListGroupItem>
                            </ListGroup>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Candidatesdiscussion;