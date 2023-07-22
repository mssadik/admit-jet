import './Banner.css'
const Banner = () => {
    return (
      <div className="banner relative">
        <img
          src="https://i.ibb.co/m523XL5/b1.jpg"
          alt="Banner Image"
          className="w-full h-auto shadow-md"
        />
        <div className="banner-text absolute inset-0 bg-black opacity-50 flex flex-col justify-center items-center text-center">
          <h2 className="text-5xl font-bold text-white mb-4">Welcome to Admit Jet!</h2>
          <p className="text-lg text-white opacity-90">Your gateway to college admissions.</p>
          <button className="my-button mt-5">Admission</button>
        </div>
      </div>
    );
  };
  
  export default Banner;
  