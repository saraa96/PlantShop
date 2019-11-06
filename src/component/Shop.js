import React, { Component } from 'react'
import { Col, Row,Container, Card ,Button } from 'react-bootstrap'
import Showplants from './Showplant'
import Cart from './cart'
export default class Shop extends Component {

    state = {
        modalShow : false,
        setModalShow : false,
        select :null,
        cartImage: [],
        itemName : [],
itemPrice : []

    }

    setModalShow(value ,item){
        this.setState({
          setModalShow : value,
          modalShow : value
        })
        this.theselectName(item)
    }
    theselectName = (value)=>{
        this.setState({
            select : value

        })
    } 
      
      
    
    render() {
    
        
 let Shop = this.props.data.map(item => <Col md={4}> 
    <Card className="mb-3">
    <Card.Img className = 'top' variant="top"  src={item.image} />
 <Button className = 'middle' variant="secondary" onClick={() => this.setModalShow(true,item) }> Veiw lock </Button> 
 <div className = "itams">
 <p style = {{float:"left"}}>{item.name}</p>
 <p style = {{float:"right"}}>{item.price}</p> 
 </div>
    </Card>
 
   </Col>)
        return (
            <div className = 'shopPage'>
            <div className="mt-3">
            <Container>
              <Row>
               {Shop}
              </Row>
            </Container>  
           {this.state.select !== null && <Showplants select={this.state.select}   show={this.state.modalShow} 
  onHide={() => this.setModalShow(false,null)} 
  theselectName ={()=>this.theselectName} 
  addtocart = {this.props.addtocart} 
  handleFaveToggle = {this.props.handleFaveToggle}
  />}
  
   
           </div>
           </div>
        )
    }
}
