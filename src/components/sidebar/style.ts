import styled from "styled-components";

export const SideBar = styled.div`
    width: 270px;
    height: 100vh;
    background-color: #ACACAC;
    display: flex;
    flex-direction: column;
    padding: 0.5rem;
    align-items: center;
`;

export const Logo = styled.h1`
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 2rem;
`;

export const Perfil = styled.section`
    width: 130px;
    height: 200px;
    margin-bottom: 3rem;

    img{
        width: 130px;
        height: 130px;
        border-radius: 50%;
        margin-bottom: 5px;
    }

    h2{
        font-size: 1rem;
        margin-bottom: 5px;
    }

    h3{
        font-size: .7rem;
        color: #A700D0;
    }
`;

export const Nav = styled.nav`
    height: 80%;

    ul{
        list-style: none;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;

    }

    
    li{
        width: 195px;
        height: 40px;
        padding: 0.6rem 3.5rem;
        /* background-color: #c6c6c6; */
        border-radius: 5px;
        display: flex;
    }
    

    a{
        text-decoration: none;
        font-size: 14px;
        font-weight: 400;
        color: #000;
        margin-left: .6rem;
    }

    ul > .logout{
        justify-self: flex-end;
    }

    li:hover{
        background-color: #A700D0;
    }
`;