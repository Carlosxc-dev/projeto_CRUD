import { react } from "@babel/types";
import Home from "../home/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { MainStyle } from "./style";

import { Course } from "../course/course";
import { Students } from "../Students/students";
import { Payments } from "../payments/payments";
import { Report } from "../report/report";
import { Settings } from "../settings/settings";
import { Logout } from "../logout/logout";

export const Main = () => {
	return (
		<MainStyle className="main">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/course" element={<Course />} />
				<Route path="/students" element={<Students />} />
				<Route path="/payments" element={<Payments />} />
				<Route path="/report" element={<Report />} />
				<Route path="/settings" element={<Settings />} />
				<Route path="/logout" element={<Logout />} />
			</Routes>
		</MainStyle>
	);
};
