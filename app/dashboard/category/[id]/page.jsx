import styles from "@/app/ui/dashboard/category/singleCategory/singleCategory.module.css";

const CategoryPage = async () => {

    return (
        <div className={styles.container}>
            
            <div className={styles.formContainer}>
                <form action="" className={styles.form}>
                <label>Category</label>
                <input type="text" name="name" placeholder="Name" />
                                
                <button>Update</button>
                </form>
            </div>
        </div>
    )
}

export default CategoryPage;