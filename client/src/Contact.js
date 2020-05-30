import React from 'react';
import { Col, Row,Container,Jumbotron } from 'reactstrap';
import CForm from './CForm';
function Contact(props){
    
   

    return(
    <div className="contact">
        <Jumbotron fluid className="contact-jumbo">
        <Container fluid>
          <h1 className="display-3">Get In Touch</h1>
        </Container>
        </Jumbotron>
        <Row>
            <Col xs="12" md="6" className="contact-note">
                <h1>Note</h1>
                <p>I am currently looking for an entry level full stack web developer/software engineer role. I am also open to working on any exciting projects!</p>
            </Col>
            <Col xs="12" md="6">
                <CForm/>
            </Col>
        </Row>
    </div>
    )}

export default Contact;