import { useContext, useState } from "react"
import { Button, Form, Input, TextArea } from "semantic-ui-react"
import { UserContext } from "../providers/UserProvider"


const UserForm = () => {
    const {firstName, lastName, email, bio, updateUser} = useContext(UserContext)
    const [person, setPerson] = useState({firstName, lastName, email, bio})
    const handleChange = (e, { name, value }) => {
        
        setPerson({
            ...person,
            [name]: value
        })
    }
    
    const handleSubmit = (e) =>{
        updateUser({...person})
    }
    return (
        
        <div>
        <Form onSubmit={handleSubmit}> 
            First Name
            <Form.Input 
            name='firstName'
            value={person.firstName}
            onChange={handleChange}/>
            
            Last Name
            <Form.Input 
            name='lastName'
            value={person.lastName}
            onChange={handleChange}/>
            email
            <Form.Input 
            name='email'
            value={person.email}
            onChange={handleChange}/>
            Bio
            <Form.TextArea 
            name='bio'
            value={person.bio}
            onChange={handleChange}/>
            <Button type='submit'>Update</Button>
        </Form>
        </div>)
        
    
}

export default UserForm