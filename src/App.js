import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import MainContainer from './components/MainContainer';
import Search from './components/Search';
import 'semantic-ui-css/semantic.min.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from './components/Login'

const product_url = "http://localhost:3000/products"



class App extends React.Component {

  state = { 
    products:[],
    displayProducts:  []
 }

 componentDidMount(){
  fetch(product_url)
  .then(res=> res.json())
  .then(products=> {
      // console.log(products)
      this.setState({
      products, displayProducts: products
  })
})
 }


  handleSearch=(e)=> {
    let input = e.target.value.toLowerCase()
    let newDisplayProducts = this.state.products.filter(product => {
        return product.name.toLowerCase().includes(input)
    })
    
      this.setState({
        displayProducts:newDisplayProducts
    })
    // }
    
}
render() {
  return (
    <BrowserRouter>
    <div className="App">
      <NavBar color="blue" icon="cart" text="HelloBaba"/>
   
      <Route path="/login" component={Login} />
    
      
      <Search handleSearch={this.handleSearch} />
      <br />
      <br />
      <br />
      <br />
      <br />
      <MainContainer displayProducts={this.state.displayProducts}/>

    </div>
    </BrowserRouter>
  );
}
  
}

export default App;
