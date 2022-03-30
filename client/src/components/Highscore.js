import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Highscore() {

   const [coders, setHighscore] = useState([])

   useEffect(() => {
      fetch("/highscore", {
         method:"GET",
         headers: {
            "Content_type": "application/json"
         }
      })
      .then(res => res.json())
      .then(res => {
         console.log(res);
         setHighscore(res)
      })
   }, [])



    

   return (
   <div>
      <ul> {coders.map(coder => <Link to={"/profile/" + coder.name}> {coder.name}</Link>)} </ul>
      </div>
   );
}

export default Highscore;