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
    .line{
        display: inline;
        margin-right: .6rem;
        width: 0;
        height: 40px;
        padding: 4px;
        background-color: #A700D0;
    }
`;

export const Perfil = styled.section`
    width: 130px;
    height: 200px;
    margin-bottom: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

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
        border-radius: 5px;
        margin-bottom: .4rem;
    }

    li > .a{
        width: 195px;
        height: 40px;
        padding: 0.6rem 3.5rem;
        border-radius: 5px;
        display: flex;
        text-decoration: none;
        font-size: 14px;
        font-weight: 400;
        color: #000;
        margin-left: .6rem;

        p{
            margin-left: .5rem;
        }
    }

    li:hover{
        background-color: #A700D0;
    }
`;