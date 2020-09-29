import React from 'react';
import Categories from './Categories';
import Products from './Products';
import Trending from './Trending';
import { Card } from 'semantic-ui-react'
import { Container } from 'semantic-ui-react'
import ProductDetails from './ProductDetails';




const MainContainer = props => {
   
    
        return (
        <div>
            <Container>
                <Categories />  
                <Trending />
                {props.cardClicked ? <ProductDetails product={props.cardClicked} /> :

                <Card.Group itemsPerRow={4}>
                
                    {props.displayProducts.map(product=>
                        <Products product={product} key={product.id} handleClickedCard={props.handleClickedCard}/>
                    )}
                </Card.Group> 
                 }
                  
            </Container>
            
        </div> 
        );
    }

 
export default MainContainer;