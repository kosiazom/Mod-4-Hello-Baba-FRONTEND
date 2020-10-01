import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import "semantic-ui-css/semantic.min.css"

class ProductDetails extends Component {
    // state = {  }
    state ={
        customers: [],
        
    }
    componentDidMount(){
        fetch("http://localhost:3000/customers")
        .then(res => res.json())
        .then(customers => this.setState({
            customers
        }))
    }

    // getReviews = () => {

    //     fetch("http://localhost:3000/reviews", {
    //         method: "GET", 
    //         headers: { 
    //             // "Content-Type": "application/json",
    //             Authorization: `Bearer ${localStorage.token}`
    //         }
    //     })
    //     .then( res => res.json() )
    //     .then( console.log )
    // }

    handleSubmitReview = (e) => {
       e.preventDefault()
        
        const requestObj ={
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.token}`
            },
            body: JSON.stringify({
                customer_id: localStorage.id,
                product_id: this.props.product.id,
                description: e.target[0].value
            })
        }
        fetch("http://localhost:3000/reviews", requestObj)
        .then( res => res.json ())
        .then( console.log )
    }
    
    deleteReview = (review) => {
       
        const deleteReq ={
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${localStorage.token}`
            }
        }

        fetch(`http://localhost:3000/reviews/${review.id}`, deleteReq)
        .then( this.setState({
            customers: this.state.customers
        }) )
        
        
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
               <form class="ui form" onSubmit={(e) => this.handleSubmitReview(e)}>
                   <div class="field">
                       <label>Leave A Review On This Product</label>
                       <input type="text" name="review" placeholder="Leave A Review" />
                       </div>
                       <button class="ui button" type="submit" >Submit</button>
                       </form>
          </div>
        
        <p>Reviews:{this.props.product.reviews.map(review => {
            let description = review.description
           let customer = this.state.customers.find(customer => customer.id === review.customer_id)
            let customerObj = {...customer}
          
            return <div class="ui segment " >
                <div>Username: {customerObj.username}   
                </div>Review: {description}
                <Button onClick={(e) => this.deleteReview(review)}>Delete</Button> 
                </div>
                
            })}
             </p>

        </div> );
    }
    
    }


 
export default ProductDetails;