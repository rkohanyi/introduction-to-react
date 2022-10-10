import { useState } from "react"
import './UserDetails.css'

function UserDetails({ name, username, email }) {
    const [selected, setSelected] = useState(false)

    function handleSelected() {
        setSelected(!selected)
    }

    return <div className={selected ? 'selected': ''} onClick={handleSelected}>
        <h2>
            <span>{name}</span>
        </h2>
        <ul>
            <li>Username: {username}</li>
            <li>Email: {email}</li>
        </ul>
    </div>
}

export default UserDetails
