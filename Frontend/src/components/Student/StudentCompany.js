import Carousel from "../Carousel/Carousel";
import SideNavBar from "./SideNavBar";
import './StudentCompany.css';
import Footer from './Footer';
import { useAuth0 } from "@auth0/auth0-react";

function Student() {
	const {user,isAuthenticated} = useAuth0();
	return (
		<div>
			<div id="container">
			<SideNavBar />
			<div className="path-company">
				{isAuthenticated && user.name} / Student /<b> Company </b>
			</div>
			<div className="header-scompany">
				<b>Companies Visiting</b>
			</div>
			<Carousel />
			<Footer />
			</div>
		</div>
	);
}

export default Student;