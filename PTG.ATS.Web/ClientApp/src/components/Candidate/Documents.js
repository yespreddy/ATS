import React, { Component } from 'react';
import '../../styles/Candidates.css';
import Candidatestable from "../Common/AllCandidatesTable";
import 'react-accessible-accordion/dist/fancy-example.css';
import '../../styles/CandiadatesDocument.css';
import { Accordion, AccordionItem, AccordionItemTitle, AccordionItemBody, } from 'react-accessible-accordion';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Col, Row, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import AddDocument from '../Common/AddDocumentPopup';


class Documents extends Component {
    constructor(props) {
        super(props);
        this.state = {
           tabindex:0
          };             
        }              
      
    render() { 
        return ( 
            <div>
           
            <Accordion>
            <AccordionItem expanded="true">
                <AccordionItemTitle>
                    <h5 className="float-left"><span className="m-r-10"><i className="fa fa-chevron-right" aria-hidden="true"></i></span>Documents</h5>
                    
                </AccordionItemTitle>
                <AccordionItemBody>
                    <div className="float-right m-b-20">
                    <button type="button" className="btn btn-outline-primary m-r-10">Send eDocument</button>
                    <button type="button" className="btn btn-primary"  onClick={()=>{this.refs.popUp.toggle();}} >Add Document</button>

                    </div>
                   <AddDocument ref="popUp"/>
                  
                    <Candidatestable/> 
                   
                </AccordionItemBody>
            </AccordionItem>

            <AccordionItem expanded="true">
                <AccordionItemTitle>
                <h5 className="float-left"><span className="m-r-10"><i className="fa fa-chevron-right" aria-hidden="true"></i></span>Offers</h5>
                </AccordionItemTitle>
                <AccordionItemBody>
                <div className="float-right m-b-20">
                    <button type="button" className="btn btn-primary">Add Offer</button>

                    </div>
                    <Candidatestable/> 
                </AccordionItemBody>
            </AccordionItem>
           
        </Accordion>
        </div>
        );
    }
}
 
export default Documents;
