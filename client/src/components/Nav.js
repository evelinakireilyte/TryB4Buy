import { removeToken, removeUser } from '../helpers/auth'
import { Link, useNavigate } from 'react-router-dom'

const Nav = ({ isLoggedIn, setIsLoggedIn }) => {
  const navigate = useNavigate()

  const handleLogout = () => {
    removeToken()
    removeUser()
    setIsLoggedIn(false)
    navigate('/')
  }
  return (
    <nav className="nav">
      <ul>
        <li>
          <Link to="/">
            <p>TryB4Buy</p>
          </Link>
        </li>
        <li>
          <Link to="/items">
            <p>Browse</p>
          </Link>
        </li>
        {isLoggedIn ? (
          <>
            <li>
              <Link to="/items/post">
              <p>Post</p>
              </Link>
            </li>
            <li>
              <p onClick={handleLogout}>Log Out</p>
            </li>
            <li>
              <Link to="/profile">
              <p>Profile</p>
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login"><p>Log In</p></Link>
            </li>
            <li>
              <Link to="/register"><p>Register</p></Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  )
}

export default Nav
