import './UserDetails.css'

function UserDetails({ name, username, email, selected }) {
    return <div className={selected ? 'selected' : ''}>
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
