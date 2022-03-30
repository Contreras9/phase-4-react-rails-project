import React, { useState } from 'react'



function LoginForm( {onLogin} ) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    function handleSubmit(e) {
        e.preventDefault()
        setIsLoading(true)
        fetch('/login',{
            method:"POST",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify({username, password})
        })
        .then(res => {
            setIsLoading(false)
            if (res.ok) {
                res.json().then(user => onLogin(user))
            } else {
                res.json().then(error => setErrors(error.errors))
            }
        })
    }
    return (
        <>
        </>
    )
}

export default LoginForm