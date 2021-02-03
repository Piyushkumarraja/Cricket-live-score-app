import React,{useState} from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import './Navbar.css'
const Navbar = () => {
    return (
      <Jumbotron fluid className="jumbo">
      <Container>
      <h2 className="piyush" style={{color:"white",fontFamily: " 'Days One', sans-serif",fontSize: "40px"}}> Cricket Updates 
      <span class="material-icons icon" style={{fontSize: "40px"}}>sports_cricket</span></h2>
      </Container>
    </Jumbotron>
  );
}
       
export default Navbar
