import { useState } from "react"
import UserDetails from "./UserDetails"

function UserList({ users }) {
    const [selectedId, setSelectedId] = useState(null)

    return <ol>
        {users.map(user => <li key={user.id}>
            <UserDetails
                selected={user.id === selectedId}
                handleSelected={setSelectedId}
                {...user} />
        </li>)}
    </ol>
}

export default UserList
