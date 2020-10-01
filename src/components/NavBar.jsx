
import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Header, Button} from 'semantic-ui-react'



const  NavBar = (props) => {

    const logout = () => {
        localStorage.clear()
    }
    
   
    
        
        return ( 
        <div>
             <div className={`ui inverted ${props.color} menu`} >
                <a className='item'>
                <h2 className="ui header">
                <i className={`${props.icon} icon`} />
                <Header as='h2'>{props.text}</Header>
                </h2>
                </a>
                <div className="item" >
                    <h2 className="ui header" floated='right' > 
                       <div className="content" >
                            <Link to="/signup" style={{color: "black"}}>Register</Link>
                       </div>     
                    </h2>
                </div> 
                <div className="item" >
                    <h2 className="ui header" style={{float: "right"}}> 
                       <div className="content" >
                            <Link to="/login" style={{color: "black"}}>Login</Link>
                       </div>     
                    </h2>
                </div> 
                <Button className="ui blue button" style={{color: "black"}} onClick={logout}>Logout</Button>
            </div> 
        </div>

    
         );
    
}
 
export default NavBar;





