import { useState } from "react"
import UserDetails from "./UserDetails"

function UserList({ users }) {
    const [selectedId, setSelectedId] = useState(null)

    return <>
        {users.map(user =>
            <UserDetails
                key={user.id}
                selected={user.id === selectedId}
                handleSelected={setSelectedId}
                {...user} />
        )}
    </>
}

export default UserList
