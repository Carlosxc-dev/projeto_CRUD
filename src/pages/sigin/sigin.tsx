import React from "react";
import {useState} from "react";
import {useNavigate} from 'react-router-dom'

import {Conteiner, Card, Logo, Sigin, Text} from "./style";
import {Form} from "./style";

import { GoogleAuthProvider, signInWithPopup, User} from "firebase/auth"
import {auth} from "../../services/servidor"

export default function SignIn() {
    const [user, setUser] = useState<User>({} as User);
    const navegate = useNavigate();

    function handleGoogleSignIn(){

        const provider = new GoogleAuthProvider;

        signInWithPopup(auth, provider)
        .then((result)=>{ 
            setUser(result.user)
            if(result.user.emailVerified)
            console.log(result.user);
        })
        .catch((e)=>{
            console.log(e);  
        })
    }


    return(
        <Conteiner>
                <Card>
                    <Logo><div className="line"></div> Dartsiders CRUD</Logo>
                    <Sigin>SIGN IN</Sigin>
                    <Text>Enter your credentials to access your account</Text>
                    <Form action="/db.ts" target="_self" method="get" autoComplete="on"> 
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" placeholder="Enter your email"/>
                        <label htmlFor="key" >Password</label>
                        <input type="password" id="key" placeholder="Enter your password"/>       
                        <button type="button" className="btn-form" onClick={()=>navegate('/red')}>SignIn</button>
                        <button type="button" className="btn-form" onClick={handleGoogleSignIn}>SignIn with Google</button>
                    </Form>
                    <Text>Forgot your password? <a href="#">Reset Password</a></Text>
                </Card>
        </Conteiner>
    )
}