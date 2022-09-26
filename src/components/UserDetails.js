function UserDetails({ name, username, email }) {
    return <div>
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
