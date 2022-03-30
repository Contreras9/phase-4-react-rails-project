import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function Lesson( {user} ) {

    const [lesson, setLesson] = useState()
    let {id} = useParams()
    let navigate = useNavigate();

    if (user === null) {
        navigate("/login")
    }
    
    useEffect(() => {
        fetch(`/lessons/${id}`, {
            method:"GET",
            headers: {
                "Content_type": "application/json"
            }
        })
        .then(res => res.json())
        .then(res => {
            console.log(res);
            setLesson(res)
        })
    }, [])


    console.log(lesson)
    if (lesson) 
    return (
            
            <section className="page-section single-blog-page spad">
		<div className="container">
			<div className="row">
				<div className="col-lg-8">
					<div className="blog-thumb set-bg" style={{backgroundImage: `url("/img/recent-game/big.jpg")`}}>
						<div className="cata new">new</div>
						<div className="rgi-extra">
							<div className="rgi-star"><img src="/img/icons/star.png" alt="" /></div>
							<div className="rgi-heart"><img src="/img/icons/heart.png" alt="" /></div>
						</div>
					</div>
					<div className="blog-content">
						<h3>{lesson.title}</h3>
						<a href="" className="meta-comment">3 comment</a>
						<p>Lorem ipsum dolor sit amet, consectetur adipisc ing ipsum dolor sit amet, consectetur elit. Lorem ipsum dolor sit amet, consectetur adipisc ing ipsum dolor sit amet, consectetur elit.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pellentesque id nibh ac congue. Nullam dignissim egestas velit eget tempor. Morbi nec dolor neque. Maecenas quis tincidunt turpis. Cras ultricies pulvinar odio, sit amet lobortis lorem consectetur at. Vivamus risus erat, eleifend a nunc non, lacinia ultrices ante. Suspendisse a lacus at metus convallis maximus. Vivamus fringilla ipsum dolor. Cras pellentesque turpis id lacus condimentum condimentum. Sed tincidunt velit et urna eleifend imperdiet. Quisque euismod nibh at urna pellentesque, sit amet bibendum nibh fringilla. Sed dignissim varius blandit.</p>
						<p>Donec venenatis at eros sit amet aliquam. Donec vel orci efficitur, dictum nisl vitae, scelerisque nibh. Curabitur eget ipsum pulvinar nunc gravida interdum. Aenean lectus felis, rutrum non quam eu, accumsan semper ligula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut accumsan, mauris nec venenatis gravida, lacus est gravida augue, eu egestas lorem nisi nec nibh. Mauris luctus porttitor elit, ac efficitur nulla consectetur a. Pellentesque scelerisque pulvinar magna sit amet auctor. Fusce tincidunt convallis elit ante, nec ullamcorper ante rhoncus mollis. </p>
					</div>
					<div className="comment-warp">
						<h4 className="comment-title">Top Coments</h4>
						<ul className="comment-list">
							<li>
								<div className="comment">
									<div className="comment-avator set-bg" style={{backgroundImage: `url("/img/authors/1.jpg")`}}></div>
									<div className="comment-content">
										<h5>James Smith <span>June 21, 2018</span></h5>
										<p>Donec venenatis at eros sit amet aliquam. Donec vel orci efficitur, dictum nisl vitae, scelerisque nibh. Curabitur eget ipsum pulvinar nunc gravida interdum. </p>
										<a href="" className="reply">Reply</a>
									</div>
								</div>
							</li>
							<li>
								<div className="comment">
									<div className="comment-avator set-bg" style={{backgroundImage: `url("/img/authors/2.jpg")`}}></div>
									<div className="comment-content">
										<h5>James Smith <span>June 21, 2018</span></h5>
										<p>Donec venenatis at eros sit amet aliquam. Donec vel orci efficitur, dictum nisl vitae, scelerisque nibh. Curabitur eget ipsum pulvinar nunc gravida interdum. </p>
										<a href="" className="reply">Reply</a>
									</div>
								</div>
							</li>
						</ul>
					</div>
					<div className="comment-form-warp">
						<h4 className="comment-title">Leave Your Comment</h4>
						<form className="comment-form">
							<div className="row">
								<div className="col-md-6">
									<input type="text" placeholder="Name" />
								</div>
								<div className="col-md-6">
									<input type="email" placeholder="Email" />
								</div>
								<div className="col-lg-12">
									<input type="text" placeholder="Subject" />
									<textarea placeholder="Message"></textarea>
									<button className="site-btn btn-sm">Send</button>
								</div>
							</div>
						</form>
					</div>
				</div>
				
				<div className="col-lg-4 col-md-7 sidebar pt-5 pt-lg-0">
					
					<div className="widget-item">
						<form className="search-widget">
							<input type="text" placeholder="Search" />
							<button><i className="fa fa-search"></i></button>
						</form>
					</div>
					
					<div className="widget-item">
						<h4 className="widget-title">Latest Posts</h4>
						<div className="latest-blog">
							<div className="lb-item">
								<div className="lb-thumb set-bg" style={{backgroundImage: `url("/img/latest-blog/1.jpg")`}}></div>
								<div className="lb-content">
									<div className="lb-date">June 21, 2018</div>
									<p>Ipsum dolor sit amet, consectetur adipisc ing consecips</p>
									<a href="#" className="lb-author">By Admin</a>
								</div>
							</div>
							<div className="lb-item">
								<div className="lb-thumb set-bg" style={{backgroundImage: `url("/img/latest-blog/2.jpg")`}}></div>
								<div className="lb-content">
									<div className="lb-date">June 21, 2018</div>
									<p>Ipsum dolor sit amet, consectetur adipisc ing consecips</p>
									<a href="#" className="lb-author">By Admin</a>
								</div>
							</div>
							<div className="lb-item">
								<div className="lb-thumb set-bg" style={{backgroundImage: `url("/img/latest-blog/3.jpg")`}}></div>
								<div className="lb-content">
									<div className="lb-date">June 21, 2018</div>
									<p>Ipsum dolor sit amet, consectetur adipisc ing consecips</p>
									<a href="#" className="lb-author">By Admin</a>
								</div>
							</div>
						</div>
					</div>
					
					<div className="widget-item">
						<h4 className="widget-title">Top Comments</h4>
						<div className="top-comment">
							<div className="tc-item">
								<div className="tc-thumb set-bg" style={{backgroundImage: `url("/img/authors/1.jpg")`}}></div>
								<div className="tc-content">
									<p><a href="#">James Smith</a> <span>on</span> Lorem consec ipsum dolor sit amet, co</p>
									<div className="tc-date">June 21, 2018</div>
								</div>
							</div>
							<div className="tc-item">
								<div className="tc-thumb set-bg" style={{backgroundImage: `url("/img/authors/2.jpg")`}}></div>
								<div className="tc-content">
									<p><a href="#">Michael James</a> <span>on</span>Cras sit amet sapien aliquam</p>
									<div className="tc-date">June 21, 2018</div>
								</div>
							</div>
							<div className="tc-item">
								<div className="tc-thumb set-bg" style={{backgroundImage: `url("/img/authors/3.jpg")`}}></div>
								<div className="tc-content">
									<p><a href="#">Justin More</a> <span>on</span> Lorem ipsum dolor consecsit amet, co</p>
									<div className="tc-date">June 21, 2018</div>
								</div>
							</div>
						</div>
					</div>
					
					<div className="widget-item">
						<div className="feature-item set-bg" style={{backgroundImage: `url("/img/features/1.jpg")`}}>
							<span className="cata new">new</span>
							<div className="fi-content text-white">
								<h5><a href="#">Suspendisse ut justo tem por, rutrum</a></h5>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
								<a href="#" className="fi-comment">3 Comments</a>
							</div>
						</div>
					</div>
					
					<div className="widget-item">
						<div className="review-item">
							<div className="review-cover set-bg" style={{backgroundImage: `url("/img/review/1.jpg")`}}>
								<div className="score yellow">9.3</div>
							</div>
							<div className="review-text">
								<h5>Assasin’’s Creed</h5>
								<p>Lorem ipsum dolor sit amet, consectetur adipisc ing ipsum dolor sit ame.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section> 
    ); else {
        return <span>"Loading"</span>
    }
}

export default Lesson;