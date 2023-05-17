/** @format */

import { react } from "@babel/types";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { MainStyle } from "./style";

import Home from "../home/home";
import { Course } from "../course/course";
import { Students } from "../Students/students";
import { Payments } from "../payments/payments";
import { Report } from "../report/report";
import { Settings } from "../settings/settings";
import { Logout } from "../logout/logout";

export const Main = () => {
	return (
		<MainStyle className="main">
			
		</MainStyle>
	);
};
