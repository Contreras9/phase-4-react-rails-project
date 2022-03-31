import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function Coderprofile() {

   const [coder, setCoder] = useState({lessons: []})
   let {name} = useParams()

   useEffect(() => {
      fetch(`/show_profile/${name}`, {
         method:"GET",
         headers: {
            "Content_type": "application/json"
         }
      })
      .then(res => res.json())
      .then(res => {
         console.log(res);
         setCoder(res)
      })
   }, [])

   return (
      <div>
         {name}
         {coder.age}
         {coder.lessons.map(lesson => <Link to={"/lesson/" + lesson.id}> {lesson.title}</Link>)}
      </div>
   );
}

export default Coderprofile;