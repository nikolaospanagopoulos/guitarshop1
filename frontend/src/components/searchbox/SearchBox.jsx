import React from 'react';
import { useState } from 'react';
import {Form,Button} from 'react-bootstrap';
const SearchBox = ({history}) => {
    const [keyword,setKeyword] = useState('')



 
    const submitHandler = (e) => {
        e.preventDefault()
        if(keyword.trim()){
            history.push(`/search/${keyword}`)
        }else{
            history.push('/')
        }
    }
    const onKeyPress = (e) => {
        
        if(e.which === 13){
            submitHandler(e)
        }
    }
    return ( 
        <Form onSubmit={submitHandler} inline >
            <Form.Control type='text' name='q' onChange={e=>setKeyword(e.target.value)} placeholder='Search products...' className='mr-sm-2 ml-sm-5' onKeyPress={onKeyPress}>
            </Form.Control>
            <Button type='submit' variant='outline-success' className='p-2'>
                Search Products
            </Button>
        </Form>
     );
}
 
export default SearchBox;