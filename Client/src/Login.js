import React, {useState, useEffect} from 'react'
import Header from './Header';
import './Login.css'
import { data } from "./SiteData";
import { useHistory } from "react-router";


function Login() {

    const history = useHistory();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = () => {
        if(email === data.user.email && password === data.user.password){
            history.push("/MainPage");
        }
    }


    return (
        <div className="login">
            <div className="login_form_container">
                <form>
                    <label>Username/Email</label>
                    <input placeholder="username/emaiil" type="text" onChange={(event) => setEmail(event.target.value)}></input>
                    <br></br>
                    <label>Password</label>
                    <input placeholder="password" type="password" onChange={(event) => setPassword(event.target.value)}></input>
                    <button type="submit" onClick={signIn}>Submit</button>
                </form>
            </div> 
        </div>
    )
}

export default Login;
