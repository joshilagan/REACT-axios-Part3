import React from 'react'
import { Parser } from "html-to-react";


const Cards = (props) => {
  // create a new Parser instance
  const parser = new Parser();
  // parse the html string and get a react element
  const summaryElement = parser.parse(props.summary);
  return (
    
      <div className="post" key={props.id}>
              <img src={props.pic} alt="show" className='imgCard'/>
              <h2 className='cardName'>{props.name}</h2>
              {/* render the react element */}
              <p className='cardSummary'>{summaryElement}</p>
      </div>
    
  )
}

export default Cards