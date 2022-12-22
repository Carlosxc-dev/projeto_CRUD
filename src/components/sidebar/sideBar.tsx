import { react } from "@babel/types";
import Foto from "./foto.png"

import {BiHomeAlt} from "react-icons/bi"
import {BsBookmark} from "react-icons/bs"
import {SlGraduation} from "react-icons/sl"
import {IoLogoUsd} from "react-icons/io"
import {AiOutlineFileText} from "react-icons/ai"
import {FiSliders} from "react-icons/fi"
import {GoSignOut} from "react-icons/go"

import { SideBar, Logo, Perfil, Nav } from "./style";

export default () =>
        <SideBar>
            <Logo>Dartsiders CRUD</Logo>
            <Perfil className="perfil">
                <img src={Foto} alt="Imagem de perfil usuario" />
                <h2>nome pessoa</h2>
                <h3>admin</h3>
            </Perfil>
            <Nav>
                <ul>
                    <li>
                        <BiHomeAlt/>
                        <a href="">Home</a>
                    </li>
                    <li>
                        <BsBookmark/>
                        <a href="">Couse</a>
                    </li>
                    <li>
                        <SlGraduation/>
                        <a href="">Students</a>
                    </li>
                    <li>
                        <IoLogoUsd/>
                        <a href="">Payment</a>
                    </li>
                    <li>
                        <AiOutlineFileText/>
                        <a href="">Report</a>
                    </li>
                    <li>
                        <FiSliders/>
                        <a href="">Settings</a>
                    </li>
                    <li className="logout">
                        <GoSignOut/>
                        <a href="">Logout</a>
                    </li>
                </ul>
            </Nav>

        </SideBar>