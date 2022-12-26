import { react } from "@babel/types";
import Conteiner_card from "../cards-home/cards_home";
import { Main } from "./style";

export default () =>
    <Main className="main">
        <Conteiner_card  name = "students" quant = {243}  clas = "students"/>
        <Conteiner_card name = "Payments"  quant = {556} clas = "payments"/>
        <Conteiner_card name = "Course"  quant = {13} clas = "course"/>
        <Conteiner_card name = "Users"  quant = {3} clas = "user"/>
    </Main>