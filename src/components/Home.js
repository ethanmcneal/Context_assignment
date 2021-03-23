import { useState } from "react"
import { Button } from "semantic-ui-react"

import User from "./User"
import UserForm from "./UserForm"

const Home = () => {
    const [showForm, setShowForm] = useState(false)
    return(
        <div>
            <h1>Home</h1>
            <h2>Users:</h2>
            <User />
            <Button onClick={() => {setShowForm(!showForm)}}>{ showForm ? 'Hide Form' : 'Update User'}</Button>
            {showForm && <UserForm />}
        </div>
    )
}

export default Home