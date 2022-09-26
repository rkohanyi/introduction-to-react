import UserDetails from "./UserDetails"

function UserList({ users }) {
    return <ol>
        {users.map(user => <li key={user.id}>
            <UserDetails {...user} />
        </li>)}
    </ol>
}

export default UserList
