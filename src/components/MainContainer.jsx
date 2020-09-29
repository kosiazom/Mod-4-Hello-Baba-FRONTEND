import React from 'react';


import { Container } from 'semantic-ui-react'





const MainContainer = props => {
   
    
        return (
        <div>
            <Container>
               
               {props.mainContainerCondition(props.clickedCard)}
                {/* {props.cardClicked ? <ProductDetails product={props.cardClicked} /> :
                
                    
                <Categories />

                <Trending trendingProducts={props.trendingProducts}/>
                
                <Card.Group itemsPerRow={4}>
                
                    {props.displayProducts.map(product=>
                        <Products product={product} key={product.id} handleClickedCard={props.handleClickedCard}/>
                    )}
                </Card.Group> 
        )
                
                 } */}
                  
            </Container>
            
        </div> 
        );
    }

 
export default MainContainer;