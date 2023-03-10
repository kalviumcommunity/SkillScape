import SideNavBar from "./SideNavBar";
import './StudentReview.css';

function Student() {
	return (
		<div>
			<div id="container">
			<SideNavBar />
			<div className="path">
				Navaneeth Arunkumar / Checklist /<b> Review Links </b>
			</div>
			<div className="header-sreview">
				<b>Reference List</b>
			</div>
			<div className="tasks-sreview">
                <ul id="bullets">
                <li><a id="stask" href="https://youtu.be/eVQVqpE98No">Build the perfect LinkedIn Profile</a></li>
                <li><a id="stask" href="https://youtu.be/y8YH0Qbu5h4">The Perfect Resume | Step by Step Guide</a></li>
                <li><a id="stask" href="https://youtu.be/FroveScaTqw">Best Suit Combinations to attain the Professional Look!</a></li>
                <li><a id="stask" href="https://youtu.be/qq65UO1ikpE">How to stop sounding unprofessional | The Ultimate Interview Tip</a></li>
                </ul>
			</div>
			</div>
		</div>
	);
}

export default Student;