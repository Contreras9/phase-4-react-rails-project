import React, { useState } from "react";


function Signup({Login}) {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    function handleSubmit(e) {
        e.preventDefault()
        setErrors([])
        setIsLoading(true)
        fetch("/signup", {
            method:"POST",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify({
                username,
                password
            }),
        }).then(res => {
            setIsLoading(false)
            if (res.ok) {
                res.json().then(user => Login(user))
            } else {
                res.json().then(error => setErrors(error.errors))
            }
        })
    }

    return (
        
        <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    id="username"
                    autoComplete="off"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />
                <input
                    type="password" 
                    id="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    autoComplete="current-password"
                />
                <Button type="submit">{isLoading ? "Loading..." : "Sign Up"}</Button>
                {errors.map(error => (
                    <Error key={error}>{error}</Error>
                ))}
        </form>
    )
}

export default Signup