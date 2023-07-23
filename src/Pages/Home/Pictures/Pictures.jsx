import React, { useEffect, useState } from "react";

const Pictures = () => {
  const [pictures, setPictures] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/pictures')
      .then(res => res.json())
      .then(data => setPictures(data));
  }, []);

  return (
    <div className="font-serif mt-10 mx-10 bg-slate-300 p-10 opacity-90">
      <h2 className="text-3xl font-bold mb-4">Proud College Graduates</h2>
      <p className="text-gray-500 mb-4">{pictures.length} Pictures</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {pictures.map(picture => (
          <div key={picture.id} className="relative aspect-w-1 aspect-h-1 overflow-hidden rounded-lg shadow-md">
            <img src={picture.img} alt={picture.college_name} className="object-cover w-full h-full" />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity">
              <p className="text-white text-lg font-semibold">{picture.college_name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pictures;
