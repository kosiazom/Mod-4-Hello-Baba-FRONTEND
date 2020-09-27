import React, { Component } from 'react';

const Search = props => {
   
    
        return ( <div className ="ui search"> 
                <div ui icon input>
                    <label>Search Products:</label>
                    <input onChange={(e) => props.handleSearch(e)}className="prompt"/>
                    <i className="search icon" />
                </div>
        </div> );
    
}
 
export default Search;