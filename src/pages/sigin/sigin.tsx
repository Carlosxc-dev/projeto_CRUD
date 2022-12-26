import React from "react";
import {useState} from "react";
import styled from "styled-components"
import { Link } from "react-router-dom";
import { BrowserRouter,Route, Routes} from "react-router-dom"

import {Conteiner, Card, Logo, Sigin, Text} from "./style";
import {Form} from "./style";

import { GoogleAuthProvider, signInWithPopup, User} from "firebase/auth"
import {auth} from "../../services/servidor"

export function SignIn() {
    const [user, setUser] = useState<User>({} as User);

    function handleGoogleSignIn(){

        const provider = new GoogleAuthProvider;

        signInWithPopup(auth, provider)
        .then((result)=>{ 
            setUser(result.user)
        })
        .catch((e)=>{
            console.log(e);  
        })
    }

    return(
        //plano de fundo do login
        <Conteiner>
            {/* area cental para logar na tela */}
            <Card>
                <Logo><div className="line"></div> Dartsiders CRUD</Logo>
                <Sigin>SIGN IN</Sigin>
                <Text>Enter your credentials to access your account</Text>
                <Form action="/db.ts" target="_self" method="get" autoComplete="on"> 
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="Enter your email"/>
                    <label htmlFor="key" >Password</label>
                    <input type="password" id="key" placeholder="Enter your password"/>
                    {/* <Link ="/"> */}
                        <button type="button" className="btn-form" onClick={handleGoogleSignIn} >SignIn</button>
                    {/* </Link> */}
                </Form>
                <Text>Forgot your password? <a href="#">Reset Password</a></Text>
            </Card>
        </Conteiner>
    )
}