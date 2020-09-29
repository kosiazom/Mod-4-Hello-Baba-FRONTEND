import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import MainContainer from './components/MainContainer';
import Search from './components/Search';
import 'semantic-ui-css/semantic.min.css'
import ProductDetails from './components/ProductDetails';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from './components/Login'
import SignUp from './components/SignUp'

const product_url = "http://localhost:3000/products"
const order_url = "http://localhost:3000/orders"


class App extends React.Component {

  state = { 
    products:[],
    displayProducts:  [],
    showPage: {}
 }

 componentDidMount(){
  fetch(product_url)
  .then(res=> res.json())
  .then(products=> {
      // console.log(products)
      this.setState({
      products: products,
      displayProducts: products
  })
})
 }

  handleSearch = (e) => {
    let input = e.target.value.toLowerCase()
    let newDisplayProducts = this.state.products.filter(product => {
        return product.name.toLowerCase().includes(input)
    })
    
      this.setState({
        displayProducts:newDisplayProducts
    })  
}

//myOrders = (e) => {
 //debugger

//  fetch(order_url, {
//    method: "GET", 
//    headers: {
//      Authorization: `Bearer ${localStorage.token}`
//    }
//  })
//  .then( res => res.json)
//  .then( console.log )
//}
render() {
  return (
    <BrowserRouter>
    <div className="App">
      <NavBar color="blue" icon="cart" text="HelloBaba"/>
        <button onClick={(e) => this.myOrders(e)}>My Orders</button>
      <Switch>

      <Route path="/login" component={Login} />

      <Route path="/signup" component={SignUp} />

      </Switch>
      
      <Search handleSearch={this.handleSearch} />
      <br />
      <br />
      <br />
      <br />
      <br />
      <MainContainer displayProducts={this.state.displayProducts} 
      showProductDetails={this.showProductDetails}/>
    </div>
    </BrowserRouter>
  );
}
  
}

export default App;
