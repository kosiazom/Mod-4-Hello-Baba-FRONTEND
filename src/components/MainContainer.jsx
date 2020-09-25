import React, { Component } from 'react';
import Categories from './Categories';
import Products from './Products';
import Trending from './Trending';




class MainContainer extends Component {
    state = { 
        products:[]
     }

     componentDidMount(){
        fetch("http://localhost:3000/products")
        .then(res=> res.json())
        .then(products=> {
            // console.log(products)
            this.setState({
            products
        })
    })


     }
    render() { 
        return (
        <div>
            <Categories />  
            <Trending />
            <div className= "ui four column grid">
                <div className="row">
                    {this.state.products.map(product=>
                        <Products />
                        )}
                    
                </div>
            </div>
        </div> 
        );
    }
}
 
export default MainContainer;