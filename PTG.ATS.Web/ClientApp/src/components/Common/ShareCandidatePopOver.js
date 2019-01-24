import React from 'react';
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';
import { Col, Row, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


class ShareCandidate extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      popoverOpen: false
    };
  }

  toggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    });
  }

  render() {
    return (
      <div>
        
        <Popover placement="bottom" className="popover-wrapper" isOpen={this.state.popoverOpen} target="Popover1" toggle={this.toggle}>
          <PopoverHeader>Share Candidate </PopoverHeader>
          <PopoverBody>
          <Form>
                        <Row form>
                            <Col md={12}>
                                <FormGroup>
                                    <Label for="name/email">Name/Email</Label>
                                    <Input type="text" name="name-email" id="name/email" placeholder="Enter a name or email address" />
                                    </FormGroup>
                            </Col>
                            <Col md={12}>
                                <FormGroup>
                                    <Label for="message">Message</Label>
                                    <Input type="textarea" name="message" id="message" placeholder="Add a message (optional)"/>
                             
                              </FormGroup>
                            </Col>
                        </Row>
                        <Button color="primary" className="float-right">Share</Button>{' '}

                    </Form>

          </PopoverBody>
        </Popover>
      </div>
    );
  }
}
export default ShareCandidate