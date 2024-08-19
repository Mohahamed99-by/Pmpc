import React from "react";
import ComponentC from "./ComponentC";

const ComponentB = ({etud}) => {
  return (
   <>
    <h1>Component B</h1>
    <ComponentC etud={etud}/>
   </>
  )

};

export default ComponentB;