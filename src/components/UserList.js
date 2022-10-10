import { useState } from "react"
import UserDetails from "./UserDetails"

function UserList({ users }) {
    const [selectedId, setSelectedId] = useState(null)

    function handleSelected(id) {
        setSelectedId(id)
    }

    return <>
        {users.map(user =>
            <UserDetails
                key={user.id}
                selected={user.id === selectedId}
                handleSelected={handleSelected}
                {...user} />
        )}
    </>
}

export default UserList
