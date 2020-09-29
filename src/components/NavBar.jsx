
import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Header, Segment } from 'semantic-ui-react'


const  NavBar = (props) => {

    // const logout = () => {
    //     localStorage.clear pass to the logout on click
    // }
    
   
    
        // const { activeItem } = this.state
        return ( 
        <Segment>
             <div className={`ui inverted ${props.color} menu`} >
                <a className='item'>
                <h2 className="ui header">
                <i className={`${props.icon} icon`} />
                <Header as='h2'>{props.text}</Header>
                </h2>
                </a>
                {/* <div className="item" floated='right'>
                    <h2 className="ui header" > */}
                            
                    
                <Header as={ Link } to="/signup" textAlign='center'>
                    SignUp
                </Header>
                  
                <Header as= { Link } to="/orders" textAlign='center'>
                    My Orders
                </Header><br/>   
                    {/* </h2>
                    </div> */}
                    {/* <div className="item">
                        <h2 className="ui header"> */}
                            {/* <div className="content "> */}
                <Header as={ Link } to="/login" textAlign='justified'>
                    Login
                </Header>
                            {/* </div> */}
                        {/* </h2>
                    </div> */}
            </div> 
        </Segment>

    
         );
    
}
 
export default NavBar;





