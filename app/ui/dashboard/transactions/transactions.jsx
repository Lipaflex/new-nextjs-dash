import styles from "./transactions.module.css";

const Transactions = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Latest Transactions</h2>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Status</td>
                        <td>Date</td>
                        <td>Amount</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                        <div className={styles.user}>
                        <img 
                            src="/noavatar.png" 
                            alt=""
                            width={40}
                            height={40}
                            className= {styles.userImage}
                            />
                            Jack Kinyua
                        </div>
                        </td>
                        <td>
                        <span className={`${styles.status} ${styles.done}`}>
                            Done
                        </span>
                        </td>
                        <td>24.03.2024</td>
                        <td>Ksh 98,200</td>
                    </tr>
                    <tr>
                        <td>
                        <div className={styles.user}>
                        <img 
                            src="/noavatar.png" 
                            alt=""
                            width={40}
                            height={40}
                            className= {styles.userImage}
                            />
                            Carol Mbutha
                        </div>
                        </td>
                        <td>
                        <span className={`${styles.status} ${styles.cancelled}`}>
                            Cancelled
                        </span>
                        </td>
                        <td>24.03.2024</td>
                        <td>Ksh 8,500</td>
                    </tr>
                    <tr>
                        <td>
                        <div className={styles.user}>
                        <img 
                            src="/noavatar.png" 
                            alt=""
                            width={40}
                            height={40}
                            className= {styles.userImage}
                            />
                            Alex Machii
                        </div>
                        </td>
                        <td>
                        <span className={`${styles.status} ${styles.done}`}>
                            Done
                        </span>
                        </td>
                        <td>24.03.2024</td>
                        <td>Ksh 10,500</td>
                    </tr>
                    <tr>
                        <td>
                        <div className={styles.user}>
                        <img 
                            src="/noavatar.png" 
                            alt=""
                            width={40}
                            height={40}
                            className= {styles.userImage}
                            />
                            Joe Doe
                        </div>
                        </td>
                        <td>
                        <span className={`${styles.status} ${styles.pending}`}>
                            Pending
                        </span>
                        </td>
                        <td>24.03.2024</td>
                        <td>Ksh 100,800</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Transactions