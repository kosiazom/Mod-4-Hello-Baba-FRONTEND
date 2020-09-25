import React, { Component } from 'react';
import Categories from './Categories';
import Products from './Products';
import Trending from './Trending';



class MainContainer extends Component {
    state = {  }
    render() { 
        return (<div>
          <Categories />  
          <Trending />
         <Products />
        </div> );
    }
}
 
export default MainContainer;