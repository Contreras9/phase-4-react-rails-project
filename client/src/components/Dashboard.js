import React, {useState, useEffect} from 'react';
import {useNavigate, Link} from "react-router-dom";

function Dashboard({user}) {

	let navigate = useNavigate();

	const [lessons, setDashboard] = useState()

	useEffect(() => {

		fetch("http://localhost:4000/show_dashboard", {
			method:"GET",
			headers: {
				"Content-Type": "application/json"
			}
		})
		.then(res => res.json())
	  	.then(res => {
			setDashboard(res.scope)
		
		})

	}, [])

	if (!user) {
		navigate("/login");
		return ("redirect to login");
	}
	if (!lessons) {
		return "loading"
	}
	console.log(lessons)
   
	return (
   	<section className="recent-game-section spad set-bg" style={{backgroundImage: 'url("/img/recent-game-bg.png")'}}>
			<div className="container">
				<div className="row">



					{lessons.map(lesson => (
					<div className="col-lg-4 col-md-6">
						<div className="recent-game-item">
					<Link to={`/lessons/${lesson.id}`}>
						<div className="rgi-thumb set-bg" style={{backgroundImage: 'url("/img/lessons/' + lesson.image  + '")'}}>
						</div>
							<div className="rgi-content">
								<h5> {lesson.title} </h5>
								<p> {lesson.short_description} </p>
								<a href="/" className="comment"> 3 Submissions</a>
								<div className="rgi-extra">
										<div className="rgi-star"><img src="img/icons/star.png" alt="" />
										</div>
									<div className="rgi-heart"><img src="img/icons/heart.png" alt="" />
									</div>
								</div>
							</div>
					</Link>
						</div>	
					</div>
					))}


					
				   {/* <div className="col-lg-4 col-md-6">
					   <div className="recent-game-item">
					      <div className="rgi-thumb set-bg" style={{backgroundImage: `url("img/recent-game/1.jpg")`}}>
						   </div>
						   <div className="rgi-content">
						      <h5>Text Manipulation</h5>
							   <p>In this lesson you will learn ... </p>
							   <a href="/" className="comment">3 Submissions</a>
							   <div className="rgi-extra">
							      <div className="rgi-star"><img src="img/icons/star.png" alt="" /></div>
							      <div className="rgi-heart"><img src="img/icons/heart.png" alt="" /></div>
							   </div>
						   </div>
					   </div>	
				   </div> */}
               {/* <div className="col-lg-4 col-md-6">
					<div className="recent-game-item">
						<div className="rgi-thumb set-bg" style={{backgroundImage: `url("img/recent-game/2.jpg")`}}>
						   </div>
						   <div className="rgi-content">
							   <h5>Sorting Algorithms</h5>
   							<p>In this lesson you will learn ... </p>
	   						<a href="/" className="comment">3 Submissions</a>
		   					<div className="rgi-extra">
								   <div className="rgi-star"><img src="img/icons/star.png" alt="" /></div>
								   <div className="rgi-heart"><img src="img/icons/heart.png" alt="" /></div>
							   </div>
						   </div>
					</div>	
				   </div> */}
				   {/* <div className="col-lg-4 col-md-6">
					   <div className="recent-game-item">

						   <div className="rgi-thumb set-bg" style={{backgroundImage: `url("img/recent-game/3.jpg")`}}>
                     </div>
						   <div className="rgi-content">

							   <h5>Math and Numbers</h5>

							   <p>In this lesson you will learn ... </p>
							   <a href="/" className="comment">3 Submissions</a>
							   <div className="rgi-extra">
								   <div className="rgi-star"><img src="img/icons/star.png" alt="" /></div>
								   <div className="rgi-heart"><img src="img/icons/heart.png" alt="" /></div>
							   </div>
						   </div>
					   </div>	
				   </div> */}
			   </div>
		   </div>
	   </section>
   );
}

export default Dashboard;