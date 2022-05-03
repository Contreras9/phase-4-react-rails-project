import React, {useState} from 'react'
import { useNavigate } from "react-router-dom";
import "./Login.css";


function Login( {setUser} ) {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    const [error, setError] = useState(null)

    let navigate = useNavigate();

    function onClick(e) {
        e.preventDefault()
        const user = {
            name: name,
            password: password
        }

        fetch('http://localhost:4000/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(user)
        })
        .then(res => {
            if(res.ok){
              res.json()
              .then(user=>{
                setUser(user)
                navigate("/dashboard");
              })
            } else {
              res.json()
              .then(json => setError(json.error))
              alert("Username or Password incorrect");
            }
          })
    }
    return (
      <div className="back">
        <div className="background">
    </div>
    <form className="login-form">
        <h3>Login Here</h3>

        <label for="username">Username</label>
        <input value={name} onChange={e => setName(e.target.value) }type="text" placeholder="Username or Phone" id="username" />

        <label for="password">Password</label>
        <input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="Password" id="password" />

        <button onClick={onClick}>Log In</button>
    </form>
      </div>
    )
}

export default Login;