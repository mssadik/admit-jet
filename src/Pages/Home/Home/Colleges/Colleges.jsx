import { useEffect, useState } from "react";
import College from "./College";

const Colleges = () => {
  const [colleges, setColleges] = useState([]);

  useEffect(() => {
    fetch('college.json')
      .then(res => res.json())
      .then(data => setColleges(data))
      .catch(error => console.error('Error fetching college data:', error));
  }, []);

  return (
    <div  className="mx-20 my-20">
      <p className="text-xs font-bold">Check It Out ||</p>

      <div className="grid grid-cols-3 gap-3">
        {colleges.map( college => <College key={college.id} college={college}></College>)}
      </div>
    </div>
  );
};

export default Colleges;
