
import {Modal,Button,Carousel,Accordion,Card} from 'react-bootstrap'
import React, { Component } from 'react'
import Cart from './cart'
import '../App.css'
export default class Showplant extends Component {

state = {
  select : this.props.select,
  lasCart : []

}



    render() {
        return (
            <div className ='con'>
           <Modal
          {...this.props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
            <h4> {this.props.select.name}</h4>  
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Carousel  className="imgcar"  interval={1500}>
  <Carousel.Item > 
  <img 
      className="imgcar"
      src= {this.props.select.image}
      alt="First slide"
    />

  </Carousel.Item > 
  <Carousel.Item>
    <img  className="imgcar"
      src={this.props.select.backdimage}
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>
<div className = "carph">
<div className = 'd-flex justify-content-between'>
<h1 >{this.props.select.fullname} </h1>
<br/>
 <h1 >{this.props.select.price}</h1>
</div>
<br/>

      <p >{this.props.select.desc}</p>
      </div>
<div className='.accordion'>
    <Accordion defaultActiveKey="1">
  <Card style ={{border:"hidden"}}>

    <Accordion.Toggle as={Button} className='accordionbtn' variant="secondary" style={{width:"150px"}} eventKey="0"
   onClick = {() => { this.props.handleFaveToggle(this.props.select) } }  >
      add to Cart
    </Accordion.Toggle>
  
    <Accordion.Collapse eventKey="0">

      <Card.Body style={{marginLeft : "160px" , fontFamily:"Times New Roman"}} className='accordionbtn' > 
      item added 
            </Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>
</div>
          </Modal.Body>
   
          <Modal.Footer>
            <Button onClick={this.props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
  
        {/* { this.props.addtocart.length !== 0 &&   <Cart addtocart = {this.props.addtocart} />}  */}


        </div>
        
        )
    }
}
