import React from 'react';
import styled from 'styled-components'

import Burger from './Burger'
const Nav = styled.nav`


height:55px;

display:flex;



`



const Menu = () => {
    return (
        <Nav>
    <Burger/>
    </Nav> 
    );
}
 
export default Menu;