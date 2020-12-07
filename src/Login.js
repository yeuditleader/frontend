import React, { useEffect, useState } from 'react';
// import './Login.css'
import { signInWithGoogle,signInWithEmailAndPassword,logOut, auth } from './services/firebase';
import { UserContext } from './providers/UserProvider';
import { Redirect } from 'react-router-dom';
import $ from 'jquery';
import { connect } from 'react-redux';
import { actions } from './redux/action'


function Login(props) {

    const [email, setEmail] = useState(0);
    const [password, setPassword] = useState(0);


    // useEffect(()=>{
        
    // })

    const onChangeEmail=(e)=>{
        setEmail(e.target.value)
    }

    const onChangePassword=(e)=>{
        setPassword(e.target.value)
    }

    const onChangeUsername=(e)=>{
        props.setUsername(e.target.value)
    }
            

    const onSubmitForm=(e)=>{
        e.preventDefault()
        signInWithEmailAndPassword(email,password);
    }

    return (
        <>
        <form className="signUp form" onSubmit={(e)=>onSubmitForm(e)}>
            <label for="email">email:</label>
            <input type="email" name="email" onChange={(e)=>onChangeEmail(e)}/><br/>
            <label for="password">password:</label>
            <input type="password" name="password" onChange={(e)=>onChangePassword(e)}/><br/>
            <label for="username">username:</label>
            <input type="text" name="username" onChange={(e)=>onChangeUsername(e)}/><br/>
            <input type="submit" value="OK"/>
        </form>
        <div className="login-buttons">
            <button className="login-provider-button" onClick={signInWithGoogle}>
                <img src="https://img.icons8.com/ios-filled/50/000000/google-logo.png" alt="google icon"/>
                <span>Continue with Google</span>
            </button>
        </div>
        </>
    );
}

export default connect(
    (state)=>{
        return {
            username:state.userReducer.user.username
        }
    },
    (dispatch)=>{
        return {
            setUsername:(e)=>dispatch(actions.setUsername(e)) 
        }
    }

)(Login);