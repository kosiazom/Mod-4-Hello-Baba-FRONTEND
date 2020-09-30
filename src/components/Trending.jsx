import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "semantic-ui-css/semantic.min.css";



const Trending = (props) => 
{
    
    const {trendingProduct} = props.trendingProducts
const trendingDivs = props.trendingProducts.map(trendingProduct => <img src={trendingProduct.product_img} style={{  height: "400px", width: "300px"}} />)
    


                
        
    



return (
    <div>
         
        {/* react-responsive-carousel */}
                    <Carousel  width = "500px" showThumbs={false} infiniteLoop={true}>

                    {trendingDivs}
                    

                    </Carousel>
             
       

    </div>          
            
           
        ) 
    }
        

 
export default Trending;