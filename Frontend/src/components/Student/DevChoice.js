import SideNavBar from "./SideNavBar";
import './DevChoice.css';
import Footer from './Footer';
import { useAuth0 } from "@auth0/auth0-react";
import YouTubePlaylist from "@codesweetly/react-youtube-playlist";

function Student() {
	const {user,isAuthenticated} = useAuth0();
	return (
		<div>
			<div id="container">
			<SideNavBar />
			<div className="path-company">
				{isAuthenticated && user.name} / Student /<b> Developer's Choice </b>
			</div>
			<div className="header-dcompany">
				<b>Developer's Choice</b>
			</div>
            <div className="playlist-container">
            <YouTubePlaylist 
            apiKey="AIzaSyALDAcHtPYnMZRoGr_-_l8pXSjoRXhWCL8"
            playlistId="PLaXAbANbIbehIGN5WW03F_Feq3jIhIikd"
            uniqueName="Developers_Choice"
            />
            </div>
            <Footer />
			</div>
		</div>
	);
}

export default Student;