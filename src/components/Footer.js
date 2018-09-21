import React, { Component } from 'react';
import logo from '../images/unholsterlogo.png'
import { Container, Row, Col } from 'reactstrap';

class Footer extends Component {
    render() {
        return(
            <footer className={"fixed-bottom"}>
                <Row>
                    <Col md={{ size: 8, offset: 2 }}>
                        <Row>
                            <Col md={{ size: 6, offset: 3 }} className={"footer-content"}>
                                <img className="footer-logo" src={logo} alt="logo"/>
                                <p>Lorem ipsum dolor sit amet, consectetuer</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </footer>
        )
    }
}

export default Footer;