import './UserDetails.css'

function UserDetails({ id, name, username, email, selected, handleSelected }) {
    return <div className={selected ? 'selected' : ''}>
        <h2>
            <span>{name}</span>
        </h2>
        <ul>
            <li>Username: {username}</li>
            <li>Email: {email}</li>
        </ul>
        <button onClick={() => handleSelected(id)}>Select</button>
    </div>
}

export default UserDetails
