import React from 'react'
import "./Projects.css"
function Projects() {
  
  return (
    <div className="container">
      <div className="card" >
        <h1>Citytour - SPA</h1>
        <p>This is a city guide Single Page Application 
          and it is used to guide locals and the crazy travelers.
          <br></br>
          <a href='https://sasikumaryanapu.github.io/citytour/'>citytour</a></p>
      </div>
      <div  className="card">
        <h1>NoteBook - RestApi</h1>
        <p>RestAPI it is built using nodejs environment and it's packages like expressjs amd mongoose </p>
      </div>
    </div>
  )
}

export default Projects