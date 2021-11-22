import React from 'react';

function Lead() {
  // const [isChosen, setIsChosen] = react.useState(false)

  // const className = `lead__button ${isChosen ? `lead__button_choise-active` : ``}`

  // function buttonActivate(event) {
  //   setIsChosen(!isChosen)
  // }

  return( 
    <section className="lead"  >
      <h1 className="lead__main-title">WHERE GREAT IDEAS COME TO LIFE</h1>
      <p className="lead__main-subtitle">Passionate creative studio helping startups grow their business!</p>
      <div className="lead__buttons-list">

        <button className="lead__button lead__button_choise-active">01</button>
        <button className="lead__button">02</button>
        <button className="lead__button">03</button>  

        {/* <button className={className} onClick={buttonActivate} >01</button>
        <button className={className} onClick={buttonActivate} >02</button>
        <button className={className} onClick={buttonActivate} >03</button> */}

      </div>
      
    </section>
    

  )  

  


}



export default Lead