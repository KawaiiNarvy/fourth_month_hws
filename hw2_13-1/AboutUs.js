import React from "react";

function AboutUs(props) {
    return (
        <div>
            <h1> About Us</h1>
            {props.product}
            ============
            {props.text}
        </div>
    );
}

export default AboutUs;
