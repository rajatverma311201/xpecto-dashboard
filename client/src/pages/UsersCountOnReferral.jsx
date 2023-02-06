import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./UsersCountOnReferral.module.css";
const UsersCountOnReferral = () => {
    const [eventsData, setEventsData] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                const data = await axios.get(
                    `${
                        import.meta.env.VITE_BACKEND_URL
                    }/api/dashboard/users/referral`
                );
                setEventsData((prev) => data.data.data.allUsers);
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);

    return (
        <div>
            {eventsData ? (
                <table className={styles.table}>
                    <thead className={styles.thead}>
                        <tr>
                            <th>Referral Code</th>
                            <th>Count</th>
                        </tr>
                    </thead>
                    <tbody>
                        {eventsData.map((data) => {
                            return (
                                <tr key={data._id}>
                                    <td>{data._id}</td>
                                    <td>{data.numUsers}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            ) : (
                <h1>Loading</h1>
            )}
        </div>
    );
};

export default UsersCountOnReferral;
