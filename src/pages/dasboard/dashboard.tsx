/** @format */
import React from "react";
import { Conteiner } from "../../app/style";

import { Main } from "../../components/main/main";
import Header from "../../components/header/header";
import SideBar from "../../components/sidebar/sideBar";

export function Dashboard() {
	return (
		<Conteiner>
			<Header />
			<SideBar />
			<Main />
		</Conteiner>
	);
}
