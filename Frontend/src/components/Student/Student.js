import { useState, useEffect } from 'react';
import SideNavBar from "./SideNavBar";
import './Student.css';
import Footer from './Footer'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth0 } from "@auth0/auth0-react";


function Student() {
	const [tasks, setTasks] = useState([]);
	const {user,isAuthenticated} = useAuth0()
	const notify = (e) => e.target.checked&&toast.success("Task Done!",{
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
				<ToastContainer />
				<div className="path-student">
					{isAuthenticated && user.name}/ Checklist /<b> Pre-requsites </b>
				</div>
				<div className="header-student">
					<b>Task List</b>
				</div>
				<div className="tasks-student">
					{tasks.map(task => (
						<div className="task-container">
					    <label key={task._id}>
							<input onClick={notify} id='task-student' type="checkbox" value={task._id} />
							{task.description}
						</label>
						</div>
					))}
				</div>
				{/* <div className="tasks-student">
					<div className="task-container">
						<label>
							<input type="checkbox" />
						</label>
					</div>
					<div className="task-container"><label></label></div>
					<div className="task-container"><label></label></div>
					<div className="task-container"><label></label></div>
					<div className="task-container"><label></label></div>
				</div> */}

				<Footer />
			</div>
		</div>
	);
}

export default Student;
