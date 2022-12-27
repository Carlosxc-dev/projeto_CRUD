/** @format */
import { react } from "@babel/types";
import { BrowserRouter} from "react-router-dom";

//Style
import GlobalStyle from "../style";
import { Conteiner } from "./style";

//import
import { SignIn } from "./sigin/sigin";
import { Main } from "../components/main/main";
import Header from "../components/header/header";
import SideBar from "../components/sidebar/sideBar";

export default function App() {
	return (
		<BrowserRouter>
			<GlobalStyle />
			<Conteiner>
				<Header />
				<SideBar />
				<Main/>
			</Conteiner>
		</BrowserRouter>
	);
}
