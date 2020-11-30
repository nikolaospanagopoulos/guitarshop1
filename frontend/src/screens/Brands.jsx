import React from 'react';
import {Link} from 'react-router-dom'
import {Card,Col,Row} from 'react-bootstrap'
import dean from '../pictures/deanlogo.jpg'
import fender from '../pictures/fenderlogo.jpg'
import Ibanez from '../pictures/ibanezlogo.jpg'
import jackson from '../pictures/jacksonlogo.jpg'
import tama from '../pictures/tamalogo.png'
const Brands = () => {
    return (
        <Row xs={1} md={6} xl={2}>
        <Col className='align-items-stretch d-flex' >
        <Card className="my-3 p-3 rounded" >
            <Link to={`/brand/dean`}>
            <Card.Img src={dean} variant='top'/>
            </Link>
            <Card.Body>
            <Link to={`/brand/dean`}>
            <Card.Title as='div'>
                <strong>
                    <h2>Dean Guitars</h2> 
                </strong>
            </Card.Title>
            </Link>
            </Card.Body>
        </Card>
        </Col>


        <Col className='align-items-stretch d-flex'>
        <Card className="my-3 p-3 rounded">
            <Link to={`/brand/Fender`}>
            <Card.Img src={fender} variant='top'/>
            </Link>
            <Card.Body>
            <Link to={`/brand/Fender`}>
            <Card.Title as='div'>
                <strong>
                    <h2>Fender Guitars</h2> 
                </strong>
            </Card.Title>
            </Link>
            </Card.Body>
        </Card>
        </Col>


        <Col className='align-items-stretch d-flex'>
        <Card className="my-3 p-3 rounded">
            <Link to={`/brand/Ibanez`}>
            <Card.Img src={Ibanez} variant='top'/>
            </Link>
            <Card.Body>
            <Link to={`/brand/Ibanez`}>
            <Card.Title as='div'>
                <strong>
                    <h2>Ibanez Guitars</h2> 
                </strong>
            </Card.Title>
            </Link>
            </Card.Body>
        </Card>
        </Col>


        <Col className='align-items-stretch d-flex'>
        <Card className="my-3 p-3 rounded">
            <Link to={`/brand/Jackson`}>
            <Card.Img src={jackson} variant='top'/>
            </Link>
            <Card.Body>
            <Link to={`/brand/Jackson`}>
            <Card.Title as='div'>
                <strong>
                    <h2>Jackson Guitars</h2> 
                </strong>
            </Card.Title>
            </Link>
            </Card.Body>
        </Card>
        
        </Col>


        <Col className='align-items-stretch d-flex'>
        <Card className="my-3 p-3 rounded">
            <Link to={`/brand/tama`}>
            <Card.Img src={tama} variant='top'/>
            </Link>
            <Card.Body>
            <Link to={`/brand/tama`}>
            <Card.Title as='div'>
                <strong>
                    <h2>Tama Drums</h2> 
                </strong>
            </Card.Title>
            </Link>
            </Card.Body>
        </Card>
        
        </Col>
        </Row>
    );
}
 
export default Brands;