import SideNavBar from "./components/SideNavBar";
import './Student.css';

function Student() {
	return (
		<div>
			<div id="container">
			<SideNavBar />
			<div className="path">
				Navaneeth Arunkumar / Checklist /<b> Pre-requsites </b>
			</div>
			<div className="header">
				<b>Task List</b>
			</div>
			<div className="tasks">
				<input id="task" type="checkbox" /> Create LinkedIn Profile
				<input id="task" type="checkbox" /> Complete Resume 
				<input id="task" type="checkbox" /> Read about recruiting companies 
				<input id="task" type="checkbox" /> Get a suit 
				<input id="task" type="checkbox" /> Practice fluent speaking 
				<input id="task" type="checkbox" /> Check Questionnaire booklet provided
			</div>
			</div>
		</div>
	);
}

export default Student;