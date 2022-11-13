import React, {useState} from "react";
import { Navbar, Container, Nav, Card, Col } from "react-bootstrap";
import {Autocomplete} from "@react-google-maps/api";

const Header = ({setCoordinates}) => {

  const [autocomplete, setAutocomplete] = useState(null)

  const onLoad = (autoC) => setAutocomplete(autoC);

  const onPlaceChanged = () => {
    const lat = autocomplete.getPlace().geometry.location.lat();
    const lng = autocomplete.getPlace().geometry.location.lng();

    setCoordinates({ lat, lng })
  }

  return (
    <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        
         
         <Col md={6}>
           <Card className="p-3 mb-2">
             
               <span>
                 <b>Origin</b>
               </span>
               <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
            <div>
              <div>
                
              </div>
              <input placeholder="Search…"  />
            </div>
           </Autocomplete>
              </Card>
            </Col>
             </Container>
             </Navbar>
    );
}
export default Header;