import SideNavBar from "./SideNavBar";
import './StudentCompany.css';

function Student() {
	return (
		<div>
			<div id="container">
			<SideNavBar />
			<div className="path">
				Navaneeth Arunkumar / Checklist /<b> Company </b>
			</div>
			<div className="header-scompany">
				<b>Companies Visiting</b>
			</div>
			<div className="tasks-scompany">
                <ul>
                    <li id="ctask">Microsoft</li>
                    <li id="ctask">Google</li>
                    <li id="ctask">Kalvium</li>
                    <li id="ctask">Facebook</li>
                    <li id="ctask">LinkedIn</li>
                    <li id="ctask">Snapchat</li>
                    <li id="ctask">Twitter</li>
                    <li id="ctask">Adobe</li>
                    <li id="ctask">Ubisoft</li>
                </ul>
			</div>
			</div>
		</div>
	);
}

export default Student;