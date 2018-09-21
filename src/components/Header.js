import React, { Component } from 'react';
import { Nav, NavItem, NavbarBrand, NavLink } from 'reactstrap';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/fontawesome-free-solid';
import SearchBar from './SearchBar.js'
import { Container, Row, Col } from 'reactstrap';
import logo from '../images/decidechilelogo.png';
import '../css/sidebar.css';

class Header extends Component {

    render() {
        return (
            <Row>
            <Col md={{ size: 8, offset: 2}}>
                <Nav>
                    <NavItem>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" onClick={this.props.toggleSidebar}>
                            <span className="navbar-toggler-icon">
                                <FontAwesomeIcon className='menu' icon={faBars}/>
                            </span>
                        </button>
                    </NavItem>
                    <NavbarBrand>
                        <img className="header-logo" src={logo} alt="decidechile"/>
                    </NavbarBrand>
                    <NavItem>
                        <SearchBar/>
                    </NavItem>
                </Nav>
            </Col>
                </Row>
        )
    }
}

export default Header;

Header.propTypes = {
  tabs: PropTypes.bool,
  pills: PropTypes.bool,
  card: PropTypes.bool,
  justified: PropTypes.bool,
  fill: PropTypes.bool,
  vertical: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  horizontal: PropTypes.string,
  navbar: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
  // pass in custom element to use
}