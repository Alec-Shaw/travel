import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './components/Header/Header';
import Map from './components/Map/Map';
import List from './components/List/List';
import { getPlacesData } from './api';

const App = () => {

  const [places, setPlaces] = useState([]);
  const [filteredPleaces, setFilteredPlaces] = useState([])
  const [coordinates, setCoordinates] = useState({ lat: 52.5065133, lng: 13.144551 });
  const [bounds, setBounds] = useState({});
  const [childClicked, setChildCliked] = useState(null);

  const [type, setType] = useState('restaurants');
  const [rating, setRating] = useState('');

  const [isLoading, setIsLoading] = useState(false);


  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
      setCoordinates({ lat: latitude, lng: longitude })
    })
  }, [])

  useEffect(() => {
    const filteredPleaces = places.filter((place) => place.rating > rating)

    setFilteredPlaces(filteredPleaces);
  }, [rating]);

  useEffect(() => {
    
      setIsLoading(true);

      getPlacesData(type, bounds.sw, bounds.ne)
        .then((data) => {
          setPlaces(data.filter((place) => place.name && place.num_reviews > 0));
          setFilteredPlaces([]);
          setIsLoading(false);
        })
    
  }, [type, coordinates, bounds])

  return (
    <div className='App'>

      <Header setCoordinates={setCoordinates} />
      <Container>
        <Row>
          <Col sm={4}>
            <List
              places={filteredPleaces.length ? filteredPleaces : places}
              childClicked={childClicked}
              isLoading={isLoading}
              type={type}
              setType={setType}
              rating={rating}
              setRating={setRating}
            /></Col>
          <Col sm={8}>
            <Map
              setCoordinates={setCoordinates}
              setBounds={setBounds}
              coordinates={coordinates}
              places={filteredPleaces.length ? filteredPleaces : places}
              setChildCliked={setChildCliked} /> </Col>
        </Row>

      </Container>
    </div>
  )
}

export default App;
