import SideNavBar from "./SideNavBar";
import './StudentCompany.css';

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
			
			</div>
		</div>
	);
}

export default Student;