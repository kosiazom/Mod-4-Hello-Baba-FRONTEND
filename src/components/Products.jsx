import React from 'react';
import { Card } from 'semantic-ui-react';
import ProductDetails from './ProductDetails'
import { Link } from 'react-router-dom'



const Products = (props) => 
{
    const{name,price,product_img} = props.product
        return ( 
       
            <Card onClick={(e) => props.handleClickedCard(props.product)} >
                <div className="image">
                    <img src={product_img}
                   style={{height: "275px", width: "265px"}}/>
                </div>
                <div className="content">
                    <div className="name">
                        {name}
                        <div className="price">
                            ${price}
                        </div>
                    </div>
                    
                </div>
                
                
            </Card>
           
            
        );
    
}
 
export default Products;