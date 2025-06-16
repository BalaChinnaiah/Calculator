import React, { useState } from 'react'
import './App.css'

function App() {

  const [data,setData] = useState("");

  const calci = [ '9','8','7','+','6,','5','4','-','3','2','1','*','0','/'];

  const Calculate = ()=>{
    if(data!="")
    {
      try 
      {
        let res = eval(data);
        setData(res);
      }
      catch
      {
        setData("Error")
      }
    }
  }
  return (
    <>
    
    <center>

      <h1 className='heading'> Calculator </h1>

      <input type="text" placeholder='Ente the Input'  value={data} />

      <div className="calciGrid">
        {
        calci.map( (ele,index)=>(
          <button key={index} onClick={()=>setData(data+ele)}> {ele} </button>
        ))
      }
      </div>

     <div className="mainBtn">
       <button onClick={Calculate}> Calculate </button>
      <button onClick={()=>setData("")}> Reset  </button>
     </div>
    </center>
    
    </>
  )
}

export default App