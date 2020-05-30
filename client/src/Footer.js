import React from 'react';
import {Row, Col} from 'reactstrap';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
function Footer(){
    return(
        <div className="footer">
        <Row style={{'marginBottom':'8%'}}>
        <Col xs="12" md="4"><a className="nav-wrapper" href="/">Home</a></Col>   
        <Col xs="12" md="4"><a className="nav-wrapper" href="/about">About</a></Col>   
        <Col xs="12" md="4"><a className="nav-wrapper" href="/home">Contact</a></Col>          
        </Row>
        <a href='https://www.linkedin.com/in/blaine-mcmahon-2a8907140/'><LinkedInIcon/></a>
        <a href='https://github.com/B-Mahon'><GitHubIcon/></a>
        <p>Blaine McMahon, Boston MA</p>
        </div>
    )
}
export default Footer;