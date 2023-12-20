import React from 'react'
import { Parser } from "html-to-react";

const Cards = (props) => {
  // create a new Parser instance
  const parser = new Parser();
  // parse the html string and get a react element
  const summaryElement = parser.parse(props.summary);
  return (
    
      <div className="post" key={props.id}>
              <h2>{props.name}</h2>
              {/* render the react element */}
              <p>{summaryElement}</p>
              <img src={props.pic} alt="" />
      </div>
    
  )
}

export default Cards