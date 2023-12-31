'use client'
import Header from "@/components/Header";
import styles from './page.module.scss';
import ListItem from "@/components/ListItem";
import Button from "@/components/Button";
import { useUser } from "@/hooks/useUser";
import ProtectedRoute from "@/hoc/ProtectedRoute";

const Settings = () => {
    const { logout } = useUser();

    return (
        <div className={styles.settingsContainer}>
            <Header />

            <h2 className={styles.title}>Settings</h2>

            <p className={styles.subtitle}>Helpful Links</p>
    
            <div className={styles.actionsContainer}>
                <ListItem title="My Listings" link="/my-listings" />
                <ListItem title="Contact Us" link="https://google.com" />
                <ListItem title="Privacy Policy" link="https://google.com" />
                <ListItem title="Terms and Conditions" link="https://google.com" />

                <Button className={styles.logoutButton} onClick={logout}>Log out</Button>
            </div>
        </div>
    )
}

export default ProtectedRoute(Settings);