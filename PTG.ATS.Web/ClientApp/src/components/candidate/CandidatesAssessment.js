import React from "react";
import '../../styles/Candidates.css';
import { Table, Button } from 'reactstrap';
// import { Link } from "react-router-dom";

class Candidatesassessment extends React.Component {

    render() {
        return (
            <div className="candidates-assess">
                <div className="candidates-assess-header clearfix">
                    <h4 className="float-left">Candidate Evaluation</h4>
                    <div className="float-right">
                        <Button className="btn primary-btn">Add Assessment</Button>{' '}
                    </div>
                </div>
                <div className="candidates-assess-wrap">
                    <div className="col-12">
                        <div className="overall-rating row clearfix">
                            <div className="overall-rating-left float-left">
                                <h5>Overall Rating</h5>
                                <div className="rating">
                                    <span>☆</span>
                                    <span>☆</span>
                                    <span>☆</span>
                                    <span>☆</span>
                                    <span>☆</span>
                                </div>
                            </div>
                            <div className="overall-rating-right">
                                <h5>Submitted by</h5>
                                <div className="user-badge-wrap">
                                    <div className="user-badge">
                                        <span>SD</span>
                                    </div>
                                    <div className="user-badge">
                                        <span>PB</span>
                                    </div>
                                    <div className="user-badge">
                                        <span>KM</span>
                                    </div>
                                    <div className="user-badge">
                                        <span>SK</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="snapshot-wrap">
                        <h4>Rating Snapshot</h4>
                        <div className="snapshot-item">
                            <label>Very Good</label>
                            <div className="rating">
                                <span>☆</span>
                                <span className="active">☆</span>
                                <span>☆</span>
                                <span>☆</span>
                                <span>☆</span>
                            </div>
                            <div class="bar-wrap">
                                <div class="progress">
                                    <div class="bar"></div>
                                </div>
                            </div>
                            <label>2 (50%)</label>
                        </div>
                        <div className="snapshot-item">
                            <label>Very Good</label>
                            <div className="rating">
                                <span>☆</span>
                                <span>☆</span>
                                <span>☆</span>
                                <span>☆</span>
                                <span>☆</span>
                            </div>
                            <div class="bar-wrap">
                                <div class="progress">
                                    <div class="bar"></div>
                                </div>
                            </div>
                            <label>2 (50%)</label>
                        </div>
                        <div className="snapshot-item">
                            <label>Very Good</label>
                            <div className="rating">
                                <span>☆</span>
                                <span>☆</span>
                                <span>☆</span>
                                <span>☆</span>
                                <span>☆</span>
                            </div>
                            <div class="bar-wrap">
                                <div class="progress">
                                    <div class="bar"></div>
                                </div>
                            </div>
                            <label>2 (50%)</label>
                        </div>
                        <div className="snapshot-item">
                            <label>Very Good</label>
                            <div className="rating">
                                <span>☆</span>
                                <span>☆</span>
                                <span>☆</span>
                                <span>☆</span>
                                <span>☆</span>
                            </div>
                            <div class="bar-wrap">
                                <div class="progress">
                                    <div class="bar"></div>
                                </div>
                            </div>
                            <label>2 (50%)</label>
                        </div>
                        <div className="snapshot-item">
                            <label>Very Good</label>
                            <div className="rating">
                                <span>☆</span>
                                <span>☆</span>
                                <span>☆</span>
                                <span>☆</span>
                                <span>☆</span>
                            </div>
                            <div class="bar-wrap">
                                <div class="progress">
                                    <div class="bar"></div>
                                </div>
                            </div>
                            <label>2 (50%)</label>
                        </div>
                    </div>
                    <div className="col-12 user-traits">
                        <div className="row">
                            <div className="col">
                                <h5>Character Traits</h5>
                                <div className="w-100 clearfix">
                                    <p className="float-left">Emotional</p>
                                    <div className="float-right">
                                        <i className="fa fa-thumbs-up"></i>
                                        <i className="fa fa-thumbs-up"></i>
                                        <i className="fa fa-thumbs-up"></i>
                                        <i className="fa fa-thumbs-up"></i>
                                    </div>
                                </div>
                                <div className="w-100 clearfix">
                                    <p className="float-left">Intelligence</p>
                                    <div className="float-right">
                                        <i className="fa fa-thumbs-up"></i>
                                        <i className="fa fa-thumbs-up"></i>
                                        <i className="fa fa-thumbs-up"></i>
                                        <i className="fa fa-thumbs-up"></i>
                                    </div>
                                </div>
                                <div className="w-100 clearfix">
                                    <p className="float-left">Curiosity</p>
                                    <div className="float-right">
                                        <i className="fa fa-thumbs-up"></i>
                                        <i className="fa fa-thumbs-up"></i>
                                        <i className="fa fa-thumbs-up"></i>
                                        <i className="fa fa-thumbs-up"></i>
                                    </div>
                                </div>
                                <div className="w-100 clearfix">
                                    <p className="float-left">Honesty</p>
                                    <div className="float-right">
                                        <i className="fa fa-thumbs-up"></i>
                                        <i className="fa fa-thumbs-up"></i>
                                        <i className="fa fa-thumbs-up"></i>
                                        <i className="fa fa-thumbs-up"></i>
                                    </div>
                                </div>
                                <div className="w-100 clearfix">
                                    <p className="float-left">Self Motivation</p>
                                    <div className="float-right">
                                        <i className="fa fa-thumbs-up"></i>
                                        <i className="fa fa-thumbs-up"></i>
                                        <i className="fa fa-thumbs-up"></i>
                                        <i className="fa fa-thumbs-up"></i>
                                    </div>
                                </div>
                                <div className="w-100 clearfix">
                                    <p className="float-left">Positivity</p>
                                    <div className="float-right">
                                        <i className="fa fa-thumbs-up"></i>
                                        <i className="fa fa-thumbs-up"></i>
                                        <i className="fa fa-thumbs-up"></i>
                                        <i className="fa fa-thumbs-up"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <h5>Professionalism</h5>
                                <div className="w-100 clearfix">
                                    <p className="float-left">Punctual</p>
                                    <div className="float-right">
                                        <i className="fa fa-thumbs-up"></i>
                                        <i className="fa fa-thumbs-up"></i>
                                        <i className="fa fa-thumbs-up"></i>
                                        <i className="fa fa-thumbs-up"></i>
                                    </div>
                                </div>
                                <div className="w-100 clearfix">
                                    <p className="float-left">Courteous</p>
                                    <div className="float-right">
                                        <i className="fa fa-thumbs-up"></i>
                                        <i className="fa fa-thumbs-up"></i>
                                        <i className="fa fa-thumbs-up"></i>
                                        <i className="fa fa-thumbs-up"></i>
                                    </div>
                                </div>
                                <div className="w-100 clearfix">
                                    <p className="float-left">Articulate</p>
                                    <div className="float-right">
                                        <i className="fa fa-thumbs-up"></i>
                                        <i className="fa fa-thumbs-up"></i>
                                        <i className="fa fa-thumbs-up"></i>
                                        <i className="fa fa-thumbs-up"></i>
                                    </div>
                                </div>
                                <div className="w-100 clearfix">
                                    <p className="float-left">Inquisitive</p>
                                    <div className="float-right">
                                        <i className="fa fa-thumbs-up"></i>
                                        <i className="fa fa-thumbs-up"></i>
                                        <i className="fa fa-thumbs-up"></i>
                                        <i className="fa fa-thumbs-up"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <h5>Role Specific</h5>
                                <div className="w-100 clearfix">
                                    <p className="float-left">JSP / Servlets</p>
                                    <div className="float-right">
                                        <i className="fa fa-thumbs-up"></i>
                                        <i className="fa fa-thumbs-up"></i>
                                        <i className="fa fa-thumbs-up"></i>
                                        <i className="fa fa-thumbs-up"></i>
                                    </div>
                                </div>
                                <div className="w-100 clearfix">
                                    <p className="float-left">Struts / Spring</p>
                                    <div className="float-right">
                                        <i className="fa fa-thumbs-up"></i>
                                        <i className="fa fa-thumbs-up"></i>
                                        <i className="fa fa-thumbs-up"></i>
                                        <i className="fa fa-thumbs-up"></i>
                                    </div>
                                </div>
                                <div className="w-100 clearfix">
                                    <p className="float-left">HTML / CSS</p>
                                    <div className="float-right">
                                        <i className="fa fa-thumbs-up"></i>
                                        <i className="fa fa-thumbs-up"></i>
                                        <i className="fa fa-thumbs-up"></i>
                                        <i className="fa fa-thumbs-up"></i>
                                    </div>
                                </div>
                                <div className="w-100 clearfix">
                                    <p className="float-left">XML / JSON</p>
                                    <div className="float-right">
                                        <i className="fa fa-thumbs-up"></i>
                                        <i className="fa fa-thumbs-up"></i>
                                        <i className="fa fa-thumbs-up"></i>
                                        <i className="fa fa-thumbs-up"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="row">
                            <h4>Score Card Feedback</h4>
                            <div className="user-comment">
                                <div className="user-comment-header clearfix">
                                    <h5>Commented by Srinivas Rao Desai</h5>
                                </div>
                                <p>@Hari Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur libero nulla, lobortis at nibh nec, lacinia porttitor turpis. Etiam viverra mauris nulla, at blandit dolor sollicitudin et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur libero nulla, lobortis at nibh nec, lacinia porttitor turpis. Etiam viverra mauris nulla, at blandit dolor sollicitudin et.</p>
                                <label>1 hour ago</label>
                            </div>
                            <div className="user-comment">
                                <div className="user-comment-header clearfix">
                                    <h5>Commented by Kutumbarao Meka</h5>
                                </div>
                                <p>@Hari Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur libero nulla, lobortis at nibh nec, lacinia porttitor turpis. Etiam viverra mauris nulla, at blandit dolor sollicitudin et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur libero nulla, lobortis at nibh nec, lacinia porttitor turpis. Etiam viverra mauris nulla, at blandit dolor sollicitudin et.</p>
                                <label>1 hour ago</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Candidatesassessment;