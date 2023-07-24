import { useContext, useEffect, useState } from "react";
import { AuthContext } from './../../../Providers/AuthProvider';

const Profile = () => {
    const {user} = useContext(AuthContext);
    console.log(user?.email);
    const [profileData, setProfileData] = useState([]);
    // console.log(profileData);
    useEffect(() =>{
        fetch(`https://admit-jet-server.vercel.app/user`)
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