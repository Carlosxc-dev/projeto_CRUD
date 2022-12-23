import react  from "@babel/types";
import SideBar from "../../components/sidebar/sideBar"
import Header from "../../components/header/header";

import { Conteiner } from "./styles";

export default () =>
    <Conteiner>
        <SideBar/>
        <Header/>
    </Conteiner>