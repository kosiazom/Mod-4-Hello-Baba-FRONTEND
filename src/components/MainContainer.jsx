import React, { Component } from 'react';
import Categories from './Categories';
import Products from './Products';
import Trending from './Trending';
import { Card } from 'semantic-ui-react'
import { Container } from 'semantic-ui-react'




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
            <Container>
                <Categories />  
                <Trending />
                <Card.Group itemsPerRow={3}>
                    {this.state.products.map(product=>
                        <Products product={product} />
                    )}
                </Card.Group> 
            </Container>
        </div> 
        );
    }
}
 
export default MainContainer;