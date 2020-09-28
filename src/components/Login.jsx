import React, { Component } from 'react'

class Login extends Component {
    

    handleFormChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
      
    }

    loginHandle = (e) => {
        e.preventDefault()
    }


render() {
    return (
            <div>
                <h3>Please Login</h3>
                <form onSubmit={(e) => this.loginHandle(e)}>
                
                <label>Username</label>
                <input onChange={(e) => this.handleFormChange(e)} name="username" type="text"/>
                
                <label>Password</label>
                <input onChange={(e) => this.handleFormChange(e)} name="password" type="password" />

                <input type="submit" />
                </form>
            </div>
        ) 
       }
}

export default Login