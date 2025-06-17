import React, { useState } from 'react'
import Accordo from './Accordo'
import './App.css'

function App() {

  // If you need only Single Accordion is Open, and others should be closed

  const [openIndex, setOpenIndex] = useState(0); // Initially the first one is open

  // If you set useState(null) --> all will be closed By Default
  // If you Set any Number, That Particular Accordion is Opened

  const data = [
    {
      heading : "Heading 001 ",
      answer : "This is the reveaing answer you needed in the screen when you clicked on the question tag"
    },
    {
      heading : "Heading 002 ",
      answer : "This is the reveaing answer you needed in the screen when you clicked on the question tag"
    },
    {
      heading : "Heading 003 ",
      answer : "This is the reveaing answer you needed in the screen when you clicked on the question tag"
    }
  ]


  return (
    <>

      <h1> Accordion Example  </h1>

      {/* If you need multiple Accordions Need to be Open, Don't pass the OpenIndex and SetOpenIndex and Manage only the state variable in that 
      COmponent itself */}

      {
        data.map( (ele,index)=>(
          <Accordo value={ele} ind={index} openIndex={openIndex}
            setOpenIndex={setOpenIndex}/>
        ))
      }

    </>
  )
}

export default App