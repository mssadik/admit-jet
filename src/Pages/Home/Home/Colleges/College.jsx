

const College = ({ college }) => {
    const { name, image, admissionDate, events, sports, researchHistory } = college;

    return (
        <div className="bg-white rounded-lg shadow-md p-4 mx-2 my-4">
            <img src={image} alt={name} className="w-full h-40 object-cover rounded-t-lg mb-4" />
            <h3 className="text-xl font-bold mb-2">{name}</h3>
            <p className="text-sm text-gray-600 mb-2">Admission Date: {admissionDate}</p>
            <h4 className="text-lg font-semibold mb-2">Events</h4>
            <ul className="list-disc ml-6 mb-4">
                {events.map((event, index) => (
                    <li key={index}>{event}</li>
                ))}
            </ul>
            <h4 className="text-lg font-semibold mb-2">Sports</h4>
            <ul className="list-disc ml-6 mb-4">
                {sports.map((sport, index) => (
                    <li key={index}>{sport}</li>
                ))}
            </ul>
            <h4 className="text-lg font-semibold mb-2">Research History</h4>
            <p className="text-sm text-gray-600">{researchHistory}</p>
        </div>
    );
};

export default College;
