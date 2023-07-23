import { Link } from 'react-router-dom';
import './College.css'

const College = ({ colleg }) => {
    const {
        _id,
        image_url,
        name,
        admission_dates,
        research_history,
        events,
        details,
    } = colleg;

    return (
        <div className="flex font-serif flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden mx-4 my-6">
            <img
                className="w-full md:w-1/2 h-64 md:h-auto object-cover rounded-t-lg md:rounded-l-lg"
                src={image_url}
                alt={name}
            />
            <div className="w-full md:w-1/2 p-6 flex flex-col justify-between">
                <div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">{name}</h2>
                    <p className="text-sm mb-2"><span className='font-bold'>Admission Dates:</span> {admission_dates}</p>
                    <p className="text-sm mb-4">{research_history}</p>
                    <h3 className="text-lg font-bold mb-2">Upcoming Events:</h3>
                    <ul className="list-disc pl-6 mb-4">
                        {events.map((event, index) => (
                            <li key={index} className="text-sm">
                                {event}
                            </li>
                        ))}
                    </ul>

                </div>
                <div className="text-sm mb-4 md:mb-2 bg-black p-4 opacity-70 rounded-lg  text-white">
                    <p className="mb-2">{details.admission_process}</p>
                    <p className="mb-2">{details.events_details}</p>
                </div>
                <Link to={`/colleges/${_id}`}><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Details
                </button>
                </Link>
            </div>
        </div>
    );
};

export default College;
