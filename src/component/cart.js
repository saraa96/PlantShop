
import {Button,Card,Col,Container,Row,Figure} from 'react-bootstrap'

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
       
    render() {
        let cart = this.props.addtocart.map(item => 

        <Figure>
            <Figure.Image
              width={171}
              height={180}
              alt="171x180"
              src={item.image}
            />
            <Figure.Caption>
                <button  onClick = {()=>this.Delet(this.state.select) }></button>
           <h2>{item.name}</h2> 
           <p>{item.price}</p>
            </Figure.Caption>
          </Figure>)

        return (
            // <div className = 'shopPage'>
            // <div className="mt-3">
          
            <div className ='cartpage'>
            {cart}
            </div> 
          
            
    //         <div className="container">
    // <div className="row">
    // 	<div className="col-md-12"><h3>Remove cards demo</h3></div>
    // </div>
    // <ul className="row list-unstyled">
    //     <li className="col-md-4">
    //         <div className="thumbnail"> <a className="close" href="#">×</a>

    //             <img src="//placehold.it/100" className="img-responsive"/>
    //              <h3>Thumbnail label</h3>

    //             <p>Thumbnail caption...</p>
    //         </div>
    //     </li>
    //     </ul>
    //     </div>
        )
    } 
    
}
