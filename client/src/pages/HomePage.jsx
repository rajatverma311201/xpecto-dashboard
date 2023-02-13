import React from "react";
import { Button, Grid, Link } from "@nextui-org/react";
import styles from "./HomePage.module.css";
const HomePage = () => {
    return (
        <div className={styles.homePageContainer}>
            <Grid.Container gap={2}>
                <Grid>
                    <Link href="/registrations">
                        <Button size="xl" shadow color="primary" auto>
                            Registrations
                        </Button>
                    </Link>
                </Grid>

                <Grid>
                    <Link href="/referral-data">
                        <Button size="xl" shadow color="primary" auto>
                            Referral Data
                        </Button>
                    </Link>
                </Grid>
                <Grid>
                    <Link href="/event-teams">
                        <Button size="xl" shadow color="primary" auto>
                            Event Teams
                        </Button>
                    </Link>
                </Grid>
            </Grid.Container>
        </div>
    );
};

export default HomePage;
