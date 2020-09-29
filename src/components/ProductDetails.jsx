import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import "semantic-ui-css/semantic.min.css"

class ProductDetails extends Component {
    // state = {  }
    

    render() { 
       
        return ( 
        <div>
            
          
                <div onClick={()=> this.props.handleReturnClick() }class="ui animated button" tabindex="0">
                <div class="visible content">Back to Products</div>
                <div class="hidden content">
                    <i class="left arrow icon"></i>
                </div>
                </div>

                <div className="ui segment">
                   
                   <img class="ui centered large image" src= {this.props.product.product_img} />
                </div>
                <div className='content'>
                    <div className='name'>
                        {this.props.product.name}
                    </div>
                    <div className="price">
                            ${this.props.product.price}
                    </div>
                    <div className="description">
                            <p>{this.props.product.description}</p>
                    </div>
                    
                
            </div>
        
        <p>Reviews:{this.props.product.reviews}</p>

        </div> );
    }
    
    }

{/* <div class="ui segment">
  <img class="ui centered medium image" src="/images/wireframe/image.png">
  <p>TEXT HERE</p> */}
 
export default ProductDetails;