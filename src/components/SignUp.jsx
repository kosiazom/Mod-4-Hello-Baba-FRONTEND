import React, { Component } from 'react'


class SignUp extends Component {

    handleChange = () => {

        debugger
    }


    // state = {  }
    render() { 
        return ( 
        <div>
            <h2>Signup</h2>
            <form onSubmit={null}>
            <label>UserName: </label>
            <input onChange={(e) => this.handleChange(e)} name="username" type="text"/>
            <label>Password: </label>
            <input onChange={(e) => this.handleChange(e)} name="username" type="password"/>
            <input type="submit" />
            </form>
        </div>);
    }
}
 
export default SignUp;