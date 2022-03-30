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
		
			<a className="site-logo" href="index.html">
				<img src="/img/logo.png" alt="" />
			</a>
			<div className="user-panel">
            {user ? <span onClick={logout}>Logout</span> : <Link to="/login">Login</Link>}
			</div>
	
			<div className="nav-switch">
				<i className="fa fa-bars"></i>
			</div>
			<nav className="main-menu">
				<ul>
					<li><a href="index.html">Home</a></li>
					<li><a href="review.html">Games</a></li>
					<li><a href="categories.html">Blog</a></li>
					<li><a href="community.html">Forums</a></li>
					<li><a href="contact.html">Contact</a></li>
				</ul>
			</nav>
		</div>
	</header>
    )
}

export default Navigation;