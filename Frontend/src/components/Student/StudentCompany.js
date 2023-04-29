import Carousel from "../Carousel/Carousel";
import SideNavBar from "./SideNavBar";
import './StudentCompany.css';
import Footer from './Footer'

function Student() {
	return (
		<div>
			<div id="container">
			<SideNavBar />
			<div className="path-company">
				Navaneeth Arunkumar / Checklist /<b> Company </b>
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