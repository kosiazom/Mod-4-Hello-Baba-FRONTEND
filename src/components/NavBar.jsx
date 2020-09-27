import React, { Component } from 'react';;


class NavBar extends Component {
   
    render() { 
        // const { activeItem } = this.state
        return ( 
        <div>
             <div className={`ui inverted ${this.props.color} menu`} >
                <a className='item'>
                    <h2 className="ui header">
                        <i className={`${this.props.icon} icon`}></i>
                        <div className="content">
                            {this.props.text}
                        </div>
                    </h2>
                </a>
            </div> 
        </div>

    //     <Menu>
    //     <Menu.Item
        
    //       name='editorials'
          
    //     >
    //       Editorials
    //     </Menu.Item>

    //     <Menu.Item
    //       name='reviews'
          
    //     >
    //       Reviews
    //     </Menu.Item>

    //     <Menu.Item
    //       name='upcomingEvents'
          
    //     >
    //       Upcoming Events
    //     </Menu.Item>
    //   </Menu>
         );
    }
}
 
export default NavBar;





