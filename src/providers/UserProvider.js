import React from 'react'

const UserContext = React.createContext();


export const UserConsumer = UserContext.Consumer;


class UserProvider extends React.Component {
    state = {
        email: 'ethan.mcneal@gmail.com',
        firstName: 'Ethan',
        lastName: 'McNeal',
        bio: 'Ethan is a gamer and is also super cool',
        friends: '10 billion'
       
    }
    render(){
    return(
        <UserContext.Provider value={this.state}>
            {this.props.children}
        </UserContext.Provider>

    )}
}

export default UserProvider