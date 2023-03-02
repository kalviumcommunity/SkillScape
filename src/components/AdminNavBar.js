import React, { useState } from "react";
import "./SideNavBar.css";

const SideNavBar = () => {
	const [isExpanded, setExpendState] = useState(false);
	const menuItems = [
		{
			text: "Add Tasks",
			icon: "icons/grid.svg",
		},
        {
			text: "Update Links",
			icon: "icons/pie-chart.svg",
		},
        {
			text: "Add Companies",
			icon: "icons/folder.svg",
		},
		{
			text: "Update Calendar",
			icon: "icons/user.svg",
		},
		{
			text: "Chats",
			icon: "icons/message.svg",
		},
	];
	return (
		<div
			className={
				isExpanded
					? "side-nav-container"
					: "side-nav-container side-nav-container-NX"
			}
		>
			<div className="nav-upper">
				<div className="nav-heading">
					{isExpanded && (
						<div className="nav-brand">
							<img src="icons/skillscape-logo.svg" alt="" srcset="" />
							<h2>SkillScape</h2>
						</div>
					)}
					<button
						className={
							isExpanded ? "hamburger hamburger-in" : "hamburger hamburger-out"
						}
						onClick={() => setExpendState(!isExpanded)}
					>
						<span></span>
						<span></span>
						<span></span>
					</button>
				</div>
				<div className="nav-menu">
					{menuItems.map(({ text, icon }) => (
						// eslint-disable-next-line jsx-a11y/anchor-is-valid
						<a
							className={isExpanded ? "menu-item" : "menu-item menu-item-NX"}
							href="#"
						>
							<img className="menu-item-icon" src={icon} alt="" srcset="" />
							{isExpanded && <p>{text}</p>}
						</a>
					))}
				</div>
			</div>
			<div className="nav-footer">
				{isExpanded && (
					<div className="nav-details">
						<img
							className="nav-footer-avatar"
							src="icons/admin-avatar.svg"
							alt=""
							srcset=""
						/>
						<div className="nav-footer-info">
							<p className="nav-footer-user-name">Navaneeth Arunkumar</p>
							<p className="nav-footer-user-position">Admin</p>
						</div>
					</div>
				)}
				<img className="logout-icon" src="icons/logout.svg" alt="" srcset="" />
			</div>
		</div>
	);
};

export default SideNavBar;