import { useState, useEffect } from 'react';
import SideNavBar from "./SideNavBar";
import './Student.css';
import Footer from './Footer'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Student() {
	const [tasks, setTasks] = useState([]);
	const notify = () => toast.success("Task Done!",{
		theme: "dark"
	});

	useEffect(() => {
		fetch(`${process.env.REACT_APP_BACKENDURL}/tasks`)
			.then(response => response.json())
			.then(data => setTasks(data));
	}, []);

	return (
		<div>
			<div id="container">
				<SideNavBar />
				<ToastContainer
				limit={1} />
				<div className="path-student">
					Navaneeth Arunkumar / Checklist /<b> Pre-requsites </b>
				</div>
				<div className="header-student">
					<b>Task List</b>
				</div>
				<div className="tasks-student">
					{tasks.map(task => (
						<label key={task._id}>
							<input onClick={notify} id='task-student' type="checkbox" value={task._id} />
							{task.description}
						</label>
					))}
				</div>
				<Footer />
			</div>
		</div>
	);
}

export default Student;
