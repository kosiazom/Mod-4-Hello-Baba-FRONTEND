import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import MainContainer from './components/MainContainer';
import Search from './components/Search';
import 'semantic-ui-css/semantic.min.css'

const product_url = "http://localhost:3000/products"



class App extends React.Component {

  state = { 
    products:[],
    displayProducts: []
 }

 componentDidMount(){
  fetch(product_url)
  .then(res=> res.json())
  .then(products=> {
      // console.log(products)
      this.setState({
      products
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
}
render() {
  return (
    
    <div className="App">
      <NavBar color="blue" icon="cart" text="HelloBaba"/>
      <Search handleSearch={this.handleSearch} displayProducts={this.state.displayProducts}/>
      <MainContainer products={this.state.products}/>
    </div>
  );
}
  
}

export default App;
