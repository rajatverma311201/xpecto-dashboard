import React, { useState, useEffect } from "react";
import axios from "axios";
const UsersCount = () => {
    const [usersData, setUsersData] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                const data = await axios.get(
                    `${import.meta.env.VITE_BACKEND_URL}/api/dashboard/users`
                );
                console.log(data.data);
                setUsersData((prev) => data.data);
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);

    if (!usersData) return (<h1>Loading... </h1>);
    return (
        <>
            <h1>Total registrations - {usersData.data.allUsers.length}</h1>
            <h2>IIT Mandi - {usersData.fromMandi}</h2>
            <h2>Others - {usersData.results * 1 - usersData.fromMandi * 1}</h2>
        </>
    );
};

export default UsersCount;
