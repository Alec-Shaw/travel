import React, { useState, useEffect, createRef } from "react";
import { Card, ListGroup, Form, Row, Col, Container } from "react-bootstrap";
import PlaceDetails from '../PlaceDetails/PlaceDetails';
import './styles.css'


const List = ({ places, childClicked, isLoading, type, setType, rating, setRating }) => {

  const [elRefs, setElRefs] = useState([]);

  useEffect(() => {
    const refs = Array(places?.length).fill().map((_, i) => elRefs[i] || createRef());

    setElRefs(refs);
  }, [places]);


  return (
    <>
      <Card style={{ width: '25rem', padding: 'inherit' }}>
        <Card.Body>
          <Card.Text>
            Food & Dining around you</Card.Text>
          <Container style={{ padding: 'revert-layer' }}><Row>
            <ListGroup horizontal>
              <Col md={7}>
                <Form.Select id="type" value={type} onChange={(e) => setType(e.target.value)} >
                  <option value="restaurants">Restaurants</option>
                  <option value="hotels">Hotels</option>
                  <option value="attractions">Attractions</option>
                </Form.Select>
              </Col>
              <Col md={{ span: 5, offset: 1 }}>
                <Form.Select as={Col} id="rating" value={rating} onChange={(e) => setRating(e.target.value)}>
                  <option value="">Rating</option>
                  <option value="3">Above 3.0</option>
                  <option value="4">Above 4.0</option>
                  <option value="5">Above 5.0</option>
                </Form.Select>
              </Col>

            </ListGroup>
          </Row></Container>
        </Card.Body>

      </Card>
      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        <>
          <Card style={{ width: '25rem', height: '450px', padding: 'inherit', overflow: 'scroll', overflowX: 'hidden' }}>

            <Card.Body>
              <Col>{places?.map((place, i) => (
                <Row ref={elRefs[i]} item key={i}>
                  <PlaceDetails
                    place={place}
                    selected={Number(childClicked) === i}
                    refProp={elRefs[i]} />
                </Row>
              ))}</Col>
            </Card.Body>



          </Card>
        </>
      )}
    </>
  );
}
export default List;