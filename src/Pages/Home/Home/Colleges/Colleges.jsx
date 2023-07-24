import { useEffect, useState } from "react";
import College from "./College";

const Colleges = () => {
  const [colleges, setColleges] = useState([]);
  // console.log(colleges);

  useEffect(() => {
    fetch('https://admit-jet-server.vercel.app/colleges')
      .then(res => res.json())
      .then(data => setColleges(data))
      .catch(error => console.error('Error fetching college data:', error));
  }, []);

  return (
    <div className="mx-20 my-20">
      <p className="text-xs font-bold">Check It Out ||</p>

      <div className="">
        {colleges.slice(0, 3).map(colleg => <College key={colleg._id} colleg={colleg} />)}
      </div>
    </div>
  );
};

export default Colleges;
