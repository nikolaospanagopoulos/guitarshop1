import React from "react";
import { Container } from "react-bootstrap";
import {BrowserRouter as Router, Route } from 'react-router-dom';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Homescreen from './screens/Homescreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreens';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import UserListScreen from './screens/UserListScreen';
import userEditScreen from './screens/userEditScreen';
import ProductList from './screens/ProductList';
import ProductEditScreen from './screens/ProductEditScreen';
import OrderListScreen from './screens/OrderListScreen';
import Categories from './screens/Categories';
import About from './screens/About';
import Brands from './screens/Brands';
const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
        < Route path='/order/:id' component={OrderScreen} />
        < Route path='/payment' component={PaymentScreen} />
        < Route path='/about' component={About} />
        < Route path='/brands' component={Brands} />
        < Route path='/shipping' component={ShippingScreen} /> 
        < Route path='/placeorder' component={PlaceOrderScreen} />
        < Route path='/login' component={LoginScreen} />
        < Route path='/register' component={RegisterScreen} />
        < Route path='/profile' component={ProfileScreen} />
        < Route path='/categories' component={Categories} />
        < Route path='/product/:id' component={ProductScreen} />
        < Route path='/cart/:id?' component={CartScreen} />
        < Route path='/admin/userlist' component={UserListScreen} /> 
        < Route path='/admin/user/:id/edit' component={userEditScreen} />
        < Route path='/admin/productlist' exact component={ProductList} />
        < Route path='/admin/productlist/:pageNumber' component={ProductList} exact/> 
        < Route path='/admin/product/:id/edit' component={ProductEditScreen} />
        < Route path='/admin/orderlist' component={OrderListScreen} />
        
        
        <Route path='/brand/:brandQuery' component={Homescreen} exact/>
        <Route path='/category/:keyword' component={Homescreen} exact />
        <Route path='/page/:pageNumber' component={Homescreen} exact />
        <Route
            path='/brand/:brandQuery/page/:pageNumber'
            component={Homescreen}
            exact   
          />
          <Route
            path='/category/:keyword/page/:pageNumber'
            component={Homescreen}
            exact   
          />
          
          <Route path='/' component={Homescreen} exact />
        
        </Container>
      </main> 
      <Footer />
    </Router>
  );
};

export default App;
