import React, { Component } from 'react';
import Categories from './Categories';
import Products from './Products';
import Trending from './Trending';




const MainContainer = props => {
   
     
   

   
        return (
        <div>
            <Categories />  
            <Trending />
            <div className= "ui four column grid">
                <div className="row">
                    {props.products.map(product=>
                        <Products key={product.id}/>
                        )}
                    
                </div>
            </div>
        </div> 
        );
    }

 
export default MainContainer;