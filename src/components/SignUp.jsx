import React, { Component } from 'react'

const customerUrl = "http://localhost:3000/customers"

class SignUp extends Component {

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    goHome = () => {
        this.props.history.push("/")
     }

   register = (e) => {
       e.preventDefault()

       fetch(customerUrl, {
           method: "POST",
           headers: {
               "Content-Type": "application/json"
           },
           body: JSON.stringify({
               username: this.state.username,
               password: this.state.password
           })
       })
       .then( res => res.json() )
       .then( console.log )
   }
    render() { 
        return ( 
        <div>
            <h2>Please Register</h2>
            <form onSubmit={(e) => {this.register(e) 
                                    this.goHome()}}>
            <label>UserName: </label>
            <input onChange={(e) => this.handleChange(e)} name="username" type="text"/>
            <label>Password: </label>
            <input onChange={(e) => this.handleChange(e)} name="password" type="password"/>
            <input type="submit" />
            </form>
        </div>);
    }
}
 
export default SignUp;