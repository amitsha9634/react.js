import React from 'react'
import UserContext from './UserContext'
import { Children } from 'react'

const UserContextProvider = () => {
    const [user, setUser] = React.useState(null)
    return (
        <UserContext.Provider value={{user, setUser}}>
            {Children}
        </UserContext.Provider>
    )
}

export default UserContextProvider
