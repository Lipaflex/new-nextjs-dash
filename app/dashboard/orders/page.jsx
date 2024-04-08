import Pagination from "@/app/ui/dashboard/pagination/pagination";
import Search from "@/app/ui/dashboard/search/search";
import styles from "@/app/ui/dashboard/orders/orders.module.css";
import Link from "next/link";

const OrderPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <Search placeholder="Search for an order..."/>
            </div>
            <table className={styles.table}>
            <thead>
          <tr>
            <td>Order By</td>
            <td>Product</td>
            <td>Created At</td>
            <td>Price</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <div className={styles.order}>
                            <img src="/noavatar.png" 
                            alt="" 
                            width={40} 
                            height={40} 
                            className={styles.orderImage}
                            />
                            Jack Muriithi
                        </div>
                    </td>
                    <td>Iphone 13 Pro</td>
                    <td>20.04.2024</td>
                    <td>Ksh 100,000</td>
                    <td>active</td>
                    <td>
                        <div className={styles.buttons}>
                        <Link href="/dashboard/orders/view">
                            <button className={`${styles.button} ${styles.view}`}>
                                View
                                </button>
                        </Link>
                        <button className={`${styles.button} ${styles.delete}`}>
                                Delete
                                </button>
                        </div>
                    </td>
                </tr>
            </tbody>
            </table>
            <Pagination/>
        </div>
    )
}

export default OrderPage