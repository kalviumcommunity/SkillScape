import SideNavBar from "./SideNavBar";
import './StudentReview.css';
import Footer from './Footer';
import { useAuth0 } from "@auth0/auth0-react";

function Student() {
	const {user,isAuthenticated} = useAuth0();

	return (
		<div>
			<div id="container">
			<SideNavBar />
			<div className="path-review">
				{isAuthenticated && user.name} / Checklist /<b> Review Links </b>
			</div>
			<div className="header-sreview">
				<b>Reference List</b>
			</div>
			<div class="card-columns">
				<div class="review">
					<a href="https://youtu.be/eVQVqpE98No" class="boxreview">
					<div class="review-body">
						Build the perfect LinkedIn Profile
					</div>
					</a>
				</div>

				<div class="review">
					<a href="https://youtu.be/y8YH0Qbu5h4" class="boxreview">
					<div class="review-body">
						The Perfect Resume | Step by Step Guide
					</div>
					</a>
				</div>

				<div class="review">
					<a href="https://youtu.be/FroveScaTqw" class="boxreview">
					<div class="review-body">
						Best Suit Combinations to attain the Professional Look!
					</div>
					</a>
				</div>

				<div class="review">
					<a href="https://youtu.be/qq65UO1ikpE" class="boxreview">
					<div class="review-body">
						How to stop sounding unprofessional | The Ultimate Interview Tip
					</div>
					</a>
				</div>
			</div>
			<Footer />
			</div>
		</div>
	);
}

export default Student;