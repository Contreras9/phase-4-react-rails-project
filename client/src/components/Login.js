import React, {useState} from 'react'
import { useNavigate } from "react-router-dom";


function Login( {setUser} ) {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    const [error, setError] = useState(null)

    let navigate = useNavigate();

    function onSubmit(e) {
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
            }
          })
    }
    return (
        <div className='wrapper'>
            <span>CodeWar</span>
            <h2>Code</h2>
                <>
                    <form onSubmit={onSubmit} >
                            <input
                                type="text"
                                id="name"
                                autoComplete="off"
                                value={name}
                                onChange={e => setName(e.target.value)}
                            />
                            <input
                                type="password"
                                id="password"
                                autoComplete="off"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />
                            <input 
                            type='submit'
                            />
                        </form>
                    </>
        </div>
    )
}

export default Login;