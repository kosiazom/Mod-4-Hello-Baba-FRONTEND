import React, {useState} from 'react'
import { Form } from 'semantic-ui-react'

const ReviewForm = () => {
// initiate a state 
 const [reviews, addReview] = useState(0)[0]
// array destructuring 
// useState(initial_value)=> [state, a_function_to_change_state]
const reviews = useState(0)[0]
const addReview = useState(0)[1]
    return <div>
        <Form></Form>
    </div>
}

export default ReviewForm