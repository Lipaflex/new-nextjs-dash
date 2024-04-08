import Pagination from "@/app/ui/dashboard/pagination/pagination";
import Search from "@/app/ui/dashboard/search/search";
import styles from "@/app/ui/dashboard/brand/brand.module.css";
import Link from "next/link";

const BrandPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <Search placeholder="Search for a brand..."/>
                <Link href="/dashboard/brand/add">
                <button className={styles.addButton}>Add New</button>
                </Link>
            </div>
            <table className={styles.table}>
            <thead>
          <tr>
            <td>Brand Name</td>
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
                        <div className={styles.brand}>
                            <img src="/noavatar.png" 
                            alt="" 
                            width={40} 
                            height={40} 
                            className={styles.brandImage}
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
                        <Link href="/dashboard/brand/view">
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

export default BrandPage