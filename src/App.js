import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import MainContainer from './components/MainContainer';
import Search from './components/Search';
import 'semantic-ui-css/semantic.min.css'

const product_url = "http://localhost:3000/products"



class App extends React.Component {

state = 
  { 
    products:[],
    displayProducts: [],
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




handleSearch=(e)=> {
  let input = e.target.value.toLowerCase()
  let newDisplayProducts = this.state.products.filter(product => 
    {
      return product.name.toLowerCase().includes(input)
    })
  
  this.setState(
    {
      displayProducts:newDisplayProducts
    })

}
render() {
  return (
    
    <div className="App">
      <NavBar color="blue" icon="cart" text="HelloBaba"/>
      <Search handleSearch={this.handleSearch} />
      <br />
      <br />
      <br />
      <br />
      <br />
      <MainContainer
         trendingProducts={this.state.trendingProducts}
         products={this.state.products}
         displayProducts={this.state.displayProducts}
      />
    </div>
  );
}
  
}

export default App;
