import Pagination from "@/app/ui/dashboard/pagination/pagination";
import Search from "@/app/ui/dashboard/search/search";
import styles from "@/app/ui/dashboard/category/category.module.css";
import Link from "next/link";

const CategoryPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <Search placeholder="Search for a category..."/>
                <Link href="/dashboard/category/add">
                <button className={styles.addButton}>Add New</button>
                </Link>
            </div>
            <table className={styles.table}>
            <thead>
          <tr>
            <td>Category</td>
            <td>Product</td>
            <td>Created At</td>
            <td>Action</td>
          </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <div className={styles.category}>
                            
                            Sony
                        </div>
                    </td>
                    <td>Iphone 13 Pro</td>
                    <td>20.04.2024</td>
                    <td>
                        <div className={styles.buttons}>
                        <Link href="/dashboard/category/view">
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

export default CategoryPage