import React, {useState} from 'react'
import { useNavigate } from "react-router-dom";
import "./Login.css";


function Signup( {setUser} ) {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [age, setAge] = useState('')
    const [country, setCountry] = useState('')

    const [error, setError] = useState(null)

    let navigate = useNavigate();

    function onClick(e) {
        e.preventDefault()
        const user = {
            name: name,
            password: password,
            age: age,
            country: country
        }

        fetch('http://localhost:4000/coders', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(user)
        })
        .then(res => {
            if(res.ok){
              res.json()
              .then(user=>{
                navigate("/login");
              })
            } else {
              res.json()
              .then(json => {
                setError(json.error)
                alert("Username already in use");
              })
            }
          })
    }
    return (
      <div className="back">
        <div className="background">
    </div>
    <form className="signup-form">
        <h3>Signup Here</h3>

        <label for="username">Username</label>
        <input value={name} onChange={e => setName(e.target.value) }type="text" placeholder="Username or Phone" id="username" />

        <label for="password">Password</label>
        <input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="Password" id="password" />


        <label for="password">Age</label>
        <input value={age} onChange={e => setAge(e.target.value)} type="number" placeholder="Age" id="age" />

        <label for="password">Country</label>
        <input value={country} onChange={e => setCountry(e.target.value)} type="text" placeholder="Country" id="counrty" />

        <button onClick={onClick}>Signup</button>
    </form>
      </div>
    )
}

export default Signup;