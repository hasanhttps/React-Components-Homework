import React from "react";
import './useprofilestyle.css';

export const UseProfile = ({name, mail}) => {
    return <div className="container">
        <p className="nameTag">Username : {name}</p>
        <p className="mailTag">Email : {mail}</p>
    </div>;
}