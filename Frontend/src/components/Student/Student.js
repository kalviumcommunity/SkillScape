import { useState, useEffect } from 'react';
import SideNavBar from "./SideNavBar";
import './Student.css';

function Student() {
	const [tasks, setTasks] = useState([]);

	useEffect(() => {
		fetch('/tasks')
			.then(response => response.json())
			.then(data => setTasks(data));
	}, []);

	return (
		<div>
			<div id="container">
				<SideNavBar />
				<div className="path-student">
					Navaneeth Arunkumar / Checklist /<b> Pre-requsites </b>
				</div>
				<div className="header-student">
					<b>Task List</b>
				</div>
				<div className="tasks-student">
					{tasks.map(task => (
						<label key={task._id}>
							<input id='task-student' type="checkbox" value={task._id} />
							{task.description}
						</label>
					))}
				</div>
			</div>
		</div>
	);
}

export default Student;
