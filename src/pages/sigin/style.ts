import styled from "styled-components"


export const Conteiner = styled.div`
    background: linear-gradient(71.17deg, #7C2874 19.35%, #493446 90.12%);background: linear-gradient(71.17deg, #7C2874 19.35%, #493446 90.12%);
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Card = styled.main`
    width: 475px;
    min-height: 550px ;
    background: #fff; 
    border-radius: 10px;
    padding: 30px;
`;

export const Logo = styled.h1`
    color: #A700D0;
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 2.5rem;

    .line{
        display: inline;
        margin-right: .6rem;
        width: 0;
        height: 40px;
        padding: 4px;
        background-color: #A700D0;
    }
`;

export const Sigin = styled.h1`
    color: #A700D0;
    font-size: 22px;
    font-weight: 600;
    margin-bottom: .5rem;
`;

export const Text = styled.text`
    color: #6C6C6C;
    font-size: 14;
    font-weight: normal;

    a{
        text-decoration: none;
        color: #A700D0;
    }
`;

export const Form  = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-top: 2rem;
    margin-bottom: .5rem;

    label{
        margin-bottom: .6rem;
        color: #6C6C6C;
    }

    input , button{
        width: 100%;
        height: 44px;
        border-radius: 4px;
        border: 1px solid #E5E5E5;
        margin-bottom: 1.5rem;
        padding: .5rem;
        &::placeholder{
            color: #cdcdcd;
        }

        
    }
    
    .btn-form{
        color: #fff;
        background-color: #A700D0;
    }

    
`;


