import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Home from './components/Home.js';
import Header from './components/Header';
import SideBar from './components/SideBar';
import AboutUs from './components/AboutUs.js';
import Footer from './components/Footer.js'
import {
    BrowserRouter as Router,
    Route,

} from 'react-router-dom';
import './css/base.css'

const routes = [
    {
        path: "/",
        exact: true,
        component: <Home/>,
    },
    {
        path: "/quienes-somos",
        exact: true,
        component: <AboutUs/>,
    }
];

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggle: false,
        };

        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        this.setState({
            toggle: !this.state.toggle,
        })
    }

    render() {

        return (
            <div>
                <Router>
                    <div className="App">
                        {routes.map((route, index) => route.exact ?
                            <Route exact key={index} path={route.path} render={(props) => (
                                <Container fluid id={"page-base"}>
                                    <Row>
                                        <Col sm="12">
                                            <Header {...props} toggleSidebar={this.toggleNav}/>
                                            <SideBar {...props} toggleSidebar={this.toggleNav}
                                                     isDisplayed={this.state.toggle}/>
                                            <Row>
                                                <Col md={{size: 8, offset: 2}} id="content"
                                                     className={this.state.toggle ? "cover" : ""}>
                                                    {route.component}
                                                </Col>
                                            </Row>
                                            <Footer/>
                                        </Col>
                                    </Row>
                                </Container>
                            )}/> : <Route exact key={index} path={route.path} render={(props) => (
                                <Container fluid id={"page-base"}>
                                    <Row>
                                        <Col sm="12">
                                            <Header {...props} toggleSidebar={this.toggleNav}/>
                                            <SideBar {...props} toggleSidebar={this.toggleNav}
                                                     isDisplayed={this.state.toggle}/>
                                            <Row>
                                                <Col md={{size: 8, offset: 2}} id="content"
                                                     className={this.state.toggle ? "cover" : ""}>
                                                    {route.component}
                                                </Col>
                                            </Row>
                                            <Footer/>
                                        </Col>
                                    </Row>
                                </Container>
                            )}/>
                        )}
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
