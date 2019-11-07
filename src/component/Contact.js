import {Map, Marker, GoogleApiWrapper,google} from 'google-maps-react';
import { Form, Row, Col ,Button} from 'react-bootstrap'
import axios from "axios"
import React, { Component } from 'react'

export class Contact extends Component {
state={
	time:''
}
componentDidMount(){
    
	axios({
	  method: 'GET',
	  url: "http://worldtimeapi.org/api/timezone/Asia/Riyadh"
	}).then(response => {
	  console.log(response.data.datetime) // take a look at what you get back!
	  this.setState({
		time:response.data.datetime
	  })
	})

  
}
	render() {
		console.log(this.props)
		return (
			<div className='bodycontact'>
				<div className="container">
					<div className="row">
						<div className="col-md-8 col-md-offset-2 m-auto">
							<h1>Contact Us</h1>
							<p class="hint-text">We'd love to hear from you, please drop us a line if you've any query.</p>

							<Form>

								<Row>
									<Col>
										<Form.Control placeholder="First name" />
									</Col>
									<Col>
										<Form.Control placeholder="Last name" />
									</Col>
								</Row>
								<Form.Group controlId="exampleForm.ControlInput1">
									<Form.Label style = {{marginTop:"20px;"}}></Form.Label>
									<Form.Control type="email" placeholder="Email address" />
								</Form.Group>

								<Form.Group controlId="exampleForm.ControlTextarea1">
									<Form.Label>Message</Form.Label>
									<Form.Control as="textarea" rows="8" />
									<Button className = 'btnsub'variant="outline-secondary" type="submit">
 Submit
  </Button>
  <p style={{marginTop :"20px"}}> local time :  {this.state.time} </p>
							<Map  google ={this.props.google}
								initialCenter={{
									lat: 21.5085,
									lng: 39.1741
								}}
						style={{width: '100%', height: '100%', position: 'relative'}}
    className={'map'}
    zoom={16}>
  <Marker
    name={"Sara's plants"}
	position={{lat: 21.5085, lng: 39.1741}} />


</Map>
							

								</Form.Group>
								
							</Form>
							
						</div>
					</div>
				</div>

			</div>
		)
	}
}

export default GoogleApiWrapper({
	apiKey: ("AIzaSyAa9o0x66RrkQ9_Naj_JPNQLZTAysqVw4o")
  })(Contact)