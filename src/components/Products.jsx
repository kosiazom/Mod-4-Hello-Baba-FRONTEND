import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
const Products = (props) => 
{
    const{name,price,product_img} = props.product
        return ( 
        <div>
            <Card >
                <div className="image">
                    <img src={product_img}/>
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
            
        </div> );
    
}
 
export default Products;