import React from 'react';
import {Link} from 'react-router-dom'
import {Card,Col,Row} from 'react-bootstrap'


const Categories = () => {
    return (
        <Row xs='2'>
        <Col className='align-items-stretch d-flex' >
        <Card className="my-3 p-3 rounded" >
            <Link to={`/category/bass`}>
            <Card.Img src='https://n1.sdlcdn.com/imgs/a/e/8/SDL423259603_1382446861_image1-4f997.jpg' variant='top'/>
            </Link>
            <Card.Body>
            <Link to={`/category/bass`}>
            <Card.Title as='div'>
                <strong>
                    <h2>BASSES</h2> 
                </strong>
            </Card.Title>
            </Link>
            </Card.Body>
        </Card>
        </Col>


        <Col className='align-items-stretch d-flex'>
        <Card className="my-3 p-3 rounded">
            <Link to={`/category/Guitars`}>
            <Card.Img src='https://cdn10.bigcommerce.com/s-ayzjl9/products/9069/images/60169/256840__10023.1492956867.1280.1280.jpg?c=2' variant='top'/>
            </Link>
            <Card.Body>
            <Link to={`/category/Guitars`}>
            <Card.Title as='div'>
                <strong>
                    <h2>Guitars</h2> 
                </strong>
            </Card.Title>
            </Link>
            </Card.Body>
        </Card>
        </Col>


        <Col className='align-items-stretch d-flex'>
        <Card className="my-3 p-3 rounded">
            <Link to={`/category/drums`}>
            <Card.Img src='https://www.bettermusic.com.au/media/catalog/product/cache/1/image/1224x/9df78eab33525d08d6e5fb8d27136e95/p/e/pen_tw42rzs_agjb_01.png' variant='top'/>
            </Link>
            <Card.Body>
            <Link to={`/category/drums`}>
            <Card.Title as='div'>
                <strong>
                    <h2>Drums</h2> 
                </strong>
            </Card.Title>
            </Link>
            </Card.Body>
        </Card>
        </Col>


        <Col className='align-items-stretch d-flex'>
        <Card className="my-3 p-3 rounded">
            <Link to={`/category/accessories`}>
            <Card.Img src='https://www.cranbournemusic.com.au/wp-content/uploads/2017/03/930004016631.jpg' variant='top'/>
            </Link>
            <Card.Body>
            <Link to={`/category/accessories`}>
            <Card.Title as='div'>
                <strong>
                    <h2>accessories</h2> 
                </strong>
            </Card.Title>
            </Link>
            </Card.Body>
        </Card>
        
        </Col>
        </Row>
    );
}
 
export default Categories;