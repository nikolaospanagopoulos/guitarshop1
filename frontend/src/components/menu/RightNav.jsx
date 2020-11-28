import React from 'react';
import styled from 'styled-components'
import {Link} from 'react-router-dom'
const Ul = styled.ul`
    z-index:99;
    list-style:none;
    display:flex;
    flex-flow:row nowrap;
    flex-flow: column nowrap;
    background-color: tomato;
    position:fixed;
    transform:${({open}) => open? 'translateX(0)' : 'translateX(100%)'};
    
    top:0;
    right:0;
    height:100vh;
    width:300px;
    padding-top:3.5rem;
    transition:transform 0.3s ease-in-out;
li{
    padding:18px 10px;
}

@media (max-width: 768px){
   
    

    
    li{
        color:#fff;
    }
}


`

const RightNav = ({setOpen,open}) => {


    return (
        <Ul open={open}>
        <li><Link to='/'onClick={()=>setOpen(!open)}>Home</Link></li>
        <li>Products</li>
        <li><Link to='/categories'onClick={()=>setOpen(!open)}>Categories</Link></li>
        <li>Sign In</li>
        <li>Register</li>
        <li>About</li>
    </Ul> 
    );
}
 
export default RightNav;