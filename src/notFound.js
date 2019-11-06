import React, { Component } from 'react'
import {Button,Alert, } from 'react-bootstrap'
import {Link} from 'react-router-dom'
export default class notFound extends Component {
    state = {
       show : true,
        setShow : true 
    }
    setShow = (val)=>
    {
        this.setState({
            show: val,
            setShow : val
        })
    }
    render() {
        return (
            <div className = 'notFound'>
                 <Alert show={this.state.show} variant="danger">
        <Alert.Heading>Oops !</Alert.Heading>
        <p>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
          lacinia odio sem nec elit. Cras mattis consectetur purus sit amet
          fermentum.
        </p>
        <hr />
        <div className="d-flex justify-content-end">
            <Link to ='/home'>
          <Button onClick={() => this.setShow(false)} variant="outline-danger">
            Close me ya'll!
          </Button>
          </Link>
        </div>
      </Alert>

      {/* {!this.state.show && <Button onClick={() => this.setShow(true)}>Show Alert</Button>} */}
   
            </div>
        )
    }
}
