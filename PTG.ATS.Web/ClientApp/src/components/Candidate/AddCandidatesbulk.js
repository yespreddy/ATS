import React, { Component } from 'react';
import '../../styles/Candidates.css';
import 'react-accessible-accordion/dist/fancy-example.css';
import Breadcrumbs from "../Common/breadcrumb";
import { Link } from "react-router-dom";
import { CustomInput, Form, FormGroup, Label } from 'reactstrap';

class AddCandidatesBulk extends Component { 
    constructor(props) {
        super(props);
        this.state = {
            tabIndex: 0,
        }
    }

    render() {
        return (
            <div>
               <div className="page-title">
                    <Breadcrumbs />
                    <div className="page-title-header row">
                        <div className="col-md-12">
                            <h3>Add Candidates</h3>
                        </div>
                    </div>
                </div>
              <div className="addcandidatesbulk"> 
              <div className="addcandidatesbulk-top"> <h2>
              Drag & Drop to upload resumes
                   </h2>
                   <p>Drop one or more .pdf, .doc or .docx files here and they will show up as candidates in this position </p>
                   <p> 
                   <Form className="col-md-5 addcandidatesbulk-top-upload">
                   <FormGroup>
          <Label for="exampleCustomFileBrowser"> you can browse and choose files </Label>
          <CustomInput type="file" id="exampleCustomFileBrowser" name="customFile" />
        </FormGroup>  
                       
                        </Form>
                       
                      </p>
                   
                     </div>
              <div className="addcandidatesbulk-bottom"> 
              <Link  to="/AddCandidate"> Other Options: Add resume manually
</Link>

              </div>
              
               </div>


            </div>
        );
    }
}

export default AddCandidatesBulk;
