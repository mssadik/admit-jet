import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

const CollegeDetails = () => {
    const college = useLoaderData();

    useEffect(() => {
        // Trigger animation when component mounts
        document.body.classList.add("bg-gray-100"); // Set background color for the whole page
    }, []);

    return (
        <CSSTransition in={true} appear={true} timeout={1000} classNames="fade">
            <div className="h-screen flex items-center justify-center font-serif">
                <div className="container mx-auto bg-white rounded-lg shadow-lg p-6 md:flex">
                    <div className="md:w-1/2 md:pr-6">
                        <div className="mb-6">
                            <img src={college.image_url} alt={college.name} className="w-full h-64 object-cover rounded" />
                        </div>

                        <div className="mb-6">
                            <h3 className="text-xl font-bold">Events:</h3>
                            <ul>
                                {college.events.map((event) => (
                                    <li key={event}>{event}</li>
                                ))}
                            </ul>
                        </div>
                        <p>{college.details.events_details}</p>

                        {/* You can add additional sections here to display more details */}
                    </div>

                    <div className="md:w-1/2">
                        <h2 className="text-2xl font-bold mb-4">{college.name}</h2>
                        <p className="text-gray-600 mb-4">{college.location}</p>

                        <div className="mb-6">
                            <h3 className=" font-bold">Admission Dates:</h3>
                            <p className="text-sm">{college.admission_dates}</p>
                            <h3 className=" font-bold">Admission Process:</h3>
                            <h2>{college.details.admission_process}</h2>
                            <h3 className=" font-bold">Reserch Works</h3>
                            <h2>{college.details.research_works}</h2>
                        </div>

                        <div className="mb-6">
                            <h3 className=" font-bold">Research History:</h3>
                            <p className="text-sm">{college.research_history}</p>
                        </div>

                        <div className="mb-6">
                            <h3 className=" font-bold">Sports Categories:</h3>
                            <ul className="flex">
                                {college.sports_categories.map((sport) => (
                                    <li className="ml-2" key={sport}>{sport}</li>
                                ))}
                            </ul>
                            <h3 className=" font-bold">Sports Details</h3>
                            <p className="text-sm">{college.details.sports_details}</p>
                        </div>
                    </div>
                </div>
            </div>
        </CSSTransition>
    );
};

export default CollegeDetails;
