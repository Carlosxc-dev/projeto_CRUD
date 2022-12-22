import React from "react";
import styled from "styled-components"

import {Conteiner, Card, Logo, Sigin, Text} from "./style";
import {Form} from "./style";

export default () =>  
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
                <input type="submit" value="SIGN IN" className="btn-form"/>
            </Form>
            <Text>Forgot your password? <a href="#">Reset Password</a></Text>
        </Card>
    </Conteiner>