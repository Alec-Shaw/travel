import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";


const PlaceDetails = ({ place, selected, refProp }) => {

    if (selected) refProp?.current?.scrollIntoView({ behavor: "smooth", block: "start" })

    return (


        <Card style={{ width: '25rem' }}>
            <Card.Img

                src={place.photo ? place.photo.images.large.url : 'https://incrussia.ru/wp-content/uploads/2018/10/iStock-694189032.jpg'}
                title={place.name}
            />
            <Card.Text>{place.name}</Card.Text>
            <Row>
                <Col sm={6}>
                    <ReactStars
                        count={5}
                        value={Number(place.rating)}
                        edit={false}
                        size={20}
                        activeColor="#ffd700"
                    /></Col>  <Col sm={6}>out of 34{place.num_reviews} </Col> </Row>

            <Card.Text>Price {place.price_level}</Card.Text>
            <Card.Text>Ranking {place.ranking}</Card.Text>
            <Card.Text>{place.address}</Card.Text>
        </Card>

    );
}
export default PlaceDetails;