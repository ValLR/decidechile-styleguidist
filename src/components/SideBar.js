import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import '../css/sidebar.css';

const linkList = [
    {
        name: "Home",
        url: "/"
    },
    {
        name: "Sección Uno",
        url: "#"
    },
    {
        name: "Sección Dos",
        url: "#"
    },
    {
        name: "Quiénes Somos",
        url: "/quienes-somos"
    },
    {
        name: "Contacto",
        url: "#"
    }];

class SideBar extends Component {
    render() {
        let displayClass = this.props.isDisplayed ? "toggled" : "";

        return (
            <div>
                <div id="sidebar" className={displayClass}>
                    {/*<a href="javascript:void(0)" className={"closebtn"} onClick={this.props.toggleSidebar}>x</a>*/}
                    {linkList.map((link, index) => <Link key={index} className="nav-link"
                                                         to={link.url}>{link.name}</Link>)}
                </div>
            </div>
        )
    }
}

export default SideBar;

SideBar.propTypes = {
    isDisplayed: PropTypes.bool,
    toggleSidebar: PropTypes.func,
};