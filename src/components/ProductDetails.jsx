import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import "semantic-ui-css/semantic.min.css"

class ProductDetails extends Component {
    // state = {  }
    state ={
        customers: []
    }
    componentDidMount(){
        fetch("http://localhost:3000/customers")
        .then(res => res.json())
        .then(customers => this.setState({
            customers
        }))
    }
    

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
            <div>
               <form class="ui form"><div class="field"><label>Leave A Review On This Product</label><input type="text" name="review" placeholder="Leave A Review"/></div><button class="ui button" type="submit">Submit</button></form>
          </div>
        
        <p>Reviews:{this.props.product.reviews.map(review => {
            let description = review.description
           let customer = this.state.customers.find(customer => customer.id === review.customer_id)
            let customerObj = {...customer}
          
            return <div class = "ui segment "><div>Username: {customerObj.username}   </div>Review: {description}</div>
            })}
             </p>

        </div> );
    }
    
    }


 
export default ProductDetails;