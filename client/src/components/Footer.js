import React from "react";

function Footer() {
    return (
        <section className="footer-top-section">
		<div className="container">
			<div className="footer-top-bg">
				<img src="/img/footer-top-bg.png" alt="" />
			</div>
			<div className="row">
				<div className="col-lg-4">
					<div className="footer-logo text-white">
						<img src="/img/footer-logo.png" alt="" />
						<p>Lorem ipsum dolor sit amet, consectetur adipisc ing ipsum dolor sit ame.</p>
					</div>
				</div>
				<div className="col-lg-4 col-md-6">
					<div className="footer-widget mb-5 mb-md-0">
						<h4 className="fw-title">Latest Posts</h4>
						<div className="latest-blog">
							<div className="lb-item">
								<div className="lb-thumb set-bg" style={{backgroundImage: `url("/img/latest-blog/1.jpg")`}}></div>
								<div className="lb-content">
									<div className="lb-date">June 21, 2018</div>
									<p>Lorem ipsum dolor sit amet, consectetur adipisc ing ipsum </p>
									<a href="/" className="lb-author">By Admin</a>
								</div>
							</div>
							<div className="lb-item">
								<div className="lb-thumb set-bg" style={{backgroundImage: `url("/img/latest-blog/2.jpg")`}}></div>
								<div className="lb-content">
									<div className="lb-date">June 21, 2018</div>
									<p>Lorem ipsum dolor sit amet, consectetur adipisc ing ipsum </p>
									<a href="/" className="lb-author">By Admin</a>
								</div>
							</div>
							<div className="lb-item">
								<div className="lb-thumb set-bg" style={{backgroundImage: `url("/img/latest-blog/3.jpg")`}}></div>
								<div className="lb-content">
									<div className="lb-date">June 21, 2018</div>
									<p>Lorem ipsum dolor sit amet, consectetur adipisc ing ipsum </p>
									<a href="/" className="lb-author">By Admin</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-lg-4 col-md-6">
					<div className="footer-widget">
						<h4 className="fw-title">Top Comments</h4>
						<div className="top-comment">
							<div className="tc-item">
								<div className="tc-thumb set-bg" style={{backgroundImage: `url("/img/authors/1.jpg")`}}></div>
								<div className="tc-content">
									<p><a href="/">James Smith</a> <span>on</span>  Lorem ipsum dolor sit amet, co</p>
									<div className="tc-date">June 21, 2018</div>
								</div>
							</div>
							<div className="tc-item">
								<div className="tc-thumb set-bg" style={{backgroundImage: `url("/img/authors/2.jpg")`}}></div>
								<div className="tc-content">
									<p><a href="/">James Smith</a> <span>on</span>  Lorem ipsum dolor sit amet, co</p>
									<div className="tc-date">June 21, 2018</div>
								</div>
							</div>
							<div className="tc-item">
								<div className="tc-thumb set-bg" style={{backgroundImage: `url("/img/authors/3.jpg")`}}></div>
								<div className="tc-content">
									<p><a href="/">James Smith</a> <span>on</span>  Lorem ipsum dolor sit amet, co</p>
									<div className="tc-date">June 21, 2018</div>
								</div>
							</div>
							<div className="tc-item">
								<div className="tc-thumb set-bg" data-setbg="/img/authors/4.jpg"></div>
								<div className="tc-content">
									<p><a href="/">James Smith</a> <span>on</span>  Lorem ipsum dolor sit amet, co</p>
									<div className="tc-date">June 21, 2018</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
    )
}

export default Footer