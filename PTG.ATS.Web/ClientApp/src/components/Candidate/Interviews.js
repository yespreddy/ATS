import React from "react";
import '../../styles/interview_candidate.css';
import { Accordion, AccordionItem, AccordionItemTitle, AccordionItemBody, } from 'react-accessible-accordion';
import AddDocument from '../Common/AddDocumentPopup';

class Interviews extends React.Component {

    render() {
        return (

            <div className="pb-5">           
            <Accordion>
                <AccordionItem expanded="true">
                    <AccordionItemTitle>
                        <div className="d-flex">
                            <div className="mr-auto">
                                <h5><span className="m-r-10"><i className="fa fa-chevron-right" aria-hidden="true"></i></span>Upcoming Interviews</h5>      
                            </div>
                            <div className="ml-auto">
                                <button type="button" className="btn btn-primary">Add interview</button>              
                            </div>
                        </div>
                    </AccordionItemTitle>
                    <AccordionItemBody>
                            <div className="accordListDown ">
                                <div className="d-flex">
                                    <div className="d-flex mr-auto">
                                        <p>Java Technical Discussion</p>
                                        <p><i className="fa fa-users"></i> <span className="ml-1">In-Person</span></p>
                                        <p><i className="fa fa-time"></i> <span className="ml-1">1 Hr</span></p>
                                    </div>
                                    <div className="d-flex ml-auto">
                                        <p><i class="fa fa-calendar" aria-hidden="true"></i></p>
                                        <p><i class="fa fa-trash-o" aria-hidden="true"></i></p>
                                    </div>
                                </div>    
                                <div className="">
                                    <div>
                                        <label>WHEN: </label> <span className="ml-3">September 12, 2018 @ 12:30 PM</span>                                       
                                    </div>
                                    <div>
                                        <label>WHO: </label> <span className="ml-3">Srinivas Rao Desai</span>                                        
                                    </div>
                                    <div>
                                        <label>WHERE: </label> <span className="ml-3">Glass Room, People Tech Hyderabad Campus</span>
                                    </div>
                                </div>
                            </div>
                    <AddDocument ref="popUp"/>
                    </AccordionItemBody>
                </AccordionItem>           
            </Accordion>
            <Accordion>
                <AccordionItem expanded="true">
                    <AccordionItemTitle>
                        <h5 className="float-left"><span className="m-r-10"><i className="fa fa-chevron-right" aria-hidden="true"></i></span>Completed Interviews</h5>                    
                    </AccordionItemTitle>
                    <AccordionItemBody>
                    <div className="accordListDown ">
                                <div className="d-flex">
                                    <div className="d-flex mr-auto">
                                        <p>Initial Telephone Screening</p>
                                        <p><i className="fa fa-users"></i> <span className="ml-1">Phone</span></p>
                                        <p><i className="fa fa-time"></i> <span className="ml-1">30 Mins</span></p>
                                    </div>
                                    <div className="d-flex ml-auto">
                                        <p><i class="fa fa-calendar" aria-hidden="true"></i></p>
                                        <p><i class="fa fa-trash-o" aria-hidden="true"></i></p>
                                    </div>
                                </div>    
                                <div className="d-flex ">
                                    <p><span>Passed the interview</span></p>
                                    <p><span>Srinivas Rao Desai</span></p>
                                    <p><span>September 12, 2018 @ 12:30 PM</span></p>
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

export default Interviews;
