import { react } from "@babel/types";
import { Conteiner } from "./style";

import {SlGraduation} from "react-icons/sl"

interface props{
    name: string;
    quant: number;
}

export default ({name, quant}: props) =>
    <Conteiner>
        <SlGraduation/>
        <h1>{name}</h1>
        <div className="quant">{quant}</div>
    </Conteiner>