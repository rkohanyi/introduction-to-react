import './UserDetails.css'

function UserDetails({ id, name, username, email, selected, handleSelected }) {
    return <div className={selected ? 'selected' : ''} onClick={() => handleSelected(id)}>
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
