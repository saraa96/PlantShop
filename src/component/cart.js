
import {Table,Card,Col,Container,Row,Figure} from 'react-bootstrap'

import React, { Component } from 'react'

export default class cart extends Component {
    state = {
        select : this.props.select,
        remove : this.props.addtocart
    }
    Delet = (select)=> {
        const remove = this.props.addtocart.slice()
        const plantIndex = this.props.addtocart.indexOf(select);
        console.log(this.props.addtocart);
        this.props.addtocart.splice(plantIndex, 1) 
          console.log(`Removing ${select.name} from cart...`)
          this.setState({remove});
        }
       goTopypal = () =>{
          
         return
       }
    render() {
      
        let cart = this.props.addtocart.map(item => 
<Table  striped bordered hover responsive="lg">

<thead>
    <tr>
      <th>itme</th>
      <th>item Name</th>
      <th>item Price</th>
      <th>#</th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <td ><img  className = 'imgCart' src={item.image}/></td>
      <td>{item.name}</td>
      <td>{item.price}</td>
      <td> <button  onClick = {()=>this.Delet(this.state.select) }> Remove Item </button></td>
    </tr>
    </tbody>
  
  </Table>
  
  )
  
        return (
        
    
            <div className ='cartpage'>
            {cart}
            < div style = {{  border: " 0.9px black solid ", marginTop : "20px"}} > </div>
            <button style = {{backgroundColor : "#f7f5f0" , float :"right", border:'none' , margin:"0"}}  > <p style = {{fontSize:"20px", fontFamily:"Courier New" }} > Check Out </p> <a href = "https://www.paypal.com/sa/signin "> <img src = 'https://i.ibb.co/QQX15SC/buttons2.png' target="__blank"/> </a></button>
            
            </div> 
          
            

        )
    } 
    
}
