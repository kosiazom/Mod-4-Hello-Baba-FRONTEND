import React, { Component } from 'react';
import Categories from './Categories';
import Products from './Products';
import Trending from './Trending';
import { Card } from 'semantic-ui-react'
import { Container } from 'semantic-ui-react'




const MainContainer = props => {
   
    
        return (
        <div>
            <Container>
                <Categories />  
                <Trending />
                <Card.Group itemsPerRow={4}>
                    {props.displayProducts.map(product=>
                        <Products product={product} key={product.id} 
                        showProductDetails={props.showProductDetails}/>
                    )}
                </Card.Group> 
            </Container>
            
        </div> 
        );
    }

 
export default MainContainer;