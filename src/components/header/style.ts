import styled from "styled-components";

export const Header = styled.header`
    width: 99%;
    height: 3.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem;

    button{
        border: none;
        background-color: transparent;
        color: #c4c4c4;
        font-size: 20px;
    }
`;

export const Util = styled.div`
    display: flex;

    button{
        margin-left: .5rem;   
    }

    form > input{
        border: 1px solid #E5E5E5;
        border-radius: 8px;
        width: 212px;
        height: 37px;
        padding: 1rem;
        
        ::placeholder{
            color: #c4c4c4;
        }
    }
`;