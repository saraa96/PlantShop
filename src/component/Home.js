import React, { Component } from 'react'
import {
  Link,
  Route,
} from 'react-router-dom';
import Shop from './Shop'
import { Navbar,Nav,Container,Image , Col,Row , Button} from 'react-bootstrap'
import PDB from '../PDB'
export default class Home extends Component {
    state ={
        image1 : PDB.plants[18].image,
        image2 : PDB.plants[16].image

    }

    render() {
  
        return (
        <>
            <div class="background">
    
    <br/>
    <p className="Home">BRING NATURE <br/>TO YOUR HOME</p>
    </div>
    < div className = 'HomeDwon' >
        <p className = "new"> What’s New </p>
        <Container >
  <Row className="justify-content-md-center">
    <Col md={3}>
      <Image src={this.state.image1} fluid />
    </Col>
    <Col md={3}>
      <Image src={this.state.image2} fluid />
    </Col>
  </Row>
</Container>
<div className = 'shopbtn'>
       <Link to="/shop" >  <Button variant="outline-dark" size="xl" style = {{fontSize : "20px" , fontFamily: 'Courier New'}}  > SHOP NOW  </Button> </Link>  
</div>
</div>
</>
        )
    }
}
