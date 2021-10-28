import React, { useState } from 'react'

const Login = (props) => {
    const [inputvals, setinputvals] = useState({ email: "", password: "" })

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch( process.env.REACT_APP_ANServer + "login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: inputvals.email, password: inputvals.password })
        });
        const json = await response.json()
        console.log(json);

        if (json.authtoken) {
            localStorage.setItem('token', json.authtoken);
            window.open("/", '_self');

        }
        else {
            alert(json.error);
        }
    }

    const onChange = (e) => {
        setinputvals({ ...inputvals, [e.target.name]: e.target.value })
    }

    return (
        <div className="container">
            <h1>login</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" value={inputvals.email} onChange={onChange} id="email" name="email" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" value={inputvals.password} onChange={onChange} name="password" id="password" />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Login;