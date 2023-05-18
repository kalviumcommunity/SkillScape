import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SideNavBar.css"; 
import LogoutButton from "../auth0/logout";
import Profile from "../auth0/profile";
import LogoImg from "../Welcome/imagesw/blue-logo.png"

const SideNavBar = () => {
	const [isExpanded, setExpendState] = useState(false);
	const navigate = useNavigate();
	const menuItems = [
		{
			text: "Pre-requsites",
			icon: "icons/grid.svg",
			path: "/studenthome",
		},
        {
			text: "Reference Links",
			icon: "icons/pie-chart.svg",
			path: "/studentreview",
		},
		{
			text: "To-Do List",
			icon: "icons/checkbox.svg",
			path: "/studenttasklist",
		},
        {
			text: "Companies",
			icon: "icons/folder.svg",
			path: "/studentcompany",
		},
		{
			text: "About",
			icon: "icons/user.svg",
			path: "/about"
		},
		{
			text: "Switch to Admin",
			icon: "icons/switchadminstud.svg",
			path: "/adminhome",
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
							<img src={LogoImg} alt="" srcset="" />
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
					{menuItems.map(({ text, icon, path }) => (
						// eslint-disable-next-line jsx-a11y/anchor-is-valid
						//add tooltip to div below
						<div className={isExpanded ? "menu-item" : "menu-item menu-item-NX"} onClick={() => navigate(`${path}`)}>
						
							<img className="menu-item-icon" src={icon} alt="" srcset="" />
							{isExpanded && <p>{text}</p>}
						</div>
					))}
				</div>
			</div>
			<div className="nav-footer">
				{isExpanded && (
					<div className="nav-details">
						<Profile />
					</div>
				)}
				<LogoutButton/>
			</div>
		</div>
	);
};

export default SideNavBar;
