
import { useState } from "react"
import { Card, Icon, Image } from "semantic-ui-react"
import { UserConsumer } from "../providers/UserProvider"

const User = () =>{
    
        return(
            <UserConsumer>
                {value => (
                <Card>
        <Image src='/images/avatar/large/daniel.jpg' wrapped ui={false} />
        <Card.Content>
        <Card.Header>{value.firstName} {value.lastName}</Card.Header>
        <Card.Meta>{value.email}</Card.Meta>
        <Card.Description>
            {value.bio}
        </Card.Description>
        </Card.Content>
        <Card.Content extra>
        <a>
            <Icon name='user' />
            10 billion Friends
        </a>
        </Card.Content>
        
    </Card>
    
    )}
            </UserConsumer> 
            
            
        )
    }

export default User