
import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Header, Segment } from 'semantic-ui-react'


class NavBar extends Component {
   
    render() { 
        // const { activeItem } = this.state
        return ( 
        <Segment>
             <div className={`ui inverted ${this.props.color} menu`} >
                <a className='item'>
                <h2 className="ui header">
                <i className={`${this.props.icon} icon`} />
                <Header as='h2'>{this.props.text}</Header>
                </h2>
                </a>
                {/* <div className="item" floated='right'>
                    <h2 className="ui header" > */}
                            
                    <Header as={ Link } to="/signup" textAlign='right'>SignUp</Header>
                            
                    {/* </h2>
                    </div> */}
                    {/* <div className="item">
                        <h2 className="ui header"> */}
                            <div className="content ">
                                <Header as={ Link } to="/login" textAlign='center'>Login</Header>
                            </div>
                        {/* </h2>
                    </div> */}
            </div> 
        </Segment>

    
         );
    }
}
 
export default NavBar;





