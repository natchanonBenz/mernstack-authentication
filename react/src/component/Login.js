import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import axios from 'axios';
import logo from '../image/mern.png';
function Login() {
    let history = useHistory();
    const [userData, setUserData] = useState({ username: '', password: '' })
    const default_tb_margin = "2%";

    function loginbtn(e) {
        let authen = false;
        const url = "http://localhost:5000/api/authen/getUser"
        axios.get(url)
            .then(res => {
                console.log(res)
                if (res.status === 200) {
                    for (let i = 0; i < res.data.length; i++) {
                        if (res.data[i].username === userData.username && res.data[i].password === userData.password) {
                            authen = true;
                        }
                    }
                    if (authen === true) {
                        alert('[success] - welcome ' + userData.username)
                    }
                    else {
                        alert('[error] - incorrect user or password')
                    }
                }
                else {
                    alert('[error] - there are something wrong on service')
                }

            })
            .catch(error => {
               alert(error)
              });

        e.preventDefault();
    }

    function signupbtn() {
        history.push("/register");
    }

    return (
        <div style={{ marginTop: default_tb_margin, marginBottom: default_tb_margin }}>
            <div class="text-lg-center text-uppercase d-block p-2 bg-primary text-white rounded">Login Screen</div>
           <div class="row"> 
            <div class="col-2">
                
                </div>
                <div class="col-8">
                <img class="center"  src={logo} width="100%"alt="Logo" />
                </div>
               <div class="col-2">
                
               </div>
           </div>
            <form >
                <div class="form-group ">
                    <label for="exampleInputUsername1">Username</label>
                    <input onChange={e => setUserData({ ...userData, username: e.target.value })} type="text" class="form-control" id="exampleInputUsername1" aria-describedby="UsernameHelp" placeholder="username"></input>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input onChange={e => setUserData({ ...userData, password: e.target.value })} type="password" class="form-control" id="exampleInputPassword1" placeholder="password"></input>
                </div>
                <button onClick={loginbtn} class="btn btn-primary" style={{ width: '35%', marginRight: '1%' }}>Login</button>
                <button onClick={signupbtn} class="btn btn-secondary" style={{ width: '35%' }}>Sign Up</button>
            </form>
        </div>
    );
}
export default Login