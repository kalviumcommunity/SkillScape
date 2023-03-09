import SideNavBar from "./SideNavBar";
import './Student.css';

function Student() {
	return (
		<div>
			<div id="container">
			<SideNavBar />
			<div className="path">
				Navaneeth Arunkumar / Checklist /<b> Pre-requsites </b>
			</div>
			<div className="header-student">
				<b>Task List</b>
			</div>
			<div className="tasks-student">
				<input id="task-student" type="checkbox" /> Create LinkedIn Profile
				<input id="task-student" type="checkbox" /> Complete Resume 
				<input id="task-student" type="checkbox" /> Read about recruiting companies 
				<input id="task-student" type="checkbox" /> Get a suit 
				<input id="task-student" type="checkbox" /> Practice fluent speaking 
				<input id="task-student" type="checkbox" /> Check Questionnaire booklet provided
			</div>
			</div>
		</div>
	);
}

export default Student;