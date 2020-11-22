import React,{useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux'
import {Row,Col} from 'react-bootstrap'
import Loader from '../components/loading/loader';
import Message from '../components/error/message';
import {Link} from 'react-router-dom';
import Product from '../components/Product/Product';
import Meta from '../components/metajs/Meta';
import {listProducts} from '../actions/productActions';
import Paginate from '../components/paginate/paginate';
import ProductsCarousel from '../components/productsCarousel/productsCarousel';
const Homescreen=({match})=>{
    const dispatch=useDispatch()
    const productList = useSelector(state=>state.productList)
    const {loading,error,products,page,pages} = productList
    const keyword = match.params.keyword
    const pageNumber = match.params.pageNumber || 1




useEffect(()=>{
    dispatch(listProducts(keyword,pageNumber))



},[dispatch,keyword,pageNumber])

    return(
        <div>
            <Meta/>
            {!keyword ? <ProductsCarousel/> : <Link to='/' className='btn btn-light'>Back</Link>}
            <h1>Latest products</h1>
    {loading ? (<Loader/>) : error ? (<Message variant={'danger'}>{error}</Message>) :   
    <div>
    <Row>
                {products.map(product=>(
                    <Col className='align-items-stretch d-flex' key={product._id}  sm={12} md={6} xl={3}>
                    <Product product={product}  />
                    </Col>
                ))}
            </Row>
            <Paginate pages={pages} page={page} keyword={keyword ? keyword : ''}/>
            </div>
            }
          
        </div>
    )
}

export default Homescreen 