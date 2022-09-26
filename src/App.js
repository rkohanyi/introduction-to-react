import './App.css'
import UserDetails from './components/UserDetails'
import users from './data/Users'

function App() {
  return <UserDetails {...users[0]} />
}

export default App
