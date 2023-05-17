import styled from "styled-components";

export const Conteiner = styled.section`
    display: grid;
    grid-template-columns: 270px 1fr;
    grid-template-rows: 60px 1fr;
    overflow: hidden;

    grid-template-areas: 
        "sidebar header"
        "sidebar main";
    
    div.sidebar{
        grid-area: sidebar;
    }

    div.header{
        grid-area: header;
    }
    div .main{
        grid-area: main;
    }
`;