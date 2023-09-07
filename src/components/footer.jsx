import NavBar from "./NavBar"
import "./footer.css"
import React from 'react'
function Footer() {
	return (
		<>
		<NavBar/>
		<div>
			<div className="container">
				<div className="col-lg-4 col-md-6 col-sm-12">
					<div className="widget widget_contact">
						<div className="widget_title">
							<h4>Contact Us</h4>
						</div>
						<div className="contact_info">
							<div className="single_info">
								<div className="icon">
									<i className="fas fa-phone-alt"></i>
								</div>
								<div className="info">
									<p><a href="tel:+919246147999">1800-121-3637</a></p>
									<p><a href="tel:+919246147999">+91 924-614-7999</a></p>
								</div>
							</div>
							<div className="single_info">
								<div className="icon">
									<i className="fas fa-envelope"></i>
								</div>
								<div className="info">
									<p><a href="mailto:info@deneb.com">info@deneb.com</a></p>
									<p><a href="mailto:services@deneb.com">services@deneb.com</a></p>
								</div>
							</div>
							<div className="single_info">
								<div className="icon">
									<i className="fas fa-map-marker-alt"></i>
								</div>
								<div className="info">
									<p>125, Park street aven, Brocklyn,<span>Newyork.</span></p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	
		<div className="copyright_area">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="copyright_text">
							<p>Copyright &copy; 2020 All rights reserved.</p>
						</div>
					</div>
				</div>
			</div>
		</div>


    
	</>
  )
}

export default Footer