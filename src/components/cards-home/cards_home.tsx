import { react } from "@babel/types";
import { Conteiner } from "./style";

import {SlGraduation} from "react-icons/sl"

interface props{
    name: string;
    quant: number;
    clas: string;
}

export default ({name, quant, clas}: props) =>
    <Conteiner className={clas}>
        <SlGraduation/>
        <h1>{name}</h1>
        <div className="quant">{quant}</div>
    </Conteiner>