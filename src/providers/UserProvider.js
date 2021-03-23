import React, { useEffect, useState } from 'react'

export const UserContext = React.createContext();


export const UserConsumer = UserContext.Consumer;


const UserProvider = (props) => {

    useEffect(() => {
        getData()
    },[])
    
    
    const [user, setUser] = useState(null)

    const getData = () => {
    setUser({
        email: 'ethan.mcneal@gmail.com',
        firstName: 'Ethan',
        lastName: 'McNeal',
        bio: 'Ethan is a gamer and is also super cool',
       
    })}
    
    
    
    return(
        <UserContext.Provider value={{...user, updateUser: setUser}}>
            {props.children}
        </UserContext.Provider>

    )
}

export default UserProvider