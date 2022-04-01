import React , {useEffect, useState} from "react";



function Footer() {


	const [highscore, setHighscore] = useState([])

   useEffect(() => {
      fetch("/highscore", {
         method:"GET",
         headers: {
            "Content-Type": "application/json"
         }
      })
      .then(res => res.json())
      .then(res => {
         console.log(res);
         setHighscore(res)
      })
   }, [])



    


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
					</div>
				</div>
				<div className="col-lg-4 col-md-6">
					{/* <div className="footer-widget mb-5 mb-md-0">
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
					</div> */}
				</div>
				<div className="col-lg-4 col-md-6">
					<div className="footer-widget">
						<h4 className="fw-title">Top Coders</h4>
						<div className="top-comment">

						{ highscore.map(c =>

						<div className="tc-item" key={c.id}>
							<div className="tc-thumb set-bg" style={{backgroundImage: `url("/img/authors/1.jpg")`}}></div>
							<div className="tc-content">
								<p> {c.name} <span>from</span>  {c.country}</p>
								<p><span>is</span> {c.age} <span>years old</span></p>
							</div>
						</div>

						)}

							
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
    )
}

export default Footer