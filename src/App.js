import React, { Component } from 'react'
import './App.css'
import Home from './component/Home'
import Contact from './component/Contact'
import about from'./component/About'
import Cart from'./component/cart'
import {Nav, Navbar} from 'react-bootstrap'
import {
  BrowserRouter,
  Switch,
  Route, NavLink
} from 'react-router-dom';

import notFound from './notFound'
import Shop from './component/Shop'
import PDB from './PDB'
export default class App extends Component {
state = {
      data : PDB.plants,
      addtocart : [],
      select:null,
   
    }

    handleFaveToggle =(select) =>{
      var temp = []
      temp = this.state.addtocart
      temp.push(select)
        this.setState({
          addtocart : temp,
          select : select
         }) 
    
        
    }
  
 


  render() {
    
    return (
<div className = 'body'> 
<Navbar className="justify-content-md-center" fixed={'top'} style = {{backgroundColor:"#f7f5f0" ,opacity:"1" }}>
        <Navbar.Brand href="/home" style ={{opacity:"1"}}>
          <img
            src="https://i.ibb.co/v4gS0QQ/llogo.png"
            width="200"
            height="80"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
      </Navbar>
<BrowserRouter>

<Navbar className="justify-content-md-center" fixed={'top'} style = {{backgroundColor:"#f7f5f0" , marginTop:"103px", fontSize:"20px" ,opacity: "1"} }>
        <Nav >
      <NavLink  className="nav-link" to="/home">Home</NavLink>
      <NavLink  className="nav-link" to="/about"> About</NavLink>
      <NavLink className="nav-link"to="/shop"> Shop</NavLink>
      <NavLink className="nav-link" to="/contact"> Contact us</NavLink>
      <div className = 'baag'>
      <NavLink className="nav-link" to="/cart"> <img className = "bag"src = 'https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../assets/preview/2013/png/iconmonstr-shopping-bag-4.png&r=0&g=0&b=0' /></NavLink>
      
      </div>
  </Nav>
    </Navbar>

<Switch>
<Route exact path='/' component={Home} />

    <Route exact path='/home' component={Home} />
    <Route path='/about' component = {about} />
    <Route path="/shop" exact render={(props) => <Shop {...props} data={this.state.data} handleFaveToggle = {this.handleFaveToggle} />} />
    <Route path='/contact' component = {Contact} />
            <Route path='/cart' exact render ={(props) =>    <Cart handleFaveToggle = {this.handleFaveToggle}  select = {this.state.select} addtocart = {this.state.addtocart} />}  />
            <Route path='/*' component = {notFound}  />
           
    </Switch>
    </BrowserRouter>
   
    <footer className ='footer'>

   Sara khaled © 2019
 
    </footer>
 
</div>

    )
  }
}
