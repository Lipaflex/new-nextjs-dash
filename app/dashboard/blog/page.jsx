import Link from "next/link"
import styles from "@/app/ui/dashboard/blog/blog.module.css";
import Search from "@/app/ui/dashboard/search/search";
import Pagination from "@/app/ui/dashboard/pagination/pagination";

const BlogPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <Search placeholder="Search for a blog..."/>
                <Link href="/dashboard/blog/add">
                <button className={styles.addButton}>Add New</button>
                </Link>
            </div>
            <table className={styles.table}>
            <thead>
          <tr>
          <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Created At</td>
            <td>Stock</td>
            <td>Action</td>
          </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <div className={styles.blog}>
                            <img src="/noproduct.jpg"
                            alt="" 
                            width={40} 
                            height={40} 
                            className={styles.blogImage}
                            />
                            Iphone
                        </div>
                    </td>
                    <td>Desc</td>
                    <td>Ksh 110,000</td>
                    <td>13.02.2024</td>
                    <td>72</td>
                    <td>
                        <div className={styles.buttons}>
                        <Link href="/dashboard/blog/view">
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
            <Pagination />
        </div>
    )
}

export default BlogPage