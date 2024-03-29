import React from 'react'
import { withRouter,Link } from 'react-router-dom'

function Note(props) {   
    return (
        <div className="container">
                      <Link to="/">
                <button className="btn btn-danger">Logout</button>
              </Link>
            <ul className="list-group">
         <h1>  Notes List </h1>
         {props.notes.map((note)=>{
        return ( <li style={{color:'black'}} className="list-group-item" >
            <h3 className="container font-weight-bold">{note.tittle}</h3>
            <h5 className="container">{note.description}</h5> <br/>
            <button className="btn btn-danger" id={note.id} onClick={props.RemoveNote} >X </button>
            </li>)
       })}
            </ul>
            </div>
    )
}
export default withRouter(Note)
