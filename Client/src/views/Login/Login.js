import React, {useState, useEffect} from 'react'
import './Login.scss'
import { useHistory } from "react-router";


function Login() {

    const history = useHistory();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    return (
        <div className="login">
            <div className="login_form_container">
                <form>
                    <label>Username/Email</label>
                    <input placeholder="username/emaiil" type="text" onChange={(event) => setEmail(event.target.value)}></input>
                    <br></br>
                    <label>Password</label>
                    <input placeholder="password" type="password" onChange={(event) => setPassword(event.target.value)}></input>
                    <button type="submit">Submit</button>
                </form>
            </div> 
        </div>
    )
}

export default Login;
