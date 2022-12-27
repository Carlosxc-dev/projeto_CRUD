import { react } from "@babel/types";

import {BsBell} from "react-icons/bs"
import {AiOutlineSearch} from "react-icons/ai"
import {BsCaretLeftSquare} from "react-icons/bs"

import { Header , Util} from "./style";

export default () => 
    <Header className="header">
        <button><BsCaretLeftSquare/></button>
        <Util>
            <form action="">
                <input type="text" placeholder="Search"/>
                <button>
                    <AiOutlineSearch/>
                </button>
            </form>
            <button><BsBell/></button>
        </Util>
    </Header>