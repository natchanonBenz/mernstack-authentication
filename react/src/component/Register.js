import React, { useState } from 'react'
import '../App.css';
import { useHistory } from "react-router-dom";
import axios from 'axios';

function Register() {
    let history = useHistory();
    const [registerData, setregisterData] = useState({ username: '', password: '', repassword: '' })
    const default_tb_margin = "2%";

    function Regisbtn(e) {
        if (registerData.username === "" || registerData.password === "" || registerData.repassword === "") {
            alert('[warning] - please enter all required fields')
        }
        else {
            if (registerData.password === registerData.repassword) {
                let request_json = {
                    "username": registerData.username,
                    "password": registerData.password
                }
                axios.post('http://localhost:5000/api/authen/createUser', request_json)
                .then(res => {
                    if(res.status === 200){
                        alert('[success] - create account successful')
                        history.goBack();
                    }
                    else{
                        alert('[error] - there are something wrong on service')
                    }
                })
                .catch(error => {
                    alert(error)
                   });
            }
            else {
                alert('[warning] - password and re-password are not same')
            }
        }
        e.preventDefault();
    }

    function Backbtn(e) {
        history.goBack();
        e.preventDefault();
    }

    return (
        <div style={{ marginTop: default_tb_margin, marginBottom: default_tb_margin }}>
            <form >
                <div class="text-lg-center text-uppercase d-block p-2 bg-warning text-dark rounded">Register Screen</div>
                <div class="form-group " style={{ marginTop:'3%'}}>
                    <label for=" Username1">Username</label>
                    <input onChange={e => setregisterData({ ...registerData, username: e.target.value })} type="text" class="form-control" id=" Username1" aria-describedby="UsernameHelp" placeholder="username"></input>
                </div>
                <div class="form-group">
                    <label for=" Password1">Password</label>
                    <input onChange={e => setregisterData({ ...registerData, password: e.target.value })} type="password" class="form-control" id=" Password1" placeholder="password"></input>
                </div>
                <div class="form-group">
                    <label for=" RePassword">Re-Password</label>
                    <input onChange={e => setregisterData({ ...registerData, repassword: e.target.value })} type="password" class="form-control" id=" RePassword" placeholder="re-password"></input>
                </div>

                <button onClick={Regisbtn} class="btn btn-warning" style={{ width: '35%', marginRight: '1%' }}>Register</button>
                <button onClick={Backbtn} class="btn btn-secondary" style={{ width: '35%' }}>Back</button>
            </form>
        </div>
    );

}

export default Register