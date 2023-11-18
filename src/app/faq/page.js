import Header from "@/components/Header";
import styles from './page.module.scss';
import Footer from "@/components/Footer";

const FaqScreeen = () => {
    return (
        <div className={styles.faqContainer}>
            <Header />

            <h1>FAQ</h1>
    
            <h3>This is FAQ, dont know what to add here </h3>
            <p>Important remind 3 times...</p>

            <h3>This is FAQ, dont know what to add here </h3>
            <p>Important remind 3 times...</p>

            <h3>This is FAQ, dont know what to add here </h3>
            <p>Important remind 3 times...</p>
    
            <Footer />
        </div>
    )
}

export default FaqScreeen;