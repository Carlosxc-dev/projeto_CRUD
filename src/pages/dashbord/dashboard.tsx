import react  from "@babel/types";

import SideBar from "../../components/sidebar/sideBar"
import Header from "../../components/header/header";
import Main from "../../components/main/main";
import { Conteiner } from "./styles";

export default () =>
    <Conteiner>
        <SideBar/>
        <Header/>
        <Main/>
    </Conteiner>