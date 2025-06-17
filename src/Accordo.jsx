function Accordo({value,ind, openIndex, setOpenIndex }) {

    const isOpen = ind === openIndex;

  const handleClick = () => {
    setOpenIndex(isOpen ? null : ind); // Close if already open, else open this
  };


  return (
    <>

    <div className="ques">
        <button onClick={handleClick}> {isOpen ? "Collapse" : "Expand "}  </button>
        <h2> {value.heading} </h2>
    </div>

    {
        isOpen && <div className="ans">
        <h4> {value.answer} </h4>
        </div>
    }
    
    </>
  )
}

export default Accordo