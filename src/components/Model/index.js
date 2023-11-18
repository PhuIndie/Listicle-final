import styles from './styles.module.scss'
function Modal({children}) {
    return(
        <div className={styles.modal}>
            <div className={styles.content}>
                <h2>Hello</h2>
                {children}
                </div>
        </div>
    )
}

export default Modal