import React from 'react';
import { Card } from 'semantic-ui-react';



const TrendingProducts = (props) => 
{
    const{name,price,product_img} = props.product
        return ( 
            
           
            <Card  onClick={(e) => props.handleClickedCard(props.product)} >
                <div  className="image">
                    <img style={{height: "400px", width: "300x"}} src={product_img}  />
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
 
export default TrendingProducts;