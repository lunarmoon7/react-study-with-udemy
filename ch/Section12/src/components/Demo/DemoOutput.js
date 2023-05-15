import React from "react";

const DemoOutput = (props) => {
    console.log("DEMOOUTPUT RUNNING!");
    return <p>{props.show ? 'This is new!' : ''}</p>
}

export default DemoOutput;