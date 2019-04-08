import React from "react";
import '../../styles/profile_candidate.css';
import { Accordion, AccordionItem, AccordionItemTitle, AccordionItemBody, } from 'react-accessible-accordion';
import AddDocument from '../Common/AddDocumentPopup';
class Profile extends React.Component {    

    render() {
        return (
            <div>           
            <Accordion>
                <AccordionItem expanded="true">
                    <AccordionItemTitle>
                        <h5><span className="m-r-10"><i className="fa fa-chevron-right" aria-hidden="true"></i></span>Resume</h5>                    
                    </AccordionItemTitle>
                    <AccordionItemBody>
                        <div className="row m-0">

                        </div>
                    <AddDocument ref="popUp"/>
                    </AccordionItemBody>
                </AccordionItem>           
            </Accordion>
            <Accordion>
                <AccordionItem expanded="true">
                    <AccordionItemTitle>
                        <h5 className="float-left"><span className="m-r-10"><i className="fa fa-chevron-right" aria-hidden="true"></i></span>Full Profile</h5>                    
                    </AccordionItemTitle>
                    <AccordionItemBody>
                        <div className="row m-0">
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 leftList">
                                <div>
                                    <label>Name</label>
                                    <p>Dheerendra Sathyanarayana</p>
                                </div>
                                <div>
                                    <label>Email</label>
                                    <p>dheerendrasnarayana@gmail.com</p>
                                </div>
                                <div>
                                    <label>Phone</label>
                                    <p>+91 99894 14134</p>
                                </div>
                                <div>
                                    <label>Address</label>
                                    <p>#6, Vangapalli Cplx, Ameerpet X roads,<br/>
                                        Hyderabad - 500073
                                    </p>
                                </div>
                                <div>
                                    <label>Highest Educational Qualification</label>
                                    <p>MBA</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 rightList">
                            <div>
                                    <label>Desired Salary</label>
                                    <p>7,25,000 INR</p>
                                </div>
                                <div>
                                    <label>Notice Period</label>
                                    <p>2 Months</p>
                                </div>
                                <div>
                                    <label>Willing to relocate?</label>
                                    <p>Yes</p>
                                </div>
                                <div>
                                    <label>Language Known</label>
                                    <p>English, Hindi, Telugu</p>
                                </div>
                            </div>
                        </div>
                    <AddDocument ref="popUp"/>
                    </AccordionItemBody>
                </AccordionItem>           
            </Accordion>
            </div>          
        );
    }
}

export default Profile;