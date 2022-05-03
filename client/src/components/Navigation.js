import {Link} from "react-router-dom"

function Navigation({ setUser, user}) {
    console.log(user)
    const logout = () => {
        fetch('http://localhost:4000/logout', {
            method:'DELETE'
        })
        .then(() => {
            setUser(null)
        })
    }

    return (

	<header className="header-section">
		<div className="container">
		
			<Link className="site-logo" to="/">
				<img src="https://flatironschool.com/wp-content/themes/flatiron-school/assets/images/logo-white.svg" alt="" />
			</Link>
			<div className="user-panel">
            {user ? <span onClick={logout}>Logout</span> : <Link to="/login">Login</Link>}
			</div>
	
			<div className="nav-switch">
				<i className="fa fa-bars"></i>
			</div>
			<nav className="main-menu">
				<ul>
					<li><Link to="/">Home</Link></li>
					{ user ? <li><Link to="/dashboard">Dashboard</Link></li> : <li><Link to="/signup">Signup</Link></li> }
				</ul>
			</nav>
		</div>
	</header>
    )
}

export default Navigation;