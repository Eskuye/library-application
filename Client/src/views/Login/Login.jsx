import React, {useState, useEffect} from 'react'
import './Login.scss'
import { useHistory } from "react-router";
import axios from '../../api/Axios'
import endpoints from '../../api/Endpoints';
import store from '../../context/Store';


function Login() {

    const history = useHistory();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const signIn = (event) => {
        event.preventDefault()
        if(email.length < 1 || password.length < 1){
            
        }
        else{
            axios.post(endpoints.auth.login(), {
                email: email,
                password: password
            }).then(
                (response) => {
                    if(!response.data.response){
                        console.log('lol')
                    }
                    else{
                        const localUser = JSON.stringify(response.data.response.email);
                        const localToken = JSON.stringify(response.data.response.token);
                        localStorage.setItem('user', localUser);
                        localStorage.setItem('token', localToken);

                        console.log(localUser)
                        console.log(localToken)


                        store.dispatch({
                            type: 'SET_EMAIL',
                            email: response.data.response.email
                        });
                        store.dispatch({
                            type: 'SET_TOKEN',
                            token: response.data.response.token
                        });

                        console.log(store.getState())


                        history.push('/main-page/dashboard')
                    }
                }
            )
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
