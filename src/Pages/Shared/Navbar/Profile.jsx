import { useEffect, useState } from "react";


const Profile = () => {
    const [profileData, setProfileData] = useState([]);
    console.log(profileData);
    useEffect(() =>{
        fetch('http://localhost:5000/user')
        .then(res => res.json())
        .then(data => setProfileData(data))
    }, [])
    return (
        <div>
            <h2>Your Profile here{profileData?.length}</h2>
        </div>
    );
};

export default Profile;