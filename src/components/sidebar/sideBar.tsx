/** @format */

import { react } from "@babel/types";
import Foto from "./foto.png";
import { BiHomeAlt } from "react-icons/bi";
import { BsBookmark } from "react-icons/bs";
import { SlGraduation } from "react-icons/sl";
import { IoLogoUsd } from "react-icons/io";
import { AiOutlineFileText } from "react-icons/ai";
import { FiSliders } from "react-icons/fi";
import { GoSignOut } from "react-icons/go";

import { SideBar, Logo, Perfil, Nav } from "./style";
import { Link } from "react-router-dom";

export default () => (
	<SideBar className="sidebar">
		<Logo><div className="line"></div> Dartsiders CRUD</Logo>
		<Perfil className="perfil">
			<img src={Foto} alt="Imagem de perfil usuario" />
			<h2>nome pessoa</h2>
			<h3>admin</h3>
		</Perfil>
		<Nav>
			<ul>
				<li>
					<Link className="a" to="/home">
						<BiHomeAlt />
						<p>Home</p>
					</Link>
				</li>
				<li>
					<Link className="a" to="/course">
						<BsBookmark />
						<p>Course</p>
					</Link>
				</li>
				<li>
					<Link className="a" to="/students">
						<SlGraduation />
						<p>Students</p>
					</Link>
				</li>
				<li>
					<Link className="a" to="/payments">
						<IoLogoUsd />
						<p>Payments</p>
					</Link>
				</li>
				<li>
					<Link className="a" to="/report">
						<AiOutlineFileText />
						<p>Report</p>
					</Link>
				</li>
				<li>
					<Link className="a" to="/settings">
						<FiSliders />
						<p>Settings</p>
					</Link>
				</li>
				<li className="logout">
					<Link className="a" to="/logout">
						<GoSignOut />
						<p>Logout</p>
					</Link>
				</li>
			</ul>
		</Nav>
	</SideBar>
);
