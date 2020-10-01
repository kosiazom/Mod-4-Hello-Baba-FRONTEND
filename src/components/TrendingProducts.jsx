import React from 'react';
import { Card } from 'semantic-ui-react';



const TrendingProducts = (props) => 
{
    const{name,price,product_img} = props.product
        return ( 
            <div>
           
            <Card onClick={(e) => props.handleClickedCard(props.product)} >
                <div className="image">
                    <img src={product_img}
                   style={{height: "500px", width: "400x"}}
                />
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
          
            </div>
        );
}
 
export default TrendingProducts;