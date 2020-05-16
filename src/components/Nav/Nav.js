import React from 'react';
import "./Nav.css";

const Nav = (props) => {
    return (
        <div className="nav">
            <p className="user">{props.name} | {props.type}</p>
            <p>Homeroom: {props.homeroom}</p>
        </div>
    )
};

export default Nav;