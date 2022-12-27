/** @format */

import { react } from "@babel/types";
import Conteiner_card from "../cards-home/cards_home";

export default () => (
	<>
		<Conteiner_card name="students" quant={243}  />
		<Conteiner_card name="Payments" quant={556}  />
		<Conteiner_card name="Course" quant={13}  />
		<Conteiner_card name="Users" quant={3} />
	</>
);
