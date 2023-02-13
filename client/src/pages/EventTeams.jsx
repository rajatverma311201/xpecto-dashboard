import axios from "axios";
import React, { useState, useEffect } from "react";
import styles from "./EventTeams.module.css";
const EventTeams = () => {
    const [eventTeamData, setEventTeamData] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                const data = await axios.get(
                    `${
                        import.meta.env.VITE_BACKEND_URL
                    }/api/dashboard/eventTeams`
                );
                // console.log(data.data.data);
                setEventTeamData((prev) => data.data.data);
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);

    return (
        <div>
            {eventTeamData ? (
                <>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>TeamName</th>
                                <th>EventName</th>
                                <th>Num-Users</th>
                                <th>Users</th>
                            </tr>
                        </thead>
                        <tbody>
                            {eventTeamData.map((data) => {
                                return (
                                    <tr key={data.teamName}>
                                        <td>{data.teamName}</td>
                                        <td>{data.game.name}</td>
                                        <td>{data.players.length}</td>
                                        <td>
                                            <table className={styles.table}>
                                                <tbody>
                                                    {data.players.map(
                                                        (player) => {
                                                            return (
                                                                <tr
                                                                    key={
                                                                        player.email
                                                                    }
                                                                >
                                                                    <td>
                                                                        {
                                                                            player.displayName
                                                                        }
                                                                    </td>
                                                                    <td>
                                                                        {
                                                                            player.email
                                                                        }
                                                                    </td>
                                                                </tr>
                                                            );
                                                        }
                                                    )}
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </>
            ) : (
                <h1>Loading</h1>
            )}
        </div>
    );
};

export default EventTeams;
