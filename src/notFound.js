import React, { Component } from 'react'
import {Button,} from 'react-bootstrap'
import {Link} from 'react-router-dom'
export default class notFound extends Component {

    render() {
        return (
            <div className = 'about'>
               
      
        {/* <img className = 'notFoundimg' src = "https://image.freepik.com/free-photo/tropical-palm-leaf-pink-background_46208-267.jpg"/>  */}
        <div className ="notFound">
        {/* <h1>Oops !</h1> */}
        <p>
         404 | This page could not be found
        </p>
        <hr />
        <div className="d-flex justify-content-end">
            <Link to ='/home'>
          <Button variant="outline-danger">
            Go Back
          </Button>
          </Link>
        </div>
        </div>
  
  
     
   
            </div>
        )
    }
}
