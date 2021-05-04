import React from "react";
import "./Photos.css"; 

export default function Photos (props) {
    if (props.photos) {
    return ( 
    <section className = "Photos">
        <div className = "row">
        {props.photos.map(function (photo, index) {
            return (
            <span className = "col-3" key = {index}>
            <img src={photo.src.landscape} 
            className = "img-fluid"  alt = "feet" width = "210"/>
            </span>
            );
        })}
    </div>
    </section> 
    );
} else {
    return null; 
}}