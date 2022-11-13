import React from "react";
//import Autocomplete from "react-google-autocomplete";
import { Container, Card } from "react-bootstrap";
import GoogleMapReact from 'google-map-react';
import ReactStars from "react-rating-stars-component";
import './styles.css'

const Map = ({ setCoordinates, setBounds, coordinates, places, setChildCliked }) => {



  return (
    <Container fluid className="bg-light p-3">

      <Card>
        <div style={{ height: '85vh', width: '100%' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: process.env.REACT_APP_API_KEY }}
            defaultCenter={coordinates}
            center={coordinates}
            defaultZoom={14}
            margin={[50, 50, 50, 50]}
            options={{ gestureHandling: "greedy" }}
            onChange={(e) => {
              setCoordinates({ lat: e.center.lat, lng: e.center.lng });
              setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw })
            }}
            onChildClick={(child) => setChildCliked(child)}
          >
            {places?.map((place, i) => (
              <div
                className="scale"
                lat={Number(place.latitude)}
                lng={Number(place.longitude)}
                key={i}
                style={{ cursor: 'pointer' }}

              >
                <Card style={{ width: '5rem', padding: 'inherit', cursor: 'pointer 4 1' }} className="">

                  <Card.Text>{place.name}</Card.Text>
                  <Card.Img
                    src={place.photo ? place.photo.images.large.url : 'https://incrussia.ru/wp-content/uploads/2018/10/iStock-694189032.jpg'}
                  />

                  <ReactStars
                    count={5}
                    value={Number(place.rating)}
                    edit={false}
                    size={10}
                    activeColor="#ffd700"
                  />

                </Card>
              </div>
            ))}
          </GoogleMapReact>
        </div>
      </Card>

    </Container>


  );
}
export default Map;