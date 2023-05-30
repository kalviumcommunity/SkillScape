import { useState, useEffect } from 'react';
import SideNavBar from "./SideNavBar";
import './Student.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaCheck } from 'react-icons/fa';
import { useAuth0 } from "@auth0/auth0-react";


function Student() {
	const [checkedTasks, setCheckedTasks] = useState([]);
	const [tasks, setTasks] = useState([]);
	const {user,isAuthenticated} = useAuth0();
	const notify = (e) => e.target.checked&&toast.success("Task Done!",{
		icon: <FaCheck color="#3f9eca" />,
		style: {
			background: "#061b28",
			color: "#3f9eca",
		},
		progressStyle: {
			background: "#3f9eca"
		},
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
				<div className="test">
				<div className="path-student">
					{isAuthenticated && user.name} / Student /<b> Pre-requsites </b>
				</div>
				<div className="header-student">
					<b>Task List</b>
				</div>
				<div className="tasks-student">
  					{tasks.map(task => (
    				<label
					className={`card task-card ${checkedTasks.includes(task._id) ? 'checked' : ''}`}
					key={task._id}
					onClick={notify}
				  	>
      					<div className="card-body">
						  <input
  							id={`task-student-${task._id}`}
  							type="checkbox"
  							value={task._id}
  							className="form-check-input"
  							onClick={() => {
    						if (checkedTasks.includes(task._id)) {
      							setCheckedTasks(checkedTasks.filter(id => id !== task._id));
    						} else {
      							setCheckedTasks([...checkedTasks, task._id]);
   	 						}
 							}}
						/>

        						<div className="form-check-label">
          							{task.description}
        						</div>
     					</div>
    				</label>
  					))}
				</div>
				</div>
			</div>
		</div>
	);
}

export default Student;