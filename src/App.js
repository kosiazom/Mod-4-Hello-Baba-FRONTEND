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
import TrendingProducts from './components/TrendingProducts'

const product_url = "http://localhost:3000/products"
// const order_url = "http://localhost:3000/orders"


class App extends React.Component {

state = 
  { 
    products:[],
    displayProducts: [],
    cardClicked: null,
    trendingProducts: [],
    carouselClicked:false
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
        if (this.state.cardClicked) {return( 
          <div>
            <ProductDetails product={this.state.cardClicked} handleReturnClick={this.handleReturnClick}/> 
          </div>)}
        else if (this.state.carouselClicked){return (
        <div> 
           <div onClick={()=> this.handleReturnClick() }class="ui animated button" tabindex="0">
            <div class="visible content">Back to Products</div>
            <div class="hidden content">
                <i class="left arrow icon"></i>
            </div>
            </div>
            <br/>
            <br/>
          <Card.Group itemsPerRow={2}>
           {this.state.trendingProducts.map(product=>
                  <TrendingProducts product={product} key={product.id} handleClickedCard={this.handleClickedCard} handleReturnClick={this.handleReturnClick}/>
              )}
            </Card.Group> 
        </div>)}
        else {
          return (
          <div>
            <Categories />

            <Trending trendingProducts={this.state.trendingProducts} handleCarouselClick={this.handleCarouselClick}/>
          
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


    handleCarouselClick = () => {
      
      this.setState ({ carouselClicked: true}) 
    }



handleReturnClick = (e) => {

  this.setState({
    cardClicked: null,
    carouselClicked:false
  })
}


render() {
  return (
    <BrowserRouter>
    <div className="App">
      {this.state.carouselClicked?<NavBar color= "orange" icon="cart" text="HelloBaba"/>:<NavBar color= "blue" icon="cart" text="HelloBaba"/>}
        
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
         carouselClicked={this.state.carouselClicked}
         products={this.state.products}
         displayProducts={this.state.displayProducts}
      />
    </div>
    </BrowserRouter>
  );
}
  
}

export default App;
