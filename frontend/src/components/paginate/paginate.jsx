import React from 'react';
import {Pagination} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Paginate = ({pages,page,isAdmin=false,keyword='',brandQuery=''}) => {
    return pages > 1 && (
        <Pagination>
            {[...Array(pages).keys()].map(x=>(
                <LinkContainer key={x+1} to={
                    !isAdmin ? `/page/${x+1}` : `/admin/productlist/${x+1}`,
                    !isAdmin ? brandQuery ?  `/brand/${brandQuery}/page/${x+1}` : `/page/${x+1}` :`/admin/productlist/${x+1}`,
                    !isAdmin ?   keyword ? `/category/${keyword}/page/${x+1}` : `/page/${x+1}` : `/admin/productlist/${x+1}`
                }>
                    <Pagination.Item active={x+1 === page}> {x+1} </Pagination.Item>
                </LinkContainer>
            ))}
        </Pagination>
    )
}
 //!isAdmin ?   keyword ? `/category/${keyword}/page/${x+1}` : `/page/${x+1}` : `/admin/productlist/${x+1}` ||!isAdmin ?   brandQuery ? `/brand/${brandQuery}/page/${x+1}` : `/page/${x+1}` : `/admin/productlist/${x+1}`

export default Paginate;