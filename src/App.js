import React from 'react';
import './App.css';

import { Card } from 'semantic-ui-react'
import Categories from './components/Categories';
import Products from './components/Products';
import Trending from './components/Trending';
import NavBar from './components/NavBar';
import MainContainer from './components/MainContainer';
import Search from './components/Search';
import 'semantic-ui-css/semantic.min.css'
import ProductDetails from './components/ProductDetails';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from './components/Login'
import SignUp from './components/SignUp'

const product_url = "http://localhost:3000/products"
// const order_url = "http://localhost:3000/orders"


class App extends React.Component {

state = 
  { 
    products:[],
    displayProducts: [],
    cardClicked: null,
    trendingProducts: []
 }
 

componentDidMount()
{
  fetch(product_url)
  .then(res=> res.json())
  .then(products=> 
    {
      this.setState
      ({
        products, 
        displayProducts: products, 
      })
      let newTrendingProducts = this.state.products.filter(product => 
        {
          return product.name.toLowerCase().includes("costume")
        })
        this.setState(
          {
            trendingProducts:newTrendingProducts
          })
        })
        
      }


      mainContainerCondition = () => {

 //clicked card is coming undefined
        if (this.state.cardClicked) {return <div> <ProductDetails product={this.state.cardClicked} handleReturnClick={this.handleReturnClick}/> </div>}
        else {
          return (
          <div>
            <Categories />

            <Trending trendingProducts={this.state.trendingProducts}/>
          
            <Card.Group itemsPerRow={4}>
           {this.state.displayProducts.map(product=>
                  <Products product={product} key={product.id} handleClickedCard={this.handleClickedCard}/>
              )}
            </Card.Group> 
          </div>
)
 }
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

  handleClickedCard = (clickedCard) => {
    
    this.setState({
      cardClicked: clickedCard
    })   
    }

handleReturnClick = (e) => {
  this.setState({
    cardClicked: null
  })
}


render() {
  return (
    <BrowserRouter>
    <div className="App">
      <NavBar color="blue" icon="cart" text="HelloBaba"/>
        
      <Switch>
      {/* <Route /> */}
      <Route  path="/login" component={Login} />

      <Route  path="/signup" component={SignUp} />

      </Switch>
      
      <Search handleSearch={this.handleSearch} />
      <br />
      <br />
      <br />
      <br />
      <br />
      
      <MainContainer
      mainContainerCondition={this.mainContainerCondition}
      cardClicked={this.state.cardClicked}  
      handleClickedCard={this.handleClickedCard}
         trendingProducts={this.state.trendingProducts}
         products={this.state.products}
         displayProducts={this.state.displayProducts}
      />
    </div>
    </BrowserRouter>
  );
}
  
}

export default App;
