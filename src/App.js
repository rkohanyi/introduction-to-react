import './App.css'
import UserList from './components/UserList'
import users from './data/Users'

function App() {
  return <UserList users={users} />
}

export default App
