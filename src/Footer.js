import React from "react";
import "./Footer.css";

function Footer() {
	return (
		<div className="footer">
			<div className="footer__links">
				<ul>
					<li>
						<a href="#">Audio Description</a>
					</li>
					<li>
						<a href="#">Investor Relations</a>
					</li>
					<li>
						<a href="#">Legal Notices</a>
					</li>
					<li>
						<a href="#" className="button">Service Code</a>
					</li>
					
					{/* <button className="button">Service Code</button> */}
				</ul>
				<ul>
					<li>
						<a href="#">Help Center</a>
					</li>
					<li>
						<a href="#">Jobs</a>
					</li>
					<li>
						<a href="#">Cookie Preferences</a>
					</li>
				</ul>

				<ul>
					<li>
						<a href="#">Gift Cards</a>
					</li>
					<li>
						<a href="#">Terms of Use</a>
					</li>
					<li>
						<a href="#">Corporate Information</a>
					</li>
				</ul>
				<ul>
					<li>
						<a href="#">Media Center</a>
					</li>
					<li>
						<a href="#">Privacy</a>
					</li>
					<li>
						<a href="#">Contact Us</a>
					</li>
				</ul>
			</div>
			<h2>
				Built By: <a href="https://www.abenezerbaheru.com/">Abenezer Baheru</a>
			</h2>
			
		</div>
	);
}

export default Footer;