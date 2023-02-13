import React from "react";
import { Navbar, Button, Link, Text, Card, Radio } from "@nextui-org/react";
import styles from "./MainNavigation.module.css";
const MainNavigation = () => {
    const collapseItems = [
        {
            name: "Referral Data",
            link: "/referral-data",
        },
        {
            name: "Registrations",
            link: "/registrations",
        },
        {
            name: "Event Teams",
            link: "/event-teams",
        },
    ];
    return (
        // <div className={styles["main-navigation-container"]}>
        <Navbar isBordered variant={"floating"}>
            <Navbar.Brand>
                <Navbar.Toggle aria-label="toggle navigation" showIn="xs" />

                {/* <AcmeLogo /> */}
                {/* <Navbar.Link href="/">XPECTO</Navbar.Link> */}
                <Text b color="inherit">
                    XPECTO
                </Text>
            </Navbar.Brand>
            <Navbar.Content hideIn="xs">
                <Navbar.Link href="/">Home</Navbar.Link>
                <Navbar.Link href="/registrations">Registrations</Navbar.Link>
                <Navbar.Link href="/referral-data">Referral Data</Navbar.Link>
                <Navbar.Link href="/event-teams">Event Teams</Navbar.Link>
                {/* <Navbar.Link href="#">Pricing</Navbar.Link>
                    <Navbar.Link href="#">Company</Navbar.Link> */}
            </Navbar.Content>
            {/* <Navbar.Content>
                    <Navbar.Link color="inherit" href="#">
                        Login
                    </Navbar.Link>
                    <Navbar.Item>
                        <Button auto flat as={Link} href="#">
                            Sign Up
                        </Button>
                    </Navbar.Item>
                </Navbar.Content> */}

            <Navbar.Collapse>
                {collapseItems.map((item, index) => (
                    <Navbar.CollapseItem key={item.name}>
                        <Link
                            color="inherit"
                            css={{
                                minWidth: "100%",
                            }}
                            href={item.link}
                        >
                            {item.name}
                        </Link>
                    </Navbar.CollapseItem>
                ))}
            </Navbar.Collapse>
        </Navbar>
        // </div>
    );
};

export default MainNavigation;
