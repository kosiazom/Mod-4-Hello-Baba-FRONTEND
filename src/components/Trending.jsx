import React from 'react';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "semantic-ui-css/semantic.min.css";



const Trending = (props) => 
{
    
    const trendingProducts = props.trendingProducts
    const trendingDivs = trendingProducts.map(trendingProduct => <img src={trendingProduct.product_img} style={{height: "400px", width: "300px"}} />)
    


                
        
    



return (
    
    <div>
                <Carousel>

                {trendingDivs}
                

                </Carousel>

               
            
            </div>
        ) 
    }
        

 
export default Trending;